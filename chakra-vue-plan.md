# Chakra UI Vue 3 Implementation Plan

> **For AI Agents:** This plan is designed to be executed step-by-step. Each
> phase is self-contained with explicit file paths, commands, and success
> criteria. Execute phases in order. Do not proceed to the next phase until
> current phase success criteria are met.

## Repository Context

- **Working Directory:** `/home/tylerapfledderer/sites/chakra-org/chakra-ui`
- **Package Manager:** pnpm
- **Feature Branch:** `feature/chakra-ui-vue-3`
- **Fork Remote:** `fork` (TylerAPfledderer/chakra-ui) - use this for all PRs
- **Origin Remote:** `origin` (chakra-ui/chakra-ui) - do NOT push here

---

## IMPORTANT: Sync Before Each Phase

**Before starting ANY phase, run these commands to sync with upstream:**

```bash
# Step 1: Fetch latest from both remotes
git fetch origin
git fetch fork

# Step 2: Update local main branch with upstream changes
git checkout main
git merge origin/main --ff-only
git push fork main

# Step 3: Update feature branch with latest main
git checkout feature/chakra-ui-vue-3
git merge main
git push fork feature/chakra-ui-vue-3

# Step 4: Install dependencies (ensures lock-file and node_modules are up-to-date)
pnpm install

# Step 5: Verify sync is complete
git log --oneline -5  # Should show latest commits from origin
```

**Why this matters:**

- Keeps fork in sync with upstream chakra-ui/chakra-ui
- Prevents merge conflicts when eventually submitting PR to upstream
- Ensures you're building on the latest codebase
- Running `pnpm install` ensures lock-file and node_modules stay in sync with
  any dependency changes from upstream

---

## Progress Tracker

| Phase                      | Status         | Notes                          |
| -------------------------- | -------------- | ------------------------------ |
| 1.1 System Core            | ✅ COMPLETE    | Merged                         |
| 1.3 Vue Styled System      | ✅ COMPLETE    | PR #4 merged                   |
| ESLint Config              | ✅ COMPLETE    | PR #5 merged                   |
| 1.4 Vue Anatomy            | ✅ COMPLETE    | PR #6 created                  |
| 1.5 Vue Utilities          | ⏭️ SKIPPED     | Vue 3 built-ins are sufficient |
| **2.0 Ark UI Integration** | **🔜 CURRENT** | **Execute next phase**         |
| 3.x Components             | ⬜ PENDING     |                                |

---

## How to Use This Plan

**For AI Agents:**

1. When user says "Execute next phase", find the phase marked `🔜 CURRENT`
2. Execute the next unchecked `[ ]` step in that phase
3. After completing a step, mark it `[x]` and **STOP**
4. Wait for user to say "Execute next phase" again to continue
5. **IMPORTANT:** At the end of each **PHASE** (before git commit/PR creation),
   **ASK USER FOR APPROVAL** of all changes made in that phase. Do not commit or
   push until user approves.

**Current Phase:** 2.0 Ark UI Integration **Current Step:** Step 1 (Sync and
Create Branch)

---

## PHASE: ESLint Configuration

**Status:** ✅ COMPLETE **Branch Name:** `feature/vue-eslint-config` **PR:**
https://github.com/TylerAPfledderer/chakra-ui/pull/5

### Problem Statement

The Vue package uses composables with `use*` prefix (e.g., `useSystem`,
`useCss`). ESLint's React hooks rules incorrectly flag these. Current workaround
uses inline disable comments which don't scale.

### Steps

- [x] **Step 1: Sync and Create Branch**
- [x] **Step 2: Install Dependencies** (`eslint-plugin-vue` ^10.7.0)
- [x] **Step 3: Modify ESLint Configuration**
- [x] **Step 4: Remove Inline ESLint Disables**
- [x] **Step 5: Verify Changes**
- [x] **Step 6: Get User Approval**
- [x] **Step 7: Commit and Create PR**

### Success Criteria

- [x] `pnpm eslint packages/vue` exits with code 0
- [x] `pnpm --filter @chakra-ui/vue build` succeeds
- [x] `pnpm --filter @chakra-ui/vue typecheck` succeeds
- [x] PR created on fork remote

---

## PHASE 1.4: Vue Anatomy

**Status:** ✅ COMPLETE **Branch Name:** `feature/vue-theme-enhancement` **PR:**
https://github.com/TylerAPfledderer/chakra-ui/pull/6

### Objective

Create Vue-specific anatomy file for component slot definitions, enabling Vue
components to use Chakra's slot recipe system.

### What Was Done

