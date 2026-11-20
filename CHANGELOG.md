# Changelog

All notable changes to this project are documented here, newest first.
Commit hashes are abbreviated; run `git show <hash>` for the full diff.

## [Unreleased] (uncommitted)

- **`Alert.tsx`, `Button.tsx`**: fixed the "componets" typo in the `children` comments.
- **`Alert.tsx`**: commented out `data-bs-dismiss="alert"` on the close button. Only Bootstrap's CSS
  is loaded, so the attribute did nothing; React's `onClose` handles closing.
- **`README.md`**: added the author, the project intro, links to the tutorials it follows, and a link to this changelog.
- **`package.json`**: added the `author` field.
- **`CHANGELOG.md`**: added this file.

## Dismissible Alert controlled by state

| Commit    | Summary |
|-----------|---------|
| `9363021` | **`App.tsx`**: added an `alertVisible` state (`useState(false)`). The Alert renders only when `alertVisible` is `true` (`{alertVisible && <Alert …/>}`). Clicking the Button sets it to `true` and logs the click time; the Alert's `onClose` callback sets it back to `false`. **`Alert.tsx`**: added a required `onClose: () => void` prop; switched to the Bootstrap `alert-warning alert-dismissible` styles with `role="alert"` and a `btn-close` button that calls `onClose`. **`Button.tsx`**: comment only. |

## Button component

| Commit    | Summary |
|-----------|---------|
| `8f65f11` | Restricted `color` to a list of supported values (`"primary" \| "secondary" \| "success" \| "warning" \| "danger"`); App uses `color="success"`. |
| `62ad25e` | Made `color` an optional prop with a default value (`"primary"`). |
| `6188397` | Added an `onClick` callback prop to Button and wired it up in App. |
| `0779b5e` | Button label passed as `children` (typed as `string`). |
| `f8a476e` | Added the `Button` component (Bootstrap `btn` styles) and used it in App. |

## Alert component and `children`

| Commit    | Summary |
|-----------|---------|
| `9490380` | App now renders all three components written so far: Message, ListGroup and Alert. |
| `abca3b6` | `children` typed as `ReactNode`, so the Alert can wrap markup (e.g. `<b><i>…</i></b>`). |
| `f07fa02` | Alert receives its text through the `children` prop (typed as `string`). |
| `282df32` | Added the `Alert` component (Bootstrap `alert` styles) and used it in App. |

## ListGroup: props, state and events

| Commit    | Summary |
|-----------|---------|
| `3ff46f8` | Comments explaining that props (`items`, `heading`, `onSelectItem`) are immutable, while state (`selectedIndex`) is mutable. |
| `2f2565c` | Passing a function prop (`onSelectItem`) from App to ListGroup. |
| `667d367` | Removed the `getMessage()` helper. |
| `a3e566b` | Destructured the props into `items` and `heading`. |
| `0249997` | Passing typed props (`items`, `heading`) to the component through a TypeScript interface. |
| `73b89b3` | Rendered several ListGroup instances in App to show that each one has its own `selectedIndex` state. |
| `d69a68e` | Used `useState` to track the selected item and highlight it with the `active` class. |
| `d929d22` | Moved the click logic into an event handler function. |
| `edef05f` | Logged the click `event` object. |
| `46ea66d` | Used the `index` argument from `map()` in the click handler. |
| `ba8f13e` | Logged which item was clicked. |
| `41237a7` | Added an `onClick` handler to each list item. |

## ListGroup: rendering lists and conditional content

| Commit    | Summary |
|-----------|---------|
| `da438db` | Final `getMessage()`: uses `&&` instead of a ternary returning `null`. |
| `c8fd832` | Moved the empty-list message into a `getMessage()` function. |
| `a80a1e7` | Stored the empty-list message in a constant. |
| `59e06f5` | Used a ternary operator to show a "No item found" message when the list is empty. |
| `7a72fe4` | Added a `key` to each `<li>` so React can identify each item. |
| `8b5a88f` | Built the `<li>` elements from an array of items with `array.map()`. |

## ListGroup: returning a single element

| Commit    | Summary |
|-----------|---------|
| `cc91ac1` | Solution: the empty Fragment shorthand `<>…</>`. |
| `c0625b8` | Workaround 2: wrap the elements in `<Fragment>`. |
| `cceefa1` | Workaround 1: wrap the elements in a `<div>`. |

## Project setup

| Commit    | Summary |
|-----------|---------|
| `053bf2f` | Formatted the code with Prettier (VS Code extension); ListGroup now renders a Bootstrap list group. |
| `233bee5` | Added Bootstrap CSS, imported in `main.tsx`. Removed the default Vite styles (deleted `index.css`, emptied `App.css`). Added a `ListGroup` component and used it in App. |
| `493e542` | Initial React + TypeScript app scaffolded with Vite. Added `Message.tsx` and used it in `App.tsx`. |
