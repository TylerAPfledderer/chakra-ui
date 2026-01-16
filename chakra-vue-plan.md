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

# Step 4: Verify sync is complete
git log --oneline -5  # Should show latest commits from origin
```

**Why this matters:**

- Keeps fork in sync with upstream chakra-ui/chakra-ui
- Prevents merge conflicts when eventually submitting PR to upstream
- Ensures you're building on the latest codebase

---

## Progress Tracker

| Phase                  | Status         | Notes                  |
| ---------------------- | -------------- | ---------------------- |
| 1.1 System Core        | ✅ COMPLETE    | Merged                 |
| 1.3 Vue Styled System  | ✅ COMPLETE    | PR #4 merged           |
| **ESLint Config**      | **🔜 CURRENT** | **Execute next phase** |
| 1.4 Theme Enhancement  | ⬜ PENDING     |                        |
| 1.5 Vue Utilities      | ⬜ PENDING     |                        |
| 2.0 Ark UI Integration | ⬜ PENDING     |                        |
| 3.x Components         | ⬜ PENDING     |                        |

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

**Current Phase:** ESLint Configuration **Current Step:** Step 1 (Sync and
Create Branch)

---

## PHASE: ESLint Configuration

**Status:** 🔜 IMMEDIATE NEXT STEP **Branch Name:** `feature/vue-eslint-config`
**PR Target:** `fork` remote → `feature/chakra-ui-vue-3` branch

### Problem Statement

The Vue package uses composables with `use*` prefix (e.g., `useSystem`,
`useCss`). ESLint's React hooks rules incorrectly flag these. Current workaround
uses inline disable comments which don't scale.

### Steps

- [ ] **Step 1: Sync and Create Branch**

  ```bash
  # Run sync commands from "IMPORTANT: Sync Before Each Phase" section above
  # Then create the phase branch:
  git checkout feature/chakra-ui-vue-3
  git checkout -b feature/vue-eslint-config
  ```

- [ ] **Step 2: Install Dependencies**

  ```bash
  pnpm add -D eslint-plugin-vue -w
  ```

- [ ] **Step 3: Modify ESLint Configuration**

  **File:**
  `/home/tylerapfledderer/sites/chakra-org/chakra-ui/eslint.config.mjs`

  **Action 1:** Add import at top of file:

  ```javascript
  import pluginVue from "eslint-plugin-vue"
  ```

  **Action 2:** Add new config block AFTER the existing main config block
  (before the closing `]` of `defineConfig`):

  ```javascript
  // Vue package overrides - disable React rules, enable Vue rules
  {
    files: ["packages/vue/**/*.ts", "packages/vue/**/*.vue"],
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // Disable React-specific rules for Vue package
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-filename-extension": "off",
      "react/sort-prop-types": "off",
      // Enable Vue recommended rules
      ...pluginVue.configs["flat/recommended"].rules,
    },
  },
  ```

- [ ] **Step 4: Remove Inline ESLint Disables**

  **File:**
  `/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/styled-system/factory.ts`

  **Action:** Remove this line from the top of the file:

  ```javascript
  /* eslint-disable react-hooks/rules-of-hooks */
  ```

- [ ] **Step 5: Verify Changes**

  ```bash
  pnpm lint                              # Should pass with no errors
  pnpm --filter @chakra-ui/vue build     # Should succeed
  pnpm --filter @chakra-ui/vue typecheck # Should succeed
  ```

- [ ] **Step 6: Get User Approval** ⚠️

  **ASK USER:** "Phase complete. Please review the changes to
  `eslint.config.mjs` and `packages/vue/src/styled-system/factory.ts`. Ready to
  commit and create PR?"

- [ ] **Step 7: Commit and Create PR** _(only after user approval)_

  ```bash
  git add -A
  git commit -m "feat(vue): configure eslint with Vue plugin and disable React rules

  - Add eslint-plugin-vue for Vue-specific linting
  - Disable react-hooks rules for packages/vue/**
  - Remove inline eslint-disable comments from Vue files"

  git push -u fork feature/vue-eslint-config

  gh pr create \
    --repo TylerAPfledderer/chakra-ui \
    --base feature/chakra-ui-vue-3 \
    --head feature/vue-eslint-config \
    --title "feat(vue): configure eslint for Vue package" \
    --body "## Summary
  - Adds eslint-plugin-vue for Vue-specific linting rules
  - Adds ESLint config override for packages/vue to disable React-specific rules
  - Removes inline eslint-disable comments

  ## Test Plan
  - [x] pnpm lint passes
  - [x] pnpm --filter @chakra-ui/vue build passes
  - [x] pnpm --filter @chakra-ui/vue typecheck passes"
  ```

### Success Criteria

- [ ] `pnpm lint` exits with code 0
- [ ] `pnpm --filter @chakra-ui/vue build` succeeds
- [ ] `pnpm --filter @chakra-ui/vue typecheck` succeeds
- [ ] PR created on fork remote

---

## PHASE 1.4: Theme Enhancement

**Status:** ⬜ PENDING **Branch Name:** `feature/vue-theme-enhancement`
**Depends On:** ESLint Config phase complete

### Objective

Verify theme package is framework-agnostic and works with Vue.

### Step 1: Sync and Create Branch

```bash
# First, run the sync commands from "IMPORTANT: Sync Before Each Phase" section above

# Then create the phase branch
git checkout feature/chakra-ui-vue-3
git checkout -b feature/vue-theme-enhancement
```

### Step 2: Audit Theme Package

**Directory to Audit:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/react/src/theme`

**Check for:**

- React hooks usage (`useColorMode`, `useTheme`, etc.)
- React-specific imports (`react`, `@emotion/react`)
- JSX syntax

**Expected Result:** Theme should be pure JavaScript objects with no React
dependencies.

### Step 3: Document Findings

Create or update documentation noting any React-specific code found and whether
it needs refactoring.

### Success Criteria

- [ ] Theme audit complete
- [ ] Documentation updated
- [ ] Any React-specific code identified and noted

---

## PHASE 1.5: Vue Utilities

**Status:** ⬜ PENDING **Branch Name:** `feature/vue-utilities` **Depends On:**
Phase 1.4 complete

### Objective

Add Vue-specific utility functions for component development.

### Files to Create

**File 1:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/utils/forward-ref.ts`

- Ref forwarding utilities for Vue components
- Pattern: expose ref via `defineExpose`

**File 2:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/utils/slots.ts`

- Slot rendering utilities
- Default slot fallbacks
- Named slot helpers

**File 3:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/utils/model.ts`

- v-model integration helpers
- `defineModel` utilities

**File 4:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/src/utils/index.ts`

- Barrel export for all utilities

### Success Criteria

- [ ] All utility files created
- [ ] Utilities exported from package index
- [ ] `pnpm --filter @chakra-ui/vue build` succeeds
- [ ] `pnpm --filter @chakra-ui/vue typecheck` succeeds

---

## PHASE 2.0: Ark UI Integration

**Status:** ⬜ PENDING **Branch Name:** `feature/vue-ark-integration` **Depends
On:** Phase 1.5 complete

### Objective

Establish integration pattern between Ark UI Vue and Chakra UI styling.

### Step 1: Add Ark UI Dependency

**File:**
`/home/tylerapfledderer/sites/chakra-org/chakra-ui/packages/vue/package.json`

**Action:** Add to `peerDependencies`:

```json
"peerDependencies": {
  "vue": "^3.3.0",
  "@ark-ui/vue": "^4.0.0"
}
```

**Action:** Add to `devDependencies`:

```json
"devDependencies": {
  "@ark-ui/vue": "^4.0.0"
}
```

Then run:

```bash
pnpm install
```

### Step 2: Create Integration Prototypes

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

# Step 3: Create phase branch
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

### NOT Implemented ❌

- UI components (Button, Box, etc.)
- Test coverage
- Example applications
- Documentation
- Color mode toggle
- Ark UI integration
