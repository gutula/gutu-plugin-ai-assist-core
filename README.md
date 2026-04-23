# AI Assist Core

<p align="center">
  <img src="./docs/assets/gutu-mascot.png" alt="Gutu mascot" width="220" />
</p>

Guardrailed AI summaries, triage suggestions, anomaly detection, and operator-assist workflows for business teams.

![Maturity: Hardened](https://img.shields.io/badge/Maturity-Hardened-2563eb) ![Verification: Build+Typecheck+Lint+Test+Contracts+Migrations+Integration](https://img.shields.io/badge/Verification-Build%2BTypecheck%2BLint%2BTest%2BContracts%2BMigrations%2BIntegration-2563eb) ![DB: postgres+sqlite](https://img.shields.io/badge/DB-postgres%2Bsqlite-2563eb) ![Integration Model: Actions+Resources+Jobs+Workflows+UI](https://img.shields.io/badge/Integration%20Model-Actions%2BResources%2BJobs%2BWorkflows%2BUI-2563eb)

## Part Of The Gutu Stack

| Aspect | Value |
| --- | --- |
| Repo kind | First-party plugin |
| Domain group | AI Systems |
| Default category | AI & Automation / Operating Models |
| Primary focus | assist summaries, triage suggestions, anomaly review |
| Best when | You need a governed domain boundary with explicit contracts and independent release cadence. |
| Composes through | Actions+Resources+Jobs+Workflows+UI |

- Gutu keeps plugins as independent repos with manifest-governed boundaries, compatibility channels, and verification lanes instead of hiding everything behind one giant mutable codebase.
- This plugin is meant to compose through explicit actions, resources, jobs, workflows, and runtime envelopes, not through undocumented hook chains.

## What It Does Now

Provides bounded AI summaries, triage suggestions, and anomaly-review state for business teams without making AI the source of truth.

- Exports 3 governed actions: `ai-assist.summaries.generate`, `ai-assist.triage.route`, `ai-assist.anomalies.review`.
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

## Maturity

**Maturity Tier:** `Hardened`

This tier is justified because unit coverage exists, contract coverage exists, integration coverage exists, migration coverage exists, job definitions are exported, and workflow definitions are exported.

## Verified Capability Summary

- Domain group: **AI Systems**
- Default category: **AI & Automation / Operating Models**
- Verification surface: **Build+Typecheck+Lint+Test+Contracts+Migrations+Integration**
- Tests discovered: **5** total files across unit, contract, integration, migration lanes
- Integration model: **Actions+Resources+Jobs+Workflows+UI**
- Database support: **postgres + sqlite**

## Dependency And Compatibility Summary

| Field | Value |
| --- | --- |
| Package | `@plugins/ai-assist-core` |
| Manifest ID | `ai-assist-core` |
| Repo | [gutu-plugin-ai-assist-core](https://github.com/gutula/gutu-plugin-ai-assist-core) |
| Depends On | `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `ai-core`, `ai-rag`, `crm-core`, `support-service-core`, `sales-core`, `traceability-core` |
| Requested Capabilities | `ui.register.admin`, `api.rest.mount`, `data.write.ai-assist`, `events.publish.ai-assist` |
| Provided Capabilities | `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies` |
| Runtime | bun>=1.3.12 |
| Database | postgres, sqlite |
| Integration Model | Actions+Resources+Jobs+Workflows+UI |

## Capability Matrix

| Surface | Count | Details |
| --- | --- | --- |
| Actions | 3 | `ai-assist.summaries.generate`, `ai-assist.triage.route`, `ai-assist.anomalies.review` |
| Resources | 3 | `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies` |
| Jobs | 2 | `ai-assist.projections.refresh`, `ai-assist.reconciliation.run` |
| Workflows | 1 | `ai-assist-lifecycle` |
| UI | Present | base UI surface, admin contributions |
| Owned Entities | 4 | `Summary Log`, `Triage Suggestion`, `Anomaly Review`, `Feedback Record` |
| Reports | 3 | `Summary Generation Log`, `Anomaly Review Summary`, `AI Assist Adoption` |
| Exception Queues | 3 | `low-confidence-triage-review`, `anomaly-false-positive-review`, `assistant-feedback-backlog` |
| Operational Scenarios | 3 | `summary-generation`, `triage-routing`, `anomaly-review-with-human-approval` |
| Settings Surfaces | 3 | `AI Assist Policy`, `Support Settings`, `CRM Settings` |
| ERPNext Refs | 3 | `CRM`, `Support`, `Projects` |

## Quick Start For Integrators

Use this repo inside a **compatible Gutu workspace** or the **ecosystem certification workspace** so its `workspace:*` dependencies resolve honestly.

```bash
# from a compatible workspace that already includes this plugin's dependency graph
bun install
bun run build
bun run test
bun run docs:check
```

```ts
import { manifest, createPrimaryRecordAction, BusinessPrimaryResource, jobDefinitions, workflowDefinitions, adminContributions, uiSurface } from "@plugins/ai-assist-core";

console.log(manifest.id);
console.log(createPrimaryRecordAction.id);
console.log(BusinessPrimaryResource.id);
```

Use the root repo scripts for day-to-day work **after the workspace is bootstrapped**, or run the nested package directly from `framework/builtin-plugins/ai-assist-core` if you need lower-level control.

## Current Test Coverage

- Root verification scripts: `bun run build`, `bun run typecheck`, `bun run lint`, `bun run test`, `bun run test:contracts`, `bun run test:unit`, `bun run test:integration`, `bun run test:migrations`, `bun run docs:check`
- Unit files: 1
- Contracts files: 1
- Integration files: 1
- Migrations files: 2

## Known Boundaries And Non-Goals

- Not an everything-and-the-kitchen-sink provider abstraction layer.
- Not a substitute for explicit approval, budgeting, and audit governance in the surrounding platform.
- Cross-plugin composition should use Gutu command, event, job, and workflow primitives. This repo should not be documented as exposing a generic WordPress-style hook system unless one is explicitly exported.

## Recommended Next Milestones

- Deepen review, feedback, and rollback flows as more operators use AI assistance in production workflows.
- Clarify domain-specific guardrails and downstream action policies before automated assist paths broaden.
- Add deeper provider, persistence, or evaluation integrations only where the shipped control-plane contracts already prove stable.
- Expand operator diagnostics and release gating where the current lifecycle already exposes strong evidence paths.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Lead`, `Opportunity`, `Issue`.

## More Docs

See [DEVELOPER.md](./DEVELOPER.md), [TODO.md](./TODO.md), [SECURITY.md](./SECURITY.md), [CONTRIBUTING.md](./CONTRIBUTING.md). The internal domain sources used to build those docs live under:

- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/AGENT_CONTEXT.md`
- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/BUSINESS_RULES.md`
- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/EDGE_CASES.md`
- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/FLOWS.md`
- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/GLOSSARY.md`
- `plugins/gutu-plugin-ai-assist-core/framework/builtin-plugins/ai-assist-core/docs/MANDATORY_STEPS.md`
