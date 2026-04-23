import {
  advancePrimaryRecord,
  createPrimaryRecord,
  reconcilePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type ReconcilePrimaryRecordInput
} from "../services/main.service";

export const businessFlowDefinitions = [
  {
    "id": "ai-assist.summaries.generate",
    "label": "Generate Summary",
    "phase": "create",
    "methodName": "generateSummary"
  },
  {
    "id": "ai-assist.triage.route",
    "label": "Route Triage Suggestion",
    "phase": "advance",
    "methodName": "routeTriageSuggestion"
  },
  {
    "id": "ai-assist.anomalies.review",
    "label": "Review AI Anomaly",
    "phase": "reconcile",
    "methodName": "reviewAiAnomaly"
  }
] as const;

export async function generateSummary(input: CreatePrimaryRecordInput) {
  return createPrimaryRecord(input);
}

export async function routeTriageSuggestion(input: AdvancePrimaryRecordInput) {
  return advancePrimaryRecord(input);
}

export async function reviewAiAnomaly(input: ReconcilePrimaryRecordInput) {
  return reconcilePrimaryRecord(input);
}
