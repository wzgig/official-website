# 长沙智碳联算科技有限责任公司官网

面向工业园区的低碳电能管理、调频辅助服务、碳流核算、需求响应与联合市场出清平台官网。

## 在线地址

https://wzgig.github.io/official-website/

## 本轮更新

- 重构首页内容架构：首屏、指标背书、零碳价值、产品体系、服务场景、解决方案、平台流程、数字模型、案例样板、可信交付、验证路径、科研基础、政策动态、关于我们、合作流程、FAQ 与联系方式。
- 补齐公司官网常见缺口：早期案例表达、资质合规与数据安全说明、政策与动态入口、移动端导航、FAQ、明确 CTA。
- 优化视觉表达：保留沉浸式能源影像，增加科技蓝绿配色层次，减少单一绿色观感，强化 B2B 官网的可信、克制和可扫描性。
- 强化 SEO 元数据：覆盖零碳园区、低碳电能、调频辅助服务、碳流核算、需求响应、负荷聚合等关键词。
- 保留 GitHub Pages 静态导出配置，并显式处理 `/official-website` 子路径资源。

## 设计判断

当前官网不应虚构客户 Logo 或夸大落地案例，因此新增的“案例”板块采用示范测算样板、平台试运行场景、政府汇报场景三类表达。后续拿到授权后，可替换为真实客户 Logo、项目现场图、证书图片和详细案例页。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- lucide-react

## 常用命令

```bash
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run dev
```

Windows PowerShell 若禁止执行 `npm.ps1` / `npx.ps1`，请使用 `npm.cmd` 和 `npx.cmd`。
