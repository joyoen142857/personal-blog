# 个人博客

一个素雅简约的个人博客网站，干净、舒适、耐看。

## 🎨 设计理念

- **素雅**：低饱和度的配色，温柔舒适
- **简约**：干净的布局，没有多余装饰
- **耐看**：优雅的字体，舒适的阅读体验
- **响应式**：完美适配手机、平板、桌面

## 🚀 使用方式

### 方式一：单文件版本（推荐 - 无依赖）

直接双击打开 `index-standalone.html` 即可在浏览器中预览！

- ✅ 无需安装任何依赖
- ✅ 无需 Node.js / npm
- ✅ 双击即用
- ✅ 可直接部署到任意静态托管

**自定义内容**：用文本编辑器打开 `index-standalone.html`，搜索并替换占位文字（如"你的名字"、"公司名称"等）。

### 方式二：React 开发版本

```bash
cd personal-blog
npm install
npm run dev
```

访问 http://localhost:5173 预览

**自定义内容**：编辑 `src/config/site.ts` 文件

## 🎯 部署

### 单文件部署

将 `index-standalone.html` 重命名为 `index.html`，上传到：
- GitHub Pages
- Vercel / Netlify
- 任意静态托管服务

### React 版本部署

```bash
npm run build
# 将 dist/ 目录上传
```

## 📂 文件说明

| 文件 | 说明 |
|------|------|
| `index-standalone.html` | 单文件版本，双击即用 |
| `src/config/site.ts` | React 版配置文件 |
| `src/App.tsx` | React 版主应用 |

## 🎨 配色方案

| 用途 | 色值 |
|------|------|
| 背景 | #faf9f7（暖白） |
| 表面 | #f5f3f0（浅灰） |
| 文字主色 | #2d2d2d（深灰） |
| 文字次要 | #5a5a5a（中灰） |
| 强调色 | #7d9a7d（鼠尾草绿） |

## 🛠 技术栈

**单文件版**：纯 HTML + CSS + JS（无外部依赖）  
**React 版**：React 18 + Tailwind CSS + Framer Motion

---

用文字记录生活，用思考沉淀成长 ✨
