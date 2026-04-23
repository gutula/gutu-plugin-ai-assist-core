export const reportDefinitions = [
  {
    "id": "ai-assist-core.report.01",
    "label": "Summary Generation Log",
    "owningPlugin": "ai-assist-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "low-confidence-triage-review",
      "anomaly-false-positive-review",
      "assistant-feedback-backlog"
    ]
  },
  {
    "id": "ai-assist-core.report.02",
    "label": "Anomaly Review Summary",
    "owningPlugin": "ai-assist-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "low-confidence-triage-review",
      "anomaly-false-positive-review",
      "assistant-feedback-backlog"
    ]
  },
  {
    "id": "ai-assist-core.report.03",
    "label": "AI Assist Adoption",
    "owningPlugin": "ai-assist-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "low-confidence-triage-review",
      "anomaly-false-positive-review",
      "assistant-feedback-backlog"
    ]
  }
] as const;
