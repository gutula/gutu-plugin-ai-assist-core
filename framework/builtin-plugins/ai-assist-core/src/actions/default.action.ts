import { defineAction } from "@platform/schema";
import { z } from "zod";

import {
  createPrimaryRecord,
  advancePrimaryRecord,
  reconcilePrimaryRecord,
  placePrimaryRecordOnHold,
  releasePrimaryRecordHold,
  amendPrimaryRecord,
  reversePrimaryRecord
} from "../services/main.service";
import {
  approvalStateSchema,
  fulfillmentStateSchema,
  postingStateSchema,
  recordStateSchema,
  createPrimaryRecordInputSchema,
  advancePrimaryRecordInputSchema,
  reconcilePrimaryRecordInputSchema,
  placePrimaryRecordOnHoldInputSchema,
  releasePrimaryRecordHoldInputSchema,
  amendPrimaryRecordInputSchema,
  reversePrimaryRecordInputSchema
} from "../model";

export const generateSummaryAction = defineAction({
  id: "ai-assist.summaries.generate",
  description: "Generate Summary",
  input: createPrimaryRecordInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    recordState: recordStateSchema,
    approvalState: approvalStateSchema,
    postingState: postingStateSchema,
    fulfillmentState: fulfillmentStateSchema,
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.summaries.write",
  idempotent: true,
  audit: true,
  handler: ({ input }) => createPrimaryRecord(input)
});

export const routeTriageSuggestionAction = defineAction({
  id: "ai-assist.triage.route",
  description: "Route Triage Suggestion",
  input: advancePrimaryRecordInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    recordState: recordStateSchema,
    approvalState: approvalStateSchema,
    postingState: postingStateSchema,
    fulfillmentState: fulfillmentStateSchema,
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.triage.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => advancePrimaryRecord(input)
});

export const reviewAiAnomalyAction = defineAction({
  id: "ai-assist.anomalies.review",
  description: "Review AI Anomaly",
  input: reconcilePrimaryRecordInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    exceptionId: z.string(),
    status: z.enum(["open", "under-review", "resolved", "closed"]),
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.anomalies.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => reconcilePrimaryRecord(input)
});

export const placeRecordOnHoldAction = defineAction({
  id: "ai-assist.summaries.hold",
  description: "Place Record On Hold",
  input: placePrimaryRecordOnHoldInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    status: z.enum(["open", "under-review", "resolved", "closed"]),
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.summaries.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => placePrimaryRecordOnHold(input)
});

export const releaseRecordHoldAction = defineAction({
  id: "ai-assist.summaries.release",
  description: "Release Record Hold",
  input: releasePrimaryRecordHoldInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    status: z.enum(["open", "under-review", "resolved", "closed"]),
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.summaries.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => releasePrimaryRecordHold(input)
});

export const amendRecordAction = defineAction({
  id: "ai-assist.summaries.amend",
  description: "Amend Record",
  input: amendPrimaryRecordInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    amendedRecordId: z.string(),
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.summaries.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => amendPrimaryRecord(input)
});

export const reverseRecordAction = defineAction({
  id: "ai-assist.summaries.reverse",
  description: "Reverse Record",
  input: reversePrimaryRecordInputSchema,
  output: z.object({
    ok: z.literal(true),
    recordId: z.string(),
    reversalRecordId: z.string(),
    revisionNo: z.number().int().positive(),
    eventIds: z.array(z.string()),
    jobIds: z.array(z.string())
  }),
  permission: "ai-assist.summaries.write",
  idempotent: false,
  audit: true,
  handler: ({ input }) => reversePrimaryRecord(input)
});

export const businessActions = [
  generateSummaryAction,
  routeTriageSuggestionAction,
  reviewAiAnomalyAction,
  placeRecordOnHoldAction,
  releaseRecordHoldAction,
  amendRecordAction,
  reverseRecordAction
] as const;
