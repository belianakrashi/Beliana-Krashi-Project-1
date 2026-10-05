# Plan: Sourcing Signals

## Checkpoint 1 — Review before build

- Read `CONCEPT-IDEA.md`, `SPECIFICATION.md`, this plan, and `BACKLOG.md`.
- Human confirms the audience, invented-data boundary, evidence labels, no-ranking rule, and acceptance checks.
- Do not begin implementation until this review is approved.

## Checkpoint 2 — Build the static demo

- Replace the placeholder in `docs/index.html` with the accessible page structure and core explanatory content.
- Add the smallest local CSS and JavaScript files needed for responsive presentation and evidence-status filtering.
- Use clearly fictional data only; include empty-state, reset, no-JavaScript, and limitations content.
- Keep dependencies and network calls out of the page.

## Checkpoint 3 — Verify and review

- Run focused checks for HTML structure, JavaScript syntax, and filter behavior if local tooling is available.
- Manually inspect responsive layout, keyboard flow, visible focus, labels, empty state, and the fictional-data boundary.
- Compare the shipped behavior to the specification and ask for human review of the result.

## Checkpoint 4 — Ship

- Update the README with the project purpose, local preview instructions, and public site/repository URLs.
- Commit and push the reviewed project to the existing public repository.
- Verify the GitHub Pages deployment and public page; if Pages settings still require a human action, report the exact step and do not claim the URL is live.

## Risks and mitigations

- **Fictional examples could be mistaken for real findings.** Label the page and every profile as fictional; use invented organizations and locations.
- **Evidence status could look like a quality rating.** Explain the terms, avoid totals and rankings, and state that missing evidence is not proof of misconduct or good practice.
- **The site may not be enabled in Pages settings.** Check the published URL after push and distinguish repository publication from a successfully deployed site.
