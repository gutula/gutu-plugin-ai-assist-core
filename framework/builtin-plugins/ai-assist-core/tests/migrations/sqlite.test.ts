import { describe, expect, it } from "bun:test";

import {
  buildAiAssistCoreSqliteMigrationSql,
  buildAiAssistCoreSqliteRollbackSql,
  getAiAssistCoreSqliteLookupIndexName,
  getAiAssistCoreSqliteStatusIndexName
} from "../../src/sqlite";

describe("ai-assist-core sqlite helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildAiAssistCoreSqliteMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core_primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core_secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS ai_assist_core_exception_records");
    expect(sql).toContain(getAiAssistCoreSqliteLookupIndexName("ai_assist_core_"));
    expect(sql).toContain(getAiAssistCoreSqliteStatusIndexName("ai_assist_core_"));
  });

  it("rolls the sqlite tables back safely", () => {
    const sql = buildAiAssistCoreSqliteRollbackSql({ tablePrefix: "ai_assist_core_preview_" }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS ai_assist_core_preview_exception_records");
  });
});
