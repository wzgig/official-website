# 长沙智碳联算科技有限责任公司官网

面向工业园区的低碳电能与调频联合市场出清系统展示官网。

## 在线地址

https://wzgig.github.io/official-website/

## 本轮改版方向

- 参考金风科技官网的沉浸式绿色能源视觉语言，重构为全屏生态影像首屏、透明白色导航、中心品牌主张和大留白内容区。
- 首页结构覆盖：首页、零碳、方案、能源、数字平台、应用验证、关于我们和合作入口。
- 使用项目材料中的真实业务表达：低碳电能管理、调频辅助服务、碳流核算、LA 需求响应、市场行为评价。
- 新增本地生成的生态能源首屏视觉，并保留低碳工业园区图片作为能源平台区视觉资产。
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
