# CLAUDE.md — claude-ui-prompts

This repo is a library of Claude-optimized UI prompts. When contributing or editing prompts:

## Prompt File Standards
- Every file in `sections/` must have YAML frontmatter (title, category, tags, tested-with)
- Prompts must be wrapped in XML tags for maximum Claude comprehension
- Every file must include a Plan Mode version
- Test every prompt against Claude Sonnet 4.6 before submitting

## Markdown Style
- Use `##` for top-level sections within a prompt file
- Code blocks for all prompts and code snippets
- Keep descriptions concise — one line per bullet

## Adding a New Prompt
1. Create a new `.md` file in the correct `sections/` subfolder
2. Use the frontmatter template from any existing file
3. Test the prompt in Claude, paste a condensed example output
4. Add the file to the index table in `README.md`