1. Added `@ark-ui/vue` as a dependency in `packages/vue/package.json`
2. Created `packages/vue/src/anatomy.ts` with all Chakra component anatomies
   importing from `@ark-ui/vue/anatomy` instead of `@ark-ui/react`

### Audit Findings

The theme package (`packages/react/src/theme`) was audited:

- **Tokens** (colors, spacing, fonts, etc.) - ✅ Framework-agnostic (pure JS
  objects)
- **Recipes** - ⚠️ Import from `../../anatomy` which uses `@ark-ui/react`
- **Slot Recipes** - ⚠️ Use `anatomy.keys()` for slot names

### Success Criteria

- [x] `@ark-ui/vue` added as dependency
- [x] Vue anatomy file created with all component anatomies
- [x] `pnpm --filter @chakra-ui/vue build` succeeds
- [x] `pnpm --filter @chakra-ui/vue typecheck` succeeds
- [x] PR created on fork remote

---

## FUTURE REFACTORING: Shared Theme Package

> **Note:** This is tracked for future consideration, not immediate action.

### Problem

The theme recipes in `packages/react/src/theme` are nearly framework-agnostic,
but they import anatomy from `../../anatomy` which pulls from `@ark-ui/react`.
This means Vue cannot directly reuse React's theme recipes.

### Current Workaround

Vue has its own `anatomy.ts` that imports from `@ark-ui/vue`. Theme recipes
would need to be duplicated or imported with path aliases.

### Potential Solutions

1. **Extract theme to `@chakra-ui/theme` package** - Framework-agnostic theme
   that accepts anatomy as a parameter
2. **Move anatomy-dependent code** - Have recipes accept slot arrays directly
   instead of calling `anatomy.keys()`
3. **Shared theme with framework adapters** - Theme exports raw definitions,
   each framework wraps with its anatomy

### Benefits of Refactoring

- Single source of truth for theme recipes
- Easier maintenance when updating styles
- Consistent theming across React/Vue/Solid

---

## PHASE 1.5: Vue Utilities

**Status:** ⏭️ SKIPPED **Branch Name:** `feature/vue-utilities`

### Decision

This phase was skipped because Vue 3 provides sufficient built-in functionality:

- **Ref forwarding**: Vue's `defineExpose` handles this natively
- **Slot utilities**: Vue's native `<slot>` with fallback content, `useSlots()`,
  and named slots are sufficient
- **v-model helpers**: Vue 3.4+ has `defineModel()` macro; earlier versions use
  `defineProps` + `defineEmits` pattern

No custom wrapper utilities are needed. The system-core package already provides
framework-agnostic utilities (cx, compact, omit, etc.) that are re-exported from
the Vue package's index.

---

## PHASE 2.0: Ark UI Integration

**Status:** ⬜ PENDING **Branch Name:** `feature/vue-ark-integration` **Depends
On:** Phase 1.4 complete (1.5 skipped)

### Objective

Establish integration pattern between Ark UI Vue and Chakra UI styling.

### Prerequisites (Already Complete)

- ✅ `@ark-ui/vue` added as dependency (done in Phase 1.4)
- ✅ Vue anatomy file created (done in Phase 1.4)

### Step 1: Create Integration Prototypes

**Create 3 prototype components to establish the integration pattern:**

1. **Button** (simple component)
   - File:
     `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/components/button/button.ts`
   - Uses Ark UI Button
   - Applies Chakra theme via `useRecipe`

2. **Accordion** (multi-part component)
   - File:
     `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/components/accordion/accordion.ts`
   - Uses Ark UI Accordion
   - Applies Chakra theme via `useSlotRecipe`

3. **Menu** (complex with portals)
   - File:
     `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/components/menu/menu.ts`
   - Uses Ark UI Menu
   - Tests portal/teleport integration

### Integration Pattern Template

```typescript
import { ComponentName as ArkComponentName } from "@ark-ui/vue"
import { computed, defineComponent, h } from "vue"
import { useSlotRecipe } from "../styled-system"

export const ComponentName = defineComponent({
  name: "ComponentName",
  props: {
    // Chakra theming props
    variant: String,
    size: String,
    colorScheme: String,
    // Component-specific props forwarded to Ark UI
  },
  setup(props, { slots, attrs }) {
    const styles = useSlotRecipe({ key: "componentName" })

    return () =>
      h(
        ArkComponentName.Root,
        {
          ...attrs,
          style: styles.value.root,
        },
        slots.default?.(),
      )
  },
})
```

### Success Criteria

- [ ] Ark UI installed as peer/dev dependency
- [ ] 3 prototype components created
- [ ] Components render correctly
- [ ] Chakra styles applied from theme
- [ ] `pnpm --filter @chakra-ui/vue build` succeeds

