# AGENTS.md — tip-splitter

## Autonomous development contract
This repo is developed by humans and coding agents. Read this first and obey it.
Machine-readable companion: `.agents/gate.json`.

### Shared agent memory
- Read `MEMORY.md` at session start before changing anything.
- Durable lessons go in `MEMORY.md` (append-only). Memory-only commits skip the gate.

### Gate commands (the definition of "green")
    npm run check   # syntax check
    npm test        # node:test suite
Zero new failures versus the branch point. Never delete or skip tests to go green.

### Ground rules for machine contributors
1. Never mutate the shared checkout. One task = one branch = one git worktree.
2. Claim before you touch: `scripts/claim.sh` (PR-body claim + `agent-claimed` label).
3. Never review or approve your own work. A different agent reviews the exact commit.
4. Acceptance criteria in the issue are the contract, verified by a test.
5. Report failures verbatim. Never mark done what you did not verify.
6. Clean up: remove the worktree, delete the branch, release the claim.

### Hot files (single claimant, own PR)
| File | Rule |
|---|---|
| package.json | no new dependencies without an issue |
| MEMORY.md | append-only lessons |

### Deployment truth
No deployment. Merge to `main` = done.