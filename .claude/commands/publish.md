---
description: Auto-detect version bump and publish to npm
allowed-tools: Bash(npm:*), Bash(git:*), Bash(gh:*)
---

Publish this npm business card package.

**Step 1: Check npm authentication**
- Run `npm whoami` to verify you're logged in
- If not logged in, stop and tell the user to run `npm login` first

**Step 2: Check current state**
- Run `npm pkg get version` to get current version
- Run `git status` to verify working tree state
- Run `git diff HEAD` to see staged/unstaged changes

**Step 3: Analyze changes and determine version bump**
Review the diff and determine version type:
- **patch** (x.x.PATCH): Content updates like changing URLs, updating text, tweaking colors, fixing typos
- **minor** (x.MINOR.0): New features like adding menu options, new card sections, new interactive elements
- **major** (MAJOR.0.0): Structural rewrites, breaking changes (very rare)

For a personal business card, most changes are patch (content) or minor (new features).

**Step 4: Stage, commit, and bump version**
If there are unstaged changes:
- Run `git add -A`
- Run `git commit -m "chore: update card"` (or appropriate message based on changes)

Then run: `npm version <detected-type> -m "v%s"`

**Step 5: Publish to npm**
Run: `npm publish`

**Step 6: Push to remote**
Run: `git push && git push --tags`

**Step 7: Create GitHub Release**
Create a release for the new version tag:
- Run `gh release create vX.X.X --generate-notes`

This auto-generates release notes from commits since the last release.

**Step 8: Report**
Confirm: "Published vX.X.X to npm" and include the GitHub release URL.
