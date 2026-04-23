import {
  createBusinessDomainStateStore,
  createBusinessOrchestrationState,
  createBusinessPluginService,
  type BusinessAdvancePrimaryRecordInput,
  type BusinessCreatePrimaryRecordInput,
  type BusinessFailPendingDownstreamItemInput,
  type BusinessReconcilePrimaryRecordInput,
  type BusinessReplayDeadLetterInput,
  type BusinessResolvePendingDownstreamItemInput
} from "@platform/business-runtime";

import { type ExceptionRecord, type PrimaryRecord, type SecondaryRecord } from "../model";

export type CreatePrimaryRecordInput = BusinessCreatePrimaryRecordInput;
export type AdvancePrimaryRecordInput = BusinessAdvancePrimaryRecordInput;
export type ReconcilePrimaryRecordInput = BusinessReconcilePrimaryRecordInput;
export type ResolvePendingDownstreamItemInput = BusinessResolvePendingDownstreamItemInput;
export type FailPendingDownstreamItemInput = BusinessFailPendingDownstreamItemInput;
export type ReplayDeadLetterInput = BusinessReplayDeadLetterInput;

function seedState() {
  return {
    primaryRecords: [
      {
        id: "ai-assist-core:seed",
        tenantId: "tenant-platform",
        title: "AI Assist Core Seed Record",
        counterpartyId: "party:seed",
        companyId: "company:primary",
        branchId: "branch:head-office",
        recordState: "active",
        approvalState: "approved",
        postingState: "unposted",
        fulfillmentState: "none",
        amountMinor: 125000,
        currencyCode: "USD",
        revisionNo: 1,
        reasonCode: null,
        effectiveAt: "2026-04-23T00:00:00.000Z",
        correlationId: "ai-assist-core:seed",
        processId: "ai-assist-lifecycle:seed",
        upstreamRefs: [],
        downstreamRefs: [],
        updatedAt: "2026-04-23T00:00:00.000Z"
      }
    ] satisfies PrimaryRecord[],
    secondaryRecords: [] satisfies SecondaryRecord[],
    exceptionRecords: [] satisfies ExceptionRecord[],
    orchestration: createBusinessOrchestrationState()
  };
}

const store = createBusinessDomainStateStore({
  pluginId: "ai-assist-core",
  sqlite: {
    primaryTable: "ai_assist_core_primary_records",
    secondaryTable: "ai_assist_core_secondary_records",
    exceptionTable: "ai_assist_core_exception_records",
    dbFileName: "business-runtime.sqlite"
  },
  postgres: {
    schemaName: "ai_assist_core"
  },
  seedStateFactory: seedState
});

const service = createBusinessPluginService({
  pluginId: "ai-assist-core",
  displayName: "AI Assist Core",
  primaryResourceId: "ai-assist.summaries",
  secondaryResourceId: "ai-assist.triage",
  exceptionResourceId: "ai-assist.anomalies",
  createEvent: "ai-assist.summary-generated.v1",
  advanceEvent: "ai-assist.triage-routed.v1",
  reconcileEvent: "ai-assist.anomaly-reviewed.v1",
  projectionJobId: "ai-assist.projections.refresh",
  reconciliationJobId: "ai-assist.reconciliation.run",
  advanceActionLabel: "Route Triage Suggestion",
  orchestrationTargets: {
  "create": [],
  "advance": [
    "traceability.links.record"
  ],
  "reconcile": [
    "crm.handoffs.prepare",
    "support.tickets.create",
    "traceability.links.record"
  ]
},
  store
});

export const {
  listPrimaryRecords,
  listSecondaryRecords,
  listExceptionRecords,
  listPublishedMessages,
  listPendingDownstreamItems,
  listDeadLetters,
  listProjectionRecords,
  getBusinessOverview,
  createPrimaryRecord,
  advancePrimaryRecord,
  reconcilePrimaryRecord,
  resolvePendingDownstreamItem,
  failPendingDownstreamItem,
  replayDeadLetter
} = service;
