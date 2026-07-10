# Plan: Add `@chakra-ui/vue` to the monorepo

## Context

Chakra UI has no first-party Vue package today. `packages/` contains only
`react`, `charts`, `cli`, and `panda-preset` — every utility, the entire
styled-system engine, the default theme, and all 115 components live inside
`@chakra-ui/react`, and its styling runtime is bound to Emotion. The goal is to
bring Chakra UI to the Vue ecosystem by adding `@chakra-ui/vue` as a sibling to
`@chakra-ui/react`, replacing Emotion with PandaCSS (build-time), and shipping
components one at a time behind a controlled review cycle.

**Guiding principle:** move **quickly but sensibly**, avoiding unexpected
blockers/bugs. Concretely — **do NOT refactor `@chakra-ui/react`.** The Vue
package is **self-contained**: it _mirrors_ the framework-agnostic
utilities/engine it needs into its own `packages/vue/src` tree. Any dedupe into
a shared package is deferred to an **optional final refactor**, done only once
the Vue package is proven. This eliminates the biggest risk (destabilizing the
flagship package) by avoidance.

Confirmed pre-work: no open issues or PRs in the origin fork
(`TylerAPfledderer/chakra-ui`) discuss this, so we are clear to proceed.

### Decisions locked

- **Self-contained package (no react extraction):** copy/mirror the needed
  agnostic code into `@chakra-ui/vue`; leave `@chakra-ui/react` untouched.
  Shared-package extraction is a later, optional cleanup.
- **Styling model:** PandaCSS **build-time codegen**. Panda is a _required_
  dependency of `@chakra-ui/vue` only; it stays a repo-wide dev tool for both.
  **Style props retained** — Panda supports JSX style props in Vue 3
  (`jsxFramework: "vue"`) via its generated `styled` factory with
  `jsxStyleProps: "all"`. The Chakra Vue factory wraps Panda's `styled` factory
  to keep `<chakra.div p="4">` ergonomics. Static-analysis caveat applies to
  arbitrary runtime values (documented; universal to Panda).
