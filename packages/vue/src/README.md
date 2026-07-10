# `@chakra-ui/vue` source layout

`styled-system/` (minus the files listed below), `utils/` (minus `ref.ts`),
`theme/`, and `preset-base.ts` are **generated from `@chakra-ui/react/src`** by
`pnpm mirror:react` (`scripts/mirror-from-react.ts`). They are the
framework-agnostic slice of the engine — do not edit them by hand; re-run the
script to re-sync after a react-side change, and see
`docs/plans/chakra-ui-vue.md` ("What gets mirrored into `packages/vue/src`") for
the rationale and the deferred shared-package extraction this sets up.

Everything else under `styled-system/` (the `chakra` factory, `ChakraProvider`,
recipe-context factories, `useRecipe`/`useSlotRecipe`/`useToken` composables,
the ref helper) is Vue-specific and authored directly in this package — never
copied from react.
