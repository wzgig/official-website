# 长沙智碳联算科技有限责任公司官网

面向工业园区的低碳电能与调频联合市场出清系统展示官网。

## 在线地址

https://wzgig.github.io/official-website/

## 本轮改版方向

- 将首页从概念化科技大屏，重构为产业公司官网：首页、解决方案、产品平台、技术模型、应用验证、团队与合作入口。
- 使用项目材料中的真实业务表达：低碳电能管理、调频辅助服务、碳流核算、LA 需求响应、市场行为评价。
- 新增本地生成的低碳工业园区主视觉，避免依赖远程占位图片。
- 保留 GitHub Pages 静态导出配置，并显式处理 `/official-website` 子路径资源。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- lucide-react

## 常用命令

```bash
npm run lint
npx tsc --noEmit
npm run build
```

当前开发环境的 Windows 沙箱会在 Next.js 子进程启动处触发 `spawn EPERM`，因此 `npm run build` 和 `npm run dev` 可能需要在普通终端中运行。
