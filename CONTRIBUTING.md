# Contributing to Silton Mise

This document defines the operational mandates and best practices for working on the `silton-mise` project. Adherence ensures consistency, quality, and stability.

## 1. Safety & Verification (CRITICAL)

- **Verify First:** NEVER commit code without successfully running `npm run build`. If the build fails, the task is not complete.
- **Read First:** ALWAYS read a file's current content before editing to ensure context is accurate. Do not overwrite code based on assumptions.
- **No Secrets:** Never hardcode secrets, keys, or passwords.

## 2. Git Workflow

- **Atomic Commits:** Create small, focused commits with descriptive messages (e.g., "Fix: YAML escaping", "Feat: Add nutrition parser").
- **Push Immediately:** Push to `origin` immediately after completing a logical unit of work. Do not accumulate large stacks of unpushed commits.
- **Clean Workspace:** Delete temporary scripts, logs, or debug files before committing.

## 3. Code Quality & Formatting

- **Automated Formatting:** Run `npm run format` to automatically format code using Prettier before committing.
- **No Placeholders:** Never leave "TODO", "lorem ipsum", or stubbed logic in committed code.
- **Dependency Awareness:** Check `package.json` before installing new packages to avoid redundancy.

## 4. Documentation

- **Keep it Fresh:** If you change the architecture, scripts, or usage commands, update `README.md` immediately.
