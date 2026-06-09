export const siteConfig = {
  name: "个人博客",
  tagline: "记录 · 成长 · 生活",
  description: "一个素雅简约的个人空间，记录工作、学习与生活的点滴",
  
  nav: [
    { label: "首页", href: "#home" },
    { label: "个人简介", href: "#about" },
    { label: "工作", href: "#work" },
    { label: "学习", href: "#study" },
    { label: "生活", href: "#life" },
  ],
  
  hero: {
    welcome: "你好，欢迎来到我的空间",
    title: "在这里，记录\n每一段成长",
    subtitle: "这是一个素雅简约的个人博客，没有花哨的装饰，只有真诚的文字。用干净的排版、舒适的配色，记录工作、学习与生活的点滴。",
    styleNote: "网站风格：素雅 · 简约 · 耐看",
  },
  
  about: {
    title: "关于我",
    basics: {
      label: "基础信息",
      items: [
        { label: "姓名", value: "你的名字" },
        { label: "城市", value: "所在城市" },
        { label: "职业", value: "当前职业" },
      ],
    },
    personality: {
      label: "性格特点",
      items: ["温和内敛", "善于思考", "追求细节", "持续学习"],
    },
    hobbies: {
      label: "兴趣爱好",
      items: ["阅读", "写作", "摄影", "音乐", "旅行"],
    },
  },
  
  work: {
    title: "工作经历",
    experiences: [
      {
        company: "公司名称",
        role: "职位名称",
        period: "2023 - 至今",
        description: "负责的主要工作内容和成就描述。",
      },
      {
        company: "前公司名称",
        role: "前职位",
        period: "2020 - 2023",
        description: "在此期间完成的项目和获得的成长。",
      },
    ],
    skills: {
      title: "职业技能",
      items: [
        { category: "技术栈", skills: ["React", "TypeScript", "Node.js", "Python"] },
        { category: "工具", skills: ["Git", "Figma", "VS Code", "Linux"] },
        { category: "软技能", skills: ["沟通协作", "项目管理", "问题分析", "团队领导"] },
      ],
    },
    achievements: {
      title: "做过的事情",
      items: [
        "主导完成了 XX 项目，提升了系统性能 40%",
        "设计了 XX 产品架构，支持日均百万级请求",
        "建立了团队代码规范，提升了开发效率",
      ],
    },
  },
  
  study: {
    title: "学习经历",
    education: [
      {
        school: "学校名称",
        degree: "学历/专业",
        period: "2016 - 2020",
        description: "主修课程和学术成就。",
      },
    ],
    direction: {
      title: "学习方向",
      items: [
        "前端工程化与性能优化",
        "用户体验设计与交互",
        "技术管理与团队成长",
      ],
    },
    growth: {
      title: "收获与成长",
      items: [
        "建立了系统的技术知识体系",
        "培养了独立思考和解决问题的能力",
        "学会了如何高效学习和知识管理",
      ],
    },
  },
  
  life: {
    title: "生活记录",
    daily: {
      title: "日常",
      items: [
        "晨跑 5 公里，保持健康的生活节奏",
        "每天阅读 30 分钟，拓宽视野",
        "周末下厨，享受烹饪的乐趣",
      ],
    },
    interests: {
      title: "兴趣",
      items: [
        "胶片摄影，记录生活中的美好瞬间",
        "独立音乐，偏爱后摇和爵士",
        "手冲咖啡，研究不同产地的风味",
      ],
    },
    records: {
      title: "生活记录",
      items: [
        "2024 年独自旅行日本 15 天",
        "学会了弹吉他，能完整演奏几首曲子",
        "开始练习书法，修身养性",
      ],
    },
  },
  
  footer: {
    copyright: "© 2026 个人博客。All rights reserved.",
    note: "用文字记录生活，用思考沉淀成长",
  },
}
