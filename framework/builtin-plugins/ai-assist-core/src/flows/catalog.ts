import {
  advancePrimaryRecord,
  amendPrimaryRecord,
  createPrimaryRecord,
  placePrimaryRecordOnHold,
  reconcilePrimaryRecord,
  releasePrimaryRecordHold,
  reversePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type AmendPrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type PlacePrimaryRecordOnHoldInput,
  type ReconcilePrimaryRecordInput,
  type ReleasePrimaryRecordHoldInput,
  type ReversePrimaryRecordInput
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
  },
  {
    "id": "ai-assist.summaries.hold",
    "label": "Place Record On Hold",
    "phase": "hold",
    "methodName": "placeRecordOnHold"
  },
  {
    "id": "ai-assist.summaries.release",
    "label": "Release Record Hold",
    "phase": "release",
    "methodName": "releaseRecordHold"
  },
  {
    "id": "ai-assist.summaries.amend",
    "label": "Amend Record",
    "phase": "amend",
    "methodName": "amendRecord"
  },
  {
    "id": "ai-assist.summaries.reverse",
    "label": "Reverse Record",
    "phase": "reverse",
    "methodName": "reverseRecord"
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

export async function placeRecordOnHold(input: PlacePrimaryRecordOnHoldInput) {
  return placePrimaryRecordOnHold(input);
}

export async function releaseRecordHold(input: ReleasePrimaryRecordHoldInput) {
  return releasePrimaryRecordHold(input);
}

export async function amendRecord(input: AmendPrimaryRecordInput) {
  return amendPrimaryRecord(input);
}

export async function reverseRecord(input: ReversePrimaryRecordInput) {
  return reversePrimaryRecord(input);
}
