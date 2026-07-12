import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"

/**
 * Mirrors the framework-agnostic slice of @chakra-ui/react's src into
 * @chakra-ui/vue's src, preserving the same relative folder layout so
 * re-syncing stays mechanical.
 *
 * react's own `styled-system/` and `preset-base.ts` are deliberately NOT
 * mirrored: `panda.config.ts` (jsxFramework: "vue") generates a
 * self-sufficient runtime styling engine into `src/styled-system` (css/cva/
 * sva, the `chakra` factory, token/recipe lookups) from the
 * `@chakra-ui/panda-preset` preset, which already supplies the same
 * conditions/utilities as preset-base.ts. A hand-mirrored copy of react's
 * Emotion-era engine would just duplicate what codegen produces. This
 * generated `src/styled-system` is committed (not gitignored) — it's a
 * package-internal runtime dependency, not disposable build output. See
 * docs/plans/chakra-ui-vue.md.
 *
 * React-bound files (factory.tsx, provider.tsx, use-*.ts hooks,
 * create-*-recipe-context.tsx, factory.types.ts, utils/ref.ts) are
 * intentionally excluded — Vue reimplements those fresh.
 *
 * `theme/`'s `defineTokens`/`defineRecipe`/`defineSlotRecipe`/etc. imports
 * are rewritten from react's `../../styled-system` (and `../styled-system`)
 * to `@pandacss/dev` — see `rewriteThemeImports` below. These stay on
 * `@pandacss/dev` deliberately, matching Panda's own docs: `define*` config
 * helpers are authored against `@pandacss/dev`, while the generated
 * `styled-system` entrypoint is for *consuming* compiled output (the `css`/
 * `chakra` runtime, generated recipe variant types), not authoring recipes.
 *
 * `defineStyle` is aliased to Panda's `defineStyles` (plural; Panda has no
 * singular export). Standalone style objects that get spread into a
 * `defineSlotRecipe` call (e.g. theme/recipes/tree-view.ts,
 * theme/recipes/editable.ts, theme/recipes/number-input.ts) should use
 * `as SystemStyleObject` instead of wrapping in `defineStyles()` — the
 * function-call form can blow past TS's structural-comparison budget
 * (TS2590) once spread back into a recipe's generic. Import that
 * `SystemStyleObject` from `@pandacss/dev` (same source `defineSlotRecipe`
 * resolves against), NOT from `../../styled-system/types` — casting to the
 * generated module's narrower `SystemStyleObject` reintroduces the same
 * TS2590 by creating a type mismatch at the `defineSlotRecipe` call
 * boundary instead.
 */

const REACT_SRC = "../react/src"
const VUE_SRC = "src"

const UTILS_FILES = [
  "attr.ts",
  "call-all.ts",
  "clone.ts",
  "compact.ts",
  "create-props.ts",
  "cx.ts",
  "entries.ts",
  "flatten.ts",
  "interop.ts",
  "is.ts",
  "memo.ts",
  "merge.ts",
  "omit.ts",
  "split-props.ts",
  "types.ts",
  "uniq.ts",
  "unit.ts",
  "walk-object.ts",
].map((file) => join("utils", file))

async function copyFile(relPath: string) {
  const from = join(REACT_SRC, relPath)
  const to = join(VUE_SRC, relPath)
  await mkdir(dirname(to), { recursive: true })
  await cp(from, to)
}

async function mirrorUtilsIndex() {
  const content = await readFile(join(REACT_SRC, "utils/index.ts"), "utf8")
  const withoutRef = content
    .split("\n")
    .filter((line) => line.trim() !== `export * from "./ref"`)
    .join("\n")
  await writeFile(join(VUE_SRC, "utils/index.ts"), withoutRef)
}

async function walkTsFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) return walkTsFiles(full)
      return entry.name.endsWith(".ts") ? [full] : []
    }),
  )
  return files.flat()
}

async function rewriteThemeImports() {
  const themeDir = join(VUE_SRC, "theme")
  const files = await walkTsFiles(themeDir)
  for (const file of files) {
    const content = await readFile(file, "utf8")
    const rewritten = content
      // Panda has no singular `defineStyle` export — alias its `defineStyles`.
      .replace(
        /import \{ defineSlotRecipe, defineStyle \} from "\.\.\/(\.\.\/)?styled-system"/,
        'import { defineSlotRecipe, defineStyles as defineStyle } from "@pandacss/dev"',
      )
      .replace(/from "\.\.\/(\.\.\/)?styled-system"/g, 'from "@pandacss/dev"')
    if (rewritten !== content) await writeFile(file, rewritten)
  }
}

async function main() {
  for (const file of UTILS_FILES) {
    await copyFile(file)
  }
  await mirrorUtilsIndex()

  await cp(join(REACT_SRC, "theme"), join(VUE_SRC, "theme"), {
    recursive: true,
  })
  await rewriteThemeImports()
}

main()
