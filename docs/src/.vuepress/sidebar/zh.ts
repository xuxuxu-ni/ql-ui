import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    // {
    //   text: "指南",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    {
      icon: "discover",
      text: "组件",
      prefix: "component/",
      children: "structure",
    }
  ],
});
