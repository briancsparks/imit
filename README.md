# Immit

Lots of CLI utils have, for example, `git init`, `npm init` - so this is for all those
times you want to init something, but that util does not have an init (or what it does
have isn't good enough.)

Like: `immit aider` - does all the initialization for Aider in a project:
- Initializes `PROJECT_DIR/.aider.conf.yml`
  - read: [README.md, docs/CONVENTIONS.md]
  - cache-prompts: true
  - cache-keepalive-pings: 5
  - And a bunch more

Checks for those files, fixes if not there.

## Tools You Can Immit

- `aider`
- `project` - setup a skeleton project
  - Has `docs/` dir, for example.
- `cpp` - beyond what `project` gives you, `cpp` adds C/C++-specific files
  - `src/inc/[PROJECT_NAME]/[PROJECT_NAME].hpp`
  - etc.
- `javascript` (`js`) - beyond what `project` gives you, `js` adds JavaScript-
  specific files.
- `python`, `go`, etc.

## Special Help

Running `immit aider --help` tells you the manual way to accomplish the `immit aider`
functionality.
