---
name: Bug report
about: Report a reproducible problem to help improve Pensador API
title: 'bug: <short summary>'
labels: bug
assignees: ''
---

## Overview

Provide a clear, concise description of the bug. What went wrong?

## Impact

How severe is this? e.g., blocks deploy, affects production, minor annoyance.

## Steps To Reproduce

List exact steps to reproduce with the smallest possible example.

1. Endpoint or path: `/...`
2. Request example (code or curl):
   ```bash
   curl -s -X GET "https://<host>/api/..." -H "Accept: application/json"
   ```
3. Actual response/status:
4. Any special preconditions/config:

## Expected Behavior

What did you expect to happen?

## Actual Behavior

What actually happened? Include error messages shown to users if any.

## Logs / Stack Traces

Paste relevant logs, stack traces, or console output. Please sanitize secrets.

```
<logs here>
```

## Environment

- Package version (from `package.json` or `npm ls pensador-api`):
- Node.js version (`node -v`):
- OS and version:
- Runtime: local | Docker | Vercel | other (specify)
- If deployed (e.g., Vercel): region, project link (if possible)

## Regression?

Did this work before? If yes, which version/commit did it last work on?

## Possible Solution

Optional: any ideas, hypotheses, or pointers to where the bug may live.

## Additional Context

Screenshots, links, related issues, or anything else that helps.

## Checklist

- [ ] I searched existing issues and didn’t find a duplicate.
- [ ] I can reproduce this with a minimal example.
- [ ] I included expected vs. actual behavior and environment details.
- [ ] I sanitized logs and removed secrets.
