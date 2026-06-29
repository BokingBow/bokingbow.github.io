# Boking Bow

个人主页 & 博客 — [bokingbow.github.io](https://bokingbow.github.io)

## 项目结构

```text
/
├── index.html          # 个人主页
├── css/style.css       # 主页样式
├── js/main.js          # 主页交互
│
├── blog/               # Hexo 博客
│   ├── _config.yml     # 博客配置
│   ├── source/_posts/  # 文章 (Markdown)
│   ├── themes/         # 主题
│   └── public/         # 构建输出 (git ignored)
│
├── .github/workflows/  # GitHub Actions 部署
├── images/             # 图片资源
└── README.md
```

## 本地开发

### 主页

直接用浏览器打开 `index.html` 即可预览。

### 博客

```bash
cd blog
yarn install            # 安装依赖
npx hexo server         # 启动本地服务 → http://localhost:4000/blog/
npx hexo generate       # 构建静态文件
npx hexo new "标题"     # 新建文章
```

## 部署

本项目使用 **GitHub Actions** 自动部署到 GitHub Pages。

### 首次部署

1. 前往仓库 **Settings → Pages**
2. **Source** 选择 **GitHub Actions**
3. 推送 `main` 分支，Actions 会自动构建并部署

之后每次推送到 `main` 分支都会自动重新部署。

### 手动触发

在 GitHub 仓库的 **Actions → Deploy to GitHub Pages → Run workflow** 中手动触发。

## 写新博客

```bash
cd blog
npx hexo new "文章标题"
```

在 `blog/source/_posts/` 中编辑生成的 Markdown 文件，然后提交推送即可。
