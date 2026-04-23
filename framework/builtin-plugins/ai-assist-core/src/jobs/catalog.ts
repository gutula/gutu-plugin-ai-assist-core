import { defineJob } from "@platform/jobs";
import { z } from "zod";

export const jobDefinitionKeys = [
  "ai-assist.projections.refresh",
  "ai-assist.reconciliation.run"
] as const;

export const jobDefinitions = {
  "ai-assist.projections.refresh": defineJob({
    id: "ai-assist.projections.refresh",
    queue: "ai-assist-projections",
    payload: z.object({
      tenantId: z.string().min(2),
      recordId: z.string().min(2)
    }),
    concurrency: 2,
    retryPolicy: {
      attempts: 3,
      backoff: "exponential",
      delayMs: 1_000
    },
    timeoutMs: 30_000,
    handler: () => undefined
  }),
  "ai-assist.reconciliation.run": defineJob({
    id: "ai-assist.reconciliation.run",
    queue: "ai-assist-reconciliation",
    payload: z.object({
      tenantId: z.string().min(2),
      recordId: z.string().min(2)
    }),
    concurrency: 1,
    retryPolicy: {
      attempts: 4,
      backoff: "linear",
      delayMs: 1_500
    },
    timeoutMs: 45_000,
    handler: () => undefined
  })
} as const;
