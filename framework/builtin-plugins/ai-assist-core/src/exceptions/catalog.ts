export const exceptionQueueDefinitions = [
  {
    "id": "low-confidence-triage-review",
    "label": "Low Confidence Triage Review",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "ai-assist.reconciliation.run"
  },
  {
    "id": "anomaly-false-positive-review",
    "label": "Anomaly False Positive Review",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "ai-assist.reconciliation.run"
  },
  {
    "id": "assistant-feedback-backlog",
    "label": "Assistant Feedback Backlog",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "ai-assist.reconciliation.run"
  }
] as const;
