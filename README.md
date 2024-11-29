# Immit

Lots of CLI utils have, for example, `git init`, `npm init` - so this is for all those
times you want to init something, but that util does not have an init (or what it does
have isn't good enough.)

Like: `immit aider` - does all the initialization for Aider in a project:
- Initalizes `PROJECT_DIR/.aider.conf.yml`
  - read: [README.md, docs/CONVENTIONS.md]
  - cache-prompts: true
  - cache-keepalive-pings: 5
  - And a bunch more

Checks for those files, fixes if not there.