- **Consumer styling distribution (Risk #1 resolved):** library is
  **self-contained** — imports its own bundled styled-system + ships static
  `styles.css`; consumers who customize run standard `panda codegen` at the
  **default project-root `outdir`** (NOT `emitPackage`/node_modules, no
  `importMap` contract).
- **Consumer styling API (Risk #2 resolved):** ship style props + `css` prop +
  `css()` + recipes. Docs lead with style props (react parity); `css()` is the
  composition/escape-hatch. Prebuilt components need no Panda; the `chakra.*`
  factory in consumer app code requires consumer Panda codegen (the "Panda
  required for Vue" contract). Required consumer config:
  `presets: ["@chakra-ui/panda-preset"]`, `jsxFramework: "vue"`,
  `jsxFactory: "chakra"`.
- **Authoring format:** **TSX with Vue's JSX runtime**
  (`jsxImportSource: "vue"`), mirroring react's factory/`withProvider` structure
  1-to-1.
- **Storybook (Risk #4 resolved):** dedicated Vue instance (`.storybook-vue/` +
  `@storybook/vue3-vite` + `storybook:vue` script); React `.storybook/`
  untouched (one Storybook instance = one renderer).
- **First pilot:** the `chakra` factory + `Box` + `ChakraProvider`.

### Ark UI Vue compatibility (verified)

`@ark-ui/vue@5.37.2` declares `peerDependencies.vue: ">=3.5.0"` (deps on
`@zag-js/* 1.41.2`, `@internationalized/date 3.12.2`; no `engines`). We **mirror
this limitation**: `@chakra-ui/vue` sets `peerDependencies.vue: ">=3.5.0"` and
depends on `@ark-ui/vue` on the same `^5.x` line react uses for `@ark-ui/react`
(currently `^5.29.1`).

## Branch & PR strategy

All work lands in the **fork** (`TylerAPfledderer/chakra-ui`). The long-lived
integration branch **`feature/chakra-ui-vue`** is the base for every PR. Each
unit of work is a topic branch → PR **targeting `feature/chakra-ui-vue`** for CI
→ merge → next.

## Architecture overview

Two packages, react unchanged:

1. **`@chakra-ui/react`** — **untouched.**
2. **`@chakra-ui/vue`** (new, published, self-contained) — mirrors the agnostic
   engine/utils/theme it needs; Vue-bound factory/provider/composables (Panda,
   no Emotion); Ark-wrapped components. Depends on `@ark-ui/vue`,
   `@chakra-ui/panda-preset`, `@pandacss/dev`; peer `vue: ">=3.5.0"`.

### What gets mirrored into `packages/vue/src` (verified framework-agnostic)

Copied from `packages/react/src` (adapted, not moved — react keeps its copies):

- **styled-system engine (pure):** `system.ts` (`createSystem`), `css.ts`,
  `cva.ts`, `sva.ts`, `token-dictionary.ts` + token pipeline
  (`token-middleware`, `token-transforms`, `expand-reference`, `references`,
  `map-to-json`), `breakpoints.ts`, `conditions.ts`, `utility.ts`, `calc.ts`,
  `color-mix.ts`, `css-var.ts`, `normalize.ts`, `serialize.ts`, `layers.ts`,
  `preflight.ts`, `selectors.ts`, `config.ts`, `merge-config.ts`, `esc.ts`,
  `empty.ts`, `singleton.ts`, `composition.ts`, plus pure type files and
  `generated/*` (regenerated for vue via the CLI).
- **`utils/`** — all except `ref.ts` (reads `React.version`); vue provides its
  own ref/template-ref helper. Drop the `ref` re-export from the mirrored
  `utils/index.ts`.
- **`theme/`** — entire tree (`tokens/`, `semantic-tokens/`, `recipes/`,
  `breakpoints.ts`, `text-styles.ts`, `layer-styles.ts`, `motion-styles.ts`,
  `global-css.ts`, `slot-recipes.ts`, `recipes.ts`, `index.ts`) and
  `preset-base.ts` (`defaultConditions` + `utilities`). Alternatively consume
  `@chakra-ui/panda-preset` directly for theme values — decide during scaffold.

Prefer a small script/`git`-based copy so the mirror is reproducible and a
future extraction is mechanical. Keep the same relative folder layout as react
so the diff is easy to reason about.

### Vue-specific reimplementations (replace the React-bound files)

Author fresh for Vue (do NOT copy react's): the `chakra` factory (`factory.tsx`,
wrapping Panda's generated `styled` factory — no Emotion), `ChakraProvider` (Vue
`provide`/`inject` + global CSS injection, replacing Emotion `<Global>`), recipe
context factories (`createRecipeContext`/`createSlotRecipeContext` as Vue
composables), `useRecipe`/`useSlotRecipe`/`useToken` composables, and a Vue ref
helper. Reuse `@pandacss/is-valid-prop` for prop-forwarding
(framework-agnostic). Reference the react originals under
`packages/react/src/styled-system/` for parity.

### Vue styling pipeline (Panda build-time)

- Uses **`@chakra-ui/panda-preset`** (already the exact Panda mirror of the
  theme) as the default Panda config.
- At the **vue package build time**, Panda codegen (`jsxFramework: "vue"`,
  `jsxFactory: "chakra"`, `jsxStyleProps: "all"`) emits a package-internal
  `styled-system/` (Vue `styled` factory, `css`/`cva`/recipe fns, stable
  `chakra-`-prefixed recipe classes) + a shipped `styles.css`. Both are bundled
  into `dist` so the runtime never imports the consumer's output.
- Consumers: import components + `@chakra-ui/vue/styles.css` → zero setup.
  Customizers run standard project-root `panda codegen` extending the chakra
  preset; token overrides cascade as CSS vars, recipe overrides regenerate under
  Panda layers.

## Execution phases

### Phase 1 — Vue package foundation (PR → `feature/chakra-ui-vue`)

1. Scaffold `packages/vue` (`@chakra-ui/vue`, v `3.31.0`; changesets `fixed`)
   mirroring react's `package.json` shape (dual ESM/CJS via shared
   `scripts/build/main.ts`, `dev` export condition, `prepack`/`postpack` =
   `scripts/conditions.ts`, `exports` map for `.`, `./styled-system`, `./theme`,
   `./preset`, `./*` component subpaths, `./styles.css`) **minus all
   `@emotion/*`**. Deps: `@ark-ui/vue ^5.x`, `@chakra-ui/panda-preset`,
   `@pandacss/is-valid-prop`, `csstype`. `@pandacss/dev` is a peer
   (`optional: true`) + dev dependency — mirroring how react treats
   `@emotion/react` (peer + dev), but optional here since prebuilt components
   need no Panda at all; only consumers using the `chakra.*` factory need it.
   Peer `vue: ">=3.5.0"`.
2. Mirror the agnostic engine/utils/theme into `src` (script-driven copy).
3. Package tsconfig: override base `jsx: "react-jsx"` with
   `jsxImportSource: "vue"`.
4. Wire Panda: `packages/vue/panda.config.ts` (chakra preset,
   `jsxFramework: "vue"`, `jsxFactory: "chakra"`); `prebuild`/`prepare` runs
   Panda codegen + cssgen into the internal styled-system + `styles.css`.
   Regenerate the CLI `*.gen.ts` types for vue via `chakra typegen` against the
   vue preset entry.
5. Author the Vue-specific reimplementations (factory, provider, contexts,
   composables, ref helper).
6. Repo-wide tooling:
   - root `vite.config.ts`: add `"@chakra-ui/vue"` alias +
     `@vitejs/plugin-vue-jsx` for the Vue test env.
   - `.storybook-vue/` new instance (`@storybook/vue3-vite`, vue stories glob).
   - `vitest.setup.ts`: reuse jest-dom + vitest-axe; add `@testing-library/vue`.
   - root devDeps: `vue`, `@vitejs/plugin-vue`, `@vitejs/plugin-vue-jsx`,
     `@storybook/vue3-vite`, `@testing-library/vue`, `@pandacss/dev`.
   - Add **`.github/workflows/quality-vue.yml`** — a Vue-specific mirror of the
     quality jobs, scoped to `packages/vue`, triggered on `feature/**` PRs (see
     CI section). Add a package-level `typecheck` (`vue-tsc`) and exclude
     `packages/vue` from the root typecheck.
7. **Gate:** `pnpm --filter @chakra-ui/vue build` + `typecheck` pass; Panda
   codegen emits styled-system + `styles.css`; **react build/test unaffected**.
   Changeset added.
8. **Bundle size & performance baseline check:** the premise for dropping
   Emotion in favor of Panda's build-time atomic CSS is smaller bundle size (no
   runtime CSS-in-JS serializer/hasher/style-injector shipped) and faster
   renders (precomputed class lookups vs. runtime style computation + CSSOM
   mutation) — but this is only a well-founded expectation until measured.
   Record: (a) gzip size of `packages/vue/dist` (framework overhead only, no
   components yet) as a baseline to compare against once the Phase 2 pilot ships
   a `Box`; (b) revisit at the end of Phase 2 with a real render-count/time
   benchmark of `<ChakraProvider><Box /></ChakraProvider>` against the
   equivalent `@chakra-ui/react` component in Storybook/sandbox. Not a merge
   blocker — informational, to turn the "should be faster/smaller" premise into
   actual numbers before it's repeated as fact.

### Phase 2 — Pilot: `chakra` factory + `Box` + `ChakraProvider`

Prove end-to-end: `<ChakraProvider><Box p="4" bg="red.500" /></ChakraProvider>`
renders correct Panda classes + token CSS vars, in a unit test and a sandbox Vue
app. Validates the build-time styling + consumer-override story before any Ark
wrapping. Follows the component cycle.

### Component cycle (repeat per component)

`component → storybook file → testing files → verify tests pass → confirm with user → PR (targets feature/chakra-ui-vue) for CI → merge → next component`

Per component, mirror react's **three-file structure** (`<name>.tsx` impl,
`index.ts` barrel + Ark hook/type re-exports +
`export * as X from "./namespace"`, `namespace.ts` short aliases). Wrap the
`@ark-ui/vue` primitive with the Vue recipe-context factory, paralleling
`packages/react/src/components/checkbox/checkbox.tsx`. Stories in
`packages/vue/__stories__/`; tests in `packages/vue/__tests__/` with
`@testing-library/vue` + a Vue `render` helper mirroring
`packages/react/__tests__/core/render.tsx`. After the pilot: `Checkbox` or
`Switch` (simple Ark primitives) → upward.

