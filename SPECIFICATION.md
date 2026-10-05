# Specification: Sourcing Signals

## User story

As a curious shopper or learner, I want to explore what evidence a supplier profile does and does not disclose, so I can see why ethical sourcing cannot be reduced to one score.

## Experience

1. The landing page explains the purpose and prominently says all profiles are fictional.
2. The visitor sees a small set of invented supplier profiles.
3. Each profile groups evidence statuses by topic, such as worker voice, wages, environmental practices, and grievance processes.
4. Each status says whether information is self-reported, independently verified, or not provided in this demo. The page explains these labels.
5. A visitor can filter profiles by evidence status and reset the filter.
6. If a filter has no matches, the page explains that and offers a way to clear it.
7. The page states that it does not rank suppliers, certify practices, or provide purchasing advice.

## Requirements

- Publish as a static GitHub Pages site from `docs/`; no server, build step, or third-party runtime dependency.
- Use only invented example data, labeled as such beside the profiles and in the page footer.
- Do not add an overall score, ordering by virtue, certification badge, or real-world sourcing claim.
- Distinguish self-reported information, independently verified information, and information not provided; do not imply that a disclosure proves a practice.
- Provide working filters, a visible reset action, and a useful empty state.
- Work at phone and desktop widths; use semantic HTML, keyboard-operable controls, visible focus, and sufficient text contrast.
- Keep essential content usable if JavaScript is unavailable.
- Do not collect, store, or transmit visitor information.
- Include project purpose, limitations, and a plain-language explanation of the evidence labels.

## Out of scope

- Real supplier research, audits, external datasets, user accounts, submissions, personalization, AI-generated judgments, or purchase recommendations.
- Legal, labor, environmental, or certification advice.

## Acceptance checks

- A visitor can tell before exploring that every supplier profile is fictional.
- Every evidence status has a plain-language explanation.
- Filters and reset work with pointer and keyboard; zero matches are explained.
- No supplier is labeled or visually represented as “best” or “most ethical.”
- The page remains readable on a narrow mobile viewport and the core explanation remains available without JavaScript.
- No personal data is requested or sent.
