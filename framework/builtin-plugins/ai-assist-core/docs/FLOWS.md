# AI Assist Core Flows

## Happy paths

- `ai-assist.summaries.generate`: Generate Summary
- `ai-assist.triage.route`: Route Triage Suggestion
- `ai-assist.anomalies.review`: Review AI Anomaly
- `ai-assist.summaries.hold`: Place Record On Hold
- `ai-assist.summaries.release`: Release Record Hold
- `ai-assist.summaries.amend`: Amend Record
- `ai-assist.summaries.reverse`: Reverse Record

## Operational scenario matrix

- `summary-generation`
- `triage-routing`
- `anomaly-review-with-human-approval`

## Action-level flows

### `ai-assist.summaries.generate`

Generate Summary

Permission: `ai-assist.summaries.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.triage.route`

Route Triage Suggestion

Permission: `ai-assist.triage.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.anomalies.review`

Review AI Anomaly

Permission: `ai-assist.anomalies.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.summaries.hold`

Place Record On Hold

Permission: `ai-assist.summaries.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.summaries.release`

Release Record Hold

Permission: `ai-assist.summaries.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.summaries.amend`

Amend Record

Permission: `ai-assist.summaries.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `ai-assist.summaries.reverse`

Reverse Record

Permission: `ai-assist.summaries.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `ai-assist.summaries`, `ai-assist.triage`, `ai-assist.anomalies`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


## Cross-package interactions

- Direct dependencies: `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `ai-core`, `ai-rag`, `crm-core`, `support-service-core`, `sales-core`, `traceability-core`
- Requested capabilities: `ui.register.admin`, `api.rest.mount`, `data.write.ai-assist`, `events.publish.ai-assist`
- Integration model: Actions+Resources+Jobs+Workflows+UI
- ERPNext doctypes used as parity references: `Lead`, `Opportunity`, `Issue`, `Project`
- Recovery ownership should stay with the host orchestration layer when the plugin does not explicitly export jobs, workflows, or lifecycle events.