---

## PHASE 3: Component Implementation

### Phase 3.1: Tier 1 Components (Foundation)

**Branch Name:** `feature/vue-tier-1-components`

**Components to implement:** | Component | Uses Ark UI | Directory |
|-----------|-------------|-----------| | Box | No |
`packages/vue/src/components/box/` | | Flex | No |
`packages/vue/src/components/flex/` | | Grid | No |
`packages/vue/src/components/grid/` | | Stack | No |
`packages/vue/src/components/stack/` | | Text | No |
`packages/vue/src/components/text/` | | Heading | No |
`packages/vue/src/components/heading/` | | Button | Yes |
`packages/vue/src/components/button/` | | IconButton | Yes |
`packages/vue/src/components/icon-button/` | | Input | Partial |
`packages/vue/src/components/input/` | | Textarea | No |
`packages/vue/src/components/textarea/` | | Checkbox | Yes |
`packages/vue/src/components/checkbox/` | | Radio | Yes |
`packages/vue/src/components/radio/` | | Switch | Yes |
`packages/vue/src/components/switch/` |

### Phase 3.2: Tier 2 Components (Essential UI)

**Branch Name:** `feature/vue-tier-2-components`

| Component    | Uses Ark UI |
| ------------ | ----------- |
| Modal/Dialog | Yes         |
| Drawer       | Yes         |
| Menu         | Yes         |
| Popover      | Yes         |
| Tooltip      | Yes         |
| Tabs         | Yes         |
| Accordion    | Yes         |
| Select       | Yes         |
| FormControl  | No          |

### Phase 3.3: Tier 3-4 Components (Advanced)

**Branch Name:** `feature/vue-tier-3-4-components`

Components: Toast, Slider, NumberInput, PinInput, Avatar, Tag, Badge, Progress,
Spinner, Table, Editable, Skeleton, Stat, Breadcrumb, Card, Alert, Portal,
Transitions

---

## PHASE 4: Main Package Assembly

**Branch Name:** `feature/vue-main-package`

### Tasks

1. Update barrel export at
   `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/index.ts`
2. Ensure tree-shaking works
3. Update `package.json` version and metadata
4. Generate TypeScript declarations

---

## PHASE 5: Documentation & Examples

**Branch Name:** `feature/vue-docs-examples`

### Tasks

1. Create
   `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/README.md`
2. Create Vite example in
   `/home/tylerapfledderer/sites/chakra-org/chakra-ui/sandbox/vue-vite/`
3. Create Nuxt example in
   `/home/tylerapfledderer/sites/chakra-org/chakra-ui/sandbox/vue-nuxt/`

---

## Git Commands Reference

### Start New Phase

```bash
# Step 1: Sync fork with upstream (origin)
git fetch origin
git fetch fork
git checkout main
git merge origin/main --ff-only
git push fork main

# Step 2: Update feature branch
git checkout feature/chakra-ui-vue-3
git merge main
git push fork feature/chakra-ui-vue-3

# Step 3: Install dependencies (ensures lock-file and node_modules are up-to-date)
pnpm install

# Step 4: Create phase branch
git checkout -b feature/vue-<phase-name>
```

### Create PR (ALWAYS to fork, NEVER to origin)

```bash
git push -u fork feature/vue-<phase-name>
gh pr create \
  --repo TylerAPfledderer/chakra-ui \
  --base feature/chakra-ui-vue-3 \
  --head feature/vue-<phase-name> \
  --title "feat(vue): <description>"
```

### After PR Merge

```bash
git checkout feature/chakra-ui-vue-3
git pull fork feature/chakra-ui-vue-3
git branch -d feature/vue-<phase-name>
```

---

## Verification Commands

Run these before creating any PR:

```bash
# TypeScript check
pnpm --filter @chakra-ui/vue typecheck

# ESLint
pnpm lint

# Build
pnpm --filter @chakra-ui/vue build
```

---

## Current Implementation State

### Implemented ✅

- `ChakraProvider` - Vue component with provide/inject
- `useSystem` - Access system context
- `useCss` / `useCssFn` - CSS styling composables
- `useRecipe` / `useThemeRecipe` - CVA recipe composables
- `useSlotRecipe` / `useThemeSlotRecipe` - SVA slot recipe composables
- `chakra` factory - Create styled components
- Re-exports from `@chakra-ui/system-core`
- TypeScript definitions
- Build pipeline (ESM/CJS/types)
- Vue anatomy file (all Chakra component slot definitions)
- `@ark-ui/vue` dependency

### NOT Implemented ❌

- UI components (Button, Box, etc.)
- Test coverage
- Example applications
- Documentation
- Color mode toggle
