export const scenarioDefinitions = [
  {
    "id": "summary-generation",
    "owningPlugin": "ai-assist-core",
    "workflowId": "ai-assist-lifecycle",
    "actionIds": [
      "ai-assist.summaries.generate",
      "ai-assist.triage.route",
      "ai-assist.anomalies.review",
      "ai-assist.summaries.hold",
      "ai-assist.summaries.release",
      "ai-assist.summaries.amend",
      "ai-assist.summaries.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "crm.handoffs.prepare",
        "support.tickets.create",
        "traceability.links.record"
      ]
    }
  },
  {
    "id": "triage-routing",
    "owningPlugin": "ai-assist-core",
    "workflowId": "ai-assist-lifecycle",
    "actionIds": [
      "ai-assist.summaries.generate",
      "ai-assist.triage.route",
      "ai-assist.anomalies.review",
      "ai-assist.summaries.hold",
      "ai-assist.summaries.release",
      "ai-assist.summaries.amend",
      "ai-assist.summaries.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "crm.handoffs.prepare",
        "support.tickets.create",
        "traceability.links.record"
      ]
    }
  },
  {
    "id": "anomaly-review-with-human-approval",
    "owningPlugin": "ai-assist-core",
    "workflowId": "ai-assist-lifecycle",
    "actionIds": [
      "ai-assist.summaries.generate",
      "ai-assist.triage.route",
      "ai-assist.anomalies.review",
      "ai-assist.summaries.hold",
      "ai-assist.summaries.release",
      "ai-assist.summaries.amend",
      "ai-assist.summaries.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "traceability.links.record"
      ],
      "reconcile": [
        "crm.handoffs.prepare",
        "support.tickets.create",
        "traceability.links.record"
      ]
    }
  }
] as const;
