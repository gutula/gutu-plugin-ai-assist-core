# AI Assist Core TODO

**Maturity Tier:** `Hardened`

## Shipped Now

- Exports 7 governed actions: `ai-assist.summaries.generate`, `ai-assist.triage.route`, `ai-assist.anomalies.review`, `ai-assist.summaries.hold`, `ai-assist.summaries.release`, `ai-assist.summaries.amend`, `ai-assist.summaries.reverse`.
- Owns 3 resource contracts: `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- Publishes 2 job definitions with explicit queue and retry policy metadata.
- Publishes 1 workflow definition with state-machine descriptions and mandatory steps.
- Adds richer admin workspace contributions on top of the base UI surface.
- Ships explicit SQL migration or rollback helpers alongside the domain model.
- Documents 4 owned entity surface(s): `Summary Log`, `Triage Suggestion`, `Anomaly Review`, `Feedback Record`.
- Carries 3 report surface(s) and 3 exception queue(s) for operator parity and reconciliation visibility.
- Tracks ERPNext reference parity against module(s): `CRM`, `Support`, `Projects`.
- Operational scenario matrix includes `summary-generation`, `triage-routing`, `anomaly-review-with-human-approval`.
- Governs 3 settings or policy surface(s) for operator control and rollout safety.

## Current Gaps

- No additional gaps were identified beyond the plugin’s stated non-goals.

## Recommended Next

- Deepen review, feedback, and rollback flows as more operators use AI assistance in production workflows.
- Clarify domain-specific guardrails and downstream action policies before automated assist paths broaden.
- Add deeper provider, persistence, or evaluation integrations only where the shipped control-plane contracts already prove stable.
- Expand operator diagnostics and release gating where the current lifecycle already exposes strong evidence paths.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Lead`, `Opportunity`, `Issue`.

## Later / Optional

- More connector breadth, richer evaluation libraries, and domain-specific copilots after the baseline contracts settle.
