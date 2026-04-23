import {
  defineAdminNav,
  defineCommand,
  definePage,
  defineWorkspace,
  type AdminContributionRegistry
} from "@platform/admin-contracts";

import { BusinessAdminPage } from "./admin/main.page";

export const adminContributions: Pick<AdminContributionRegistry, "workspaces" | "nav" | "pages" | "commands"> = {
  workspaces: [
    defineWorkspace({
      id: "ai-assist",
      label: "AI Assist",
      icon: "sparkles",
      description: "Guardrailed AI assistance for commercial, support, and operations work.",
      permission: "ai-assist.summaries.read",
      homePath: "/admin/business/ai-assist",
      quickActions: ["ai-assist-core.open.control-room"]
    })
  ],
  nav: [
    defineAdminNav({
      workspace: "ai-assist",
      group: "control-room",
      items: [
        {
          id: "ai-assist-core.overview",
          label: "Control Room",
          icon: "sparkles",
          to: "/admin/business/ai-assist",
          permission: "ai-assist.summaries.read"
        }
      ]
    })
  ],
  pages: [
    definePage({
      id: "ai-assist-core.page",
      kind: "dashboard",
      route: "/admin/business/ai-assist",
      label: "AI Assist Control Room",
      workspace: "ai-assist",
      group: "control-room",
      permission: "ai-assist.summaries.read",
      component: BusinessAdminPage
    })
  ],
  commands: [
    defineCommand({
      id: "ai-assist-core.open.control-room",
      label: "Open AI Assist Core",
      permission: "ai-assist.summaries.read",
      href: "/admin/business/ai-assist",
      keywords: ["ai assist core","ai assist","business"]
    })
  ]
};