### Final phase (deferred, optional) — shared extraction refactor

Once the Vue package is stable and its mirrored surface has settled, optionally
extract the now-proven common engine into a shared package and have both react
and vue consume it. Deliberately last, so it never blocks shipping Vue.

## CI / GitHub workflows

Existing: `.github/workflows/quality.yml` (build, tests, eslint, typecheck,
prettier — `main`-only) and `release.yml` (changesets publish — `main`-only),
both via the `install` composite action.

**Approach: a dedicated, Vue-specific mirrored workflow** rather than
overloading the React `quality.yml`. This isolates Vue signal and cleanly avoids
the root-typecheck JSX-runtime conflict.

- **New `.github/workflows/quality-vue.yml`** — mirrors quality.yml's job
  structure (build / tests / eslint / typecheck / prettier) via the same
  `install` composite action, but **scoped to Vue** and triggered on
  `pull_request` to `feature/**` (and `main`), with
  `paths: ["packages/vue/**", "packages/panda-preset/**", root vite/vitest/eslint config]`
  so it runs only when relevant. Jobs:
  - **build:** `pnpm --filter @chakra-ui/vue... build` (the `...` also builds
    its workspace dep `@chakra-ui/panda-preset`; vue `build` chains the Panda
    codegen prebuild so it runs headlessly).
  - **types:** `pnpm --filter @chakra-ui/vue typecheck` — the vue package's own
    `vue-tsc`/`tsc` with `jsxImportSource: "vue"`. **Sidesteps the root
    `jsx: "react-jsx"` conflict entirely** — no project references needed.
  - **tests:** vitest scoped to `packages/vue` (root `vite.config.ts` gains
    `@vitejs/plugin-vue-jsx` + the `@chakra-ui/vue` alias so vue specs compile).
  - **eslint / prettier:** scoped to `packages/vue`, with an eslint override so
    react-hooks rules don't false-positive on vue TSX.
