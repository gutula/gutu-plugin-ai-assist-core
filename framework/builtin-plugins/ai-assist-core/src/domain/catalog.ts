export const domainCatalog = {
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
} as const;
