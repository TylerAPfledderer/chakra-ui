import { cp, mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"

/**
 * Mirrors the framework-agnostic slice of @chakra-ui/react's src into
 * @chakra-ui/vue's src, preserving the same relative folder layout so
 * re-syncing or a future shared-package extraction is mechanical.
 *
 * React-bound files (factory.tsx, provider.tsx, use-*.ts hooks,
 * create-*-recipe-context.tsx, factory.types.ts, utils/ref.ts) are
 * intentionally excluded — Vue reimplements those fresh.
 *
 * See docs/plans/chakra-ui-vue.md, "What gets mirrored into
 * packages/vue/src".
 */

const REACT_SRC = "../react/src"
const VUE_SRC = "src"

const STYLED_SYSTEM_FILES = [
  "breakpoints.ts",
  "calc.ts",
  "color-mix.ts",
  "composition.ts",
  "conditions.ts",
  "config.ts",
  "css-var.ts",
  "css.ts",
  "css.types.ts",
  "cva.ts",
  "empty.ts",
  "esc.ts",
  "expand-reference.ts",
  "layers.ts",
  "map-to-json.ts",
  "merge-config.ts",
  "normalize.ts",
  "preflight.ts",
  "recipe.types.ts",
  "references.ts",
  "selectors.ts",
  "serialize.ts",
  "singleton.ts",
  "sort-at-params.ts",
  "sort-at-rules.ts",
  "sva.ts",
  "system.ts",
  "token-dictionary.ts",
  "token-middleware.ts",
  "token-transforms.ts",
  "types.ts",
  "unit-conversion.ts",
  "utility.ts",
].map((file) => join("styled-system", file))

const STYLED_SYSTEM_GENERATED_FILES = [
  "conditions.gen.ts",
  "prop-types.gen.ts",
  "recipes.gen.ts",
  "system.gen.ts",
  "token.gen.ts",
].map((file) => join("styled-system", "generated", file))

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

async function main() {
  for (const file of [
    ...STYLED_SYSTEM_FILES,
    ...STYLED_SYSTEM_GENERATED_FILES,
    ...UTILS_FILES,
  ]) {
    await copyFile(file)
  }
  await mirrorUtilsIndex()

  await cp(join(REACT_SRC, "theme"), join(VUE_SRC, "theme"), {
    recursive: true,
  })
  await copyFile("preset-base.ts")
}

main()
