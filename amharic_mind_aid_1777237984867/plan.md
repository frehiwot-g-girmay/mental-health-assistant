# Plan for Active and Expandable "Continue Reading" Feature

Implement expandable blog post content in the `Blog.tsx` component to allow users to read more about each topic.

## 1. Update Translation Files
Add `full_content` for each blog post and a `read_less` key in all supported languages:
- `src/i18n/locales/en.json`
- `src/i18n/locales/am.json`
- `src/i18n/locales/om.json`
- `src/i18n/locales/ti.json`

## 2. Update Blog Component (`src/components/Blog.tsx`)
- Import `useState` from React.
- Define a state variable `expandedPosts` (a Set or an array) to track which post indices are expanded.
- Update the `posts` array to include the `full_content` from translations.
- Modify the post rendering logic:
    - Display `excerpt` initially.
    - If expanded, display `full_content`.
    - Toggle expansion when "Continue Reading" or "Read Less" is clicked.
- Add an animation using `framer-motion` for smooth expansion/collapse.
- Update the "Continue Reading" button to toggle state and change text to "Read Less" when expanded.

## 3. Verification
- Verify that clicking "Continue Reading" expands the post.
- Verify that clicking "Read Less" collapses it.
- Verify that it works across all languages.
- Ensure the layout remains responsive and aesthetically pleasing.
