# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an npm personal business card - a CLI tool that displays contact information in a styled terminal card format. Users run `npx chriswix` to see the card.

## Commands

- **Run locally:** `node index.js`
- **Install dependencies:** `npm install`
- **Publish to npm:** `npm publish`

## Architecture

Single-file ES module (`index.js`) that:
- Uses `boxen` for the card container styling
- Uses `chalk` for terminal colors with a custom slate theme
- Uses `inquirer` for interactive menu prompts
- Uses `open` to launch external URLs (email client)
- Uses `clear` to reset terminal before display

The app flow: `showMenu()` clears screen → displays card → shows tip → presents action menu → executes selected action (email or exit).

## Code Style

- ES modules (`"type": "module"` in package.json)
- Single quotes for strings
- Tab indentation
- Hex color theme using `chalk.hex()`