- **Existing `quality.yml`:** leave React jobs as-is; **exclude `packages/vue`
  from the root `pnpm typecheck`** (tsconfig `exclude`) so the shared typecheck
  stays React-only. Optionally add `feature/**` to its triggers if we also want
  React checked on the integration branch (react is untouched, so low value).
- **`release.yml`:** no change — changesets `fixed` + `packages/**` +
  `access: public` publishes vue automatically once merged to `main`.
- Per-package `packages/vue` scripts to add: `typecheck` (`vue-tsc --noEmit`),
  and rely on root `test`/`lint`/`format` filters for the rest.

## Critical files

- Mirror scaffolding from: `packages/react/package.json`,
  `packages/react/tsconfig.json`, `packages/react/tsconfig.build.json`,
  `packages/panda-preset/package.json` (Panda build wiring).
- Shared build (no change): `scripts/build/main.ts`, `.../build.ts`,
  `.../config.ts`, `scripts/conditions.ts`.
- React originals to reimplement for Vue (reference only, not edited):
  `packages/react/src/styled-system/factory.tsx`, `.../provider.tsx`,
  `.../create-slot-recipe-context.tsx`, `.../use-recipe.ts`.
- Agnostic source to mirror: `packages/react/src/styled-system/*` (pure files),
  `.../utils/*` (minus `ref.ts`), `.../theme/*`, `.../preset-base.ts`.
- Wrapping pattern reference: `packages/react/src/components/checkbox/`.
- Repo tooling to edit: root `vite.config.ts`, `vitest.setup.ts`, root
  `package.json` (devDeps), new `.storybook-vue/`, `.changeset/` entries.
- Panda reuse: `packages/panda-preset/src/index.ts`.
- Panda JSX refs: style props / `styled` factory —
  <https://panda-css.com/docs/concepts/style-props> ; config (`jsxFramework`,
  `jsxStyleProps`, `jsxFactory`, `outdir`, `emitPackage`) —
  <https://panda-css.com/docs/references/config>.

## Verification

- **Phase 1:** `pnpm --filter @chakra-ui/vue build` + `typecheck` pass; Panda
  emits internal styled-system + `styles.css`;
  `pnpm --filter @chakra-ui/react build`/`test` still green (react untouched —
  sanity check only).
- **Pilot & each component:** `pnpm test` (Vitest + `@testing-library/vue` +
  vitest-axe a11y) green locally; a Vue Storybook story renders with correct
  classes/tokens; PR to `feature/chakra-ui-vue` for CI. A sandbox Vue app
  (`sandbox/vite-vue`, added at the pilot) exercises the published-shape flow:
  import component + `styles.css` (zero-config), then project-root
  `panda codegen` override.

## Open risks

1. **Published-library Panda consumption** — RESOLVED: self-contained library +
   default project-root consumer `outdir`. Pilot validates the override cascade
   in a sandbox app.
2. **Style props / static extraction** — RESOLVED: retained via Panda Vue
   `styled` factory; prebuilt components need no Panda, `chakra.*` in app code
   needs consumer codegen; `css()`/recipes cover composition & bounded-dynamic;
   arbitrary runtime values are the universal Panda caveat.
3. **Code duplication (accepted)** — mirroring the engine into vue duplicates
   ~agnostic code that will drift from react over time. Accepted for
   speed/safety; the deferred final extraction reconciles it. Mitigation: keep
   the mirror layout identical to react and script the copy so re-syncing or
   later extraction is mechanical; note mirrored files as generated-from-react
   in the vue package.
4. **Storybook dual-framework** — RESOLVED: dedicated Vue Storybook instance;
   React config untouched.
5. **Panda ↔ Chakra `defineConfig` parity** — the theme/recipes use Chakra's
   `defineConfig`; the Vue package must feed them to Panda.
   `@chakra-ui/panda-preset` already bridges this (ejected + synced from react),
   so reuse it rather than re-deriving. Confirm token/recipe fidelity in the
   pilot.
