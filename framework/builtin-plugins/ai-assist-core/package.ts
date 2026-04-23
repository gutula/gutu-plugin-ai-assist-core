import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "ai-assist-core",
  "kind": "plugin",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-plugin-ai-assist-core",
  "displayName": "AI Assist Core",
  "domainGroup": "Operational Data",
  "defaultCategory": {
    "id": "ai_automation",
    "label": "AI & Automation",
    "subcategoryId": "operating_models",
    "subcategoryLabel": "Operating Models"
  },
  "description": "Guardrailed AI summaries, triage suggestions, anomaly detection, and operator-assist workflows for business teams.",
  "extends": [],
  "dependsOn": [
    "auth-core",
    "org-tenant-core",
    "role-policy-core",
    "audit-core",
    "workflow-core",
    "ai-core",
    "ai-rag",
    "crm-core",
    "support-service-core",
    "sales-core",
    "traceability-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "auth-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "org-tenant-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "role-policy-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "audit-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "workflow-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "ai-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "ai-rag",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "crm-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "support-service-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "sales-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "traceability-core",
      "class": "required",
      "rationale": "Required for AI Assist Core to keep its boundary governed and explicit."
    }
  ],
  "optionalWith": [],
  "conflictsWith": [],
  "providesCapabilities": [
    "ai-assist.summaries",
    "ai-assist.triage",
    "ai-assist.anomalies"
  ],
  "requestedCapabilities": [
    "ui.register.admin",
    "api.rest.mount",
    "data.write.ai-assist",
    "events.publish.ai-assist"
  ],
  "ownsData": [
    "ai-assist.summaries",
    "ai-assist.triage",
    "ai-assist.anomalies",
    "ai-assist.feedback"
  ],
  "extendsData": [],
  "publicCommands": [
    "ai-assist.summaries.generate",
    "ai-assist.triage.route",
    "ai-assist.anomalies.review"
  ],
  "publicQueries": [
    "ai-assist.summary-log",
    "ai-assist.anomaly-summary"
  ],
  "publicEvents": [
    "ai-assist.summary-generated.v1",
    "ai-assist.triage-routed.v1",
    "ai-assist.anomaly-reviewed.v1"
  ],
  "domainCatalog": {
    "erpnextModules": [
      "CRM",
      "Support",
      "Projects"
    ],
    "erpnextDoctypes": [
      "Lead",
      "Opportunity",
      "Issue",
      "Project"
    ],
    "ownedEntities": [
      "Summary Log",
      "Triage Suggestion",
      "Anomaly Review",
      "Feedback Record"
    ],
    "reports": [
      "Summary Generation Log",
      "Anomaly Review Summary",
      "AI Assist Adoption"
    ],
    "exceptionQueues": [
      "low-confidence-triage-review",
      "anomaly-false-positive-review",
      "assistant-feedback-backlog"
    ],
    "operationalScenarios": [
      "summary-generation",
      "triage-routing",
      "anomaly-review-with-human-approval"
    ],
    "settingsSurfaces": [
      "AI Assist Policy",
      "Support Settings",
      "CRM Settings"
    ],
    "edgeCases": [
      "assistant suggestion conflicts with policy",
      "duplicate AI output replay",
      "human override after automated suggestion"
    ]
  },
  "slotClaims": [],
  "trustTier": "first-party",
  "reviewTier": "R1",
  "isolationProfile": "same-process-trusted",
  "compatibility": {
    "framework": "^0.1.0",
    "runtime": "bun>=1.3.12",
    "db": [
      "postgres",
      "sqlite"
    ]
  }
});
