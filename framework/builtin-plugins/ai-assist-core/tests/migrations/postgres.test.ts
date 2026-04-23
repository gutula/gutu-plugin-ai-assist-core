import { describe, expect, it } from "bun:test";

import {
  buildAiAssistCoreMigrationSql,
  buildAiAssistCoreRollbackSql,
  getAiAssistCoreLookupIndexName,
  getAiAssistCoreStatusIndexName
} from "../../src/postgres";

describe("ai-assist-core postgres helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildAiAssistCoreMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core.primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core.secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core.exception_records");
    expect(sql).toContain(getAiAssistCoreLookupIndexName());
    expect(sql).toContain(getAiAssistCoreStatusIndexName());
  });

  it("rolls the schema back safely", () => {
    const sql = buildAiAssistCoreRollbackSql({ schemaName: "ai_assist_core_preview", dropSchema: true }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS ai_assist_core_preview.exception_records");
    expect(sql).toContain("DROP SCHEMA IF EXISTS ai_assist_core_preview CASCADE");
  });
});
