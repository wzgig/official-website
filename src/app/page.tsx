import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  FileCheck2,
  Gauge,
  Leaf,
  LineChart,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Metric = {
  value: string;
  label: string;
  note: string;
};

type NavItem = {
  label: string;
  href: string;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const navItems: NavItem[] = [
  { label: "首页", href: "#home" },
  { label: "解决方案", href: "#solutions" },
  { label: "产品平台", href: "#platform" },
  { label: "技术模型", href: "#technology" },
  { label: "应用验证", href: "#validation" },
  { label: "团队", href: "#team" },
];

const heroMetrics: Metric[] = [
  {
    value: "4.29%",
    label: "综合运营成本降幅",
    note: "来自项目模拟运行与验收材料",
  },
  {
    value: ">=83%",
    label: "可调资源利用率",
    note: "面向园区负荷聚合与调频响应",
  },
  {
    value: "96",
    label: "24小时实时价格节点",
    note: "适配日前、日内、实时市场节奏",
  },
];

const challengeCards: Feature[] = [
  {
    icon: Gauge,
    title: "电价高频波动",
    text: "现货市场日内价格变化频繁，园区需要把用电计划、负荷响应和报价策略放在同一个决策框架内。",
  },
  {
    icon: RadioTower,
    title: "调频资源在用电侧释放不足",
    text: "新能源并网提升了频率波动压力，园区储能和可调负荷可以从成本中心转为辅助服务资源。",
  },
  {
    icon: Leaf,
    title: "碳属性追踪与核算困难",
    text: "低碳电能消纳不能只看电量，还要计算碳流、碳排责任和用户侧响应带来的减排收益。",
  },
];

const solutionCards: Feature[] = [
  {
    icon: Building2,
    title: "工业园区低碳电能管理",
    text: "接入园区负荷、分布式能源和储能数据，生成面向电能量市场的分时用电计划与成本优化策略。",
  },
  {
    icon: BatteryCharging,
    title: "用电侧调频辅助服务",
    text: "把可调负荷和储能能力转换为调频申报容量，参与辅助服务市场并形成可量化收益。",
  },
  {
    icon: CircleDollarSign,
    title: "联合市场出清与交易辅助",
    text: "融合电能、调频、碳成本和用户响应约束，输出中标价格、中标容量和发电主体出力计划。",
  },
];

const platformSteps = [
  "数据输入",
  "市场准入核验",
  "碳流率计算",
  "联合市场出清",
  "响应量返回",
  "补偿与惩罚计算",
  "市场行为评价",
  "报表输出",
];

const modelLayers: Feature[] = [
  {
    icon: Network,
    title: "电力系统碳排放流模型",
    text: "建立负荷分布、机组注入和线路潮流矩阵，计算节点碳势、支路碳流与系统碳排放量。",
  },
  {
    icon: Cpu,
    title: "电能-调频联合出清模型",
    text: "在发电主体、负荷聚合商和系统调频需求之间协同优化交易成本、调频成本和碳排成本。",
  },
  {
    icon: Activity,
    title: "LA 需求响应模型",
    text: "以碳排放责任为激励，引导用户削峰填谷并更新响应后的负荷需求曲线。",
  },
  {
    icon: ShieldCheck,
    title: "市场行为评价与风险预警",
    text: "监测价格波动和交易行为，辅助判断调频性能、收益空间和异常报价风险。",
  },
];

const validationItems = [
  "2024年8月开展供电局交易侧调研",
  "2024年12月开展发电厂与公司交涉调研",
  "2023-2025年持续开发核心模型",
  "软件流程通过项目验收并形成演示系统",
];

const teamHighlights = [
  "长沙理工大学电气工程与人工智能交叉团队",
  "指导教师覆盖电力系统、学生创新创业和科研项目经验",
  "围绕联合出清、碳流核算和调频响应发表论文、布局专利",
  "国家重点实验室平台支持，具备持续吸收交叉学科人才能力",
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm">
            <Leaf className="size-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              智碳联算
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              ZhiCarbon Union
            </span>
          </span>
        </a>

        <nav
          aria-label="主导航"
          className="flex gap-1 overflow-x-auto pb-1 text-sm font-medium text-slate-600 lg:gap-7 lg:overflow-visible lg:pb-0"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:px-0 lg:hover:bg-transparent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:inline-flex"
        >
          项目合作
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/official-website/images/low-carbon-industrial-park.png"
          alt="低碳工业园区、储能和能源数据流组成的官网主视觉"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100 shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-emerald-300" aria-hidden="true" />
            面向工业园区的低碳电能与调频联合市场出清系统
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            让园区低碳电能与调频收益进入同一张运营账
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-200 md:text-xl">
            智碳联算以电力市场出清、碳流核算、需求响应和负荷聚合算法为核心，
            为工业园区提供可验证、可结算、可持续升级的能源交易辅助平台。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              查看产品流程
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#validation"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              应用验证
              <FileCheck2 className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-slate-950/62 p-4 shadow-2xl backdrop-blur-xl lg:justify-self-end">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Market Clearing Console
                </p>
                <h2 className="mt-2 text-xl font-semibold">园区联合出清驾驶舱</h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                模拟运行
              </span>
            </div>

            <div className="grid gap-3">
              {[
                ["日前电能计划", "24h 负荷曲线", "78%"],
                ["调频申报容量", "储能 + 可调负荷", "83%"],
                ["碳成本激励", "节点碳势核算", "4.29%"],
              ].map(([title, label, value]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-200">{title}</span>
                    <span className="font-semibold text-emerald-200">{value}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-800">
                    <span className="block h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-3"
                >
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricBand() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 md:grid-cols-3 md:divide-x md:divide-y-0">
        {heroMetrics.map((metric) => (
          <div key={metric.label} className="py-8 md:px-8">
            <p className="text-4xl font-semibold tracking-tight text-slate-950">
              {metric.value}
            </p>
            <p className="mt-2 font-semibold text-slate-800">{metric.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Challenges() {
  return (
    <section className="bg-slate-50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            eyebrow="Industry Challenge"
            title="电力现货、辅助服务和碳约束同时进入园区经营"
            description="工业园区用电占比高、价格波动密集、低碳电能消纳和调频资源释放仍有缺口。智碳联算把这些变量统一放进一套可计算的市场模型中。"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {challengeCards.map((card) => (
              <article
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <card.icon className="mb-5 size-7 text-emerald-700" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions"
          title="从园区用电计划到市场收益结算的完整方案"
          description="以负荷聚合商为运营抓手，连接发电主体、交易中心、监管机构和园区用户，帮助园区在电能量市场与辅助服务市场中获得更清晰的决策依据。"
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutionCards.map((card, index) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/10"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <card.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{card.text}</p>
              <a
                href="#platform"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800"
              >
                查看平台模块
                <ChevronRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Product Platform
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              把市场交易出清流程做成可落地的软件工作台
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-slate-300 md:text-lg">
              平台围绕“数据接入及安全认证、市场准入核验、联合出清、需求响应、
              补偿惩罚与评价分析”构建，输出电力交易结算和园区运营建议。
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["发电企业", "电力交易中心", "园区负荷", "监管机构"].map((role) => (
                <div key={role} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <CheckCircle2 className="size-5 text-emerald-300" aria-hidden="true" />
                  <span className="font-medium text-slate-200">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="grid gap-3 sm:grid-cols-2">
              {platformSteps.map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-white/10 bg-slate-900 p-5"
                >
                  <span className="mb-6 flex size-9 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-200">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {index % 2 === 0
                      ? "形成可追溯的数据基础与模型输入。"
                      : "输出面向交易与运营的决策结果。"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section id="technology" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow="Technology"
            title="核心壁垒来自联合出清模型，而不是普通用能看板"
            description="PDF 材料中的技术重点并不是展示电量图表，而是把电能交易、调频容量、碳排责任和用户响应成本放入上下层交替求解框架。"
          />

          <div className="grid gap-4">
            {modelLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                    <layer.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{layer.title}</h3>
                    <p className="mt-3 leading-8 text-slate-600">{layer.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Validation() {
  return (
    <section id="validation" className="bg-[#eef6f3] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-emerald-950/10">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    Validation
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">模拟工业园区运行结果</h3>
                </div>
                <LineChart className="size-8 text-emerald-300" aria-hidden="true" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">综合运营成本</p>
                  <p className="mt-3 text-4xl font-semibold">-4.29%</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    通过碳排激励引导用户响应，降低园区整体交易与运营成本。
                  </p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">可调资源利用率</p>
                  <p className="mt-3 text-4xl font-semibold">&gt;=83%</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    挖掘用电侧储能与负荷响应能力，支撑调频辅助服务参与。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Project Evidence"
              title="用调研、模型开发和验收流程建立可信背书"
              description="当前阶段应诚实呈现项目验证路径，避免虚构大型商业案例。官网先展示研发和试点证据，后续再替换为正式客户案例。"
            />

            <ul className="mt-8 space-y-4">
              {validationItems.map((item) => (
                <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <FileCheck2 className="mt-0.5 size-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Team & Research"
            title="电力系统、人工智能和创新创业团队共同推进"
            description="团队来自长沙理工大学电气工程相关方向，围绕工业园区电力服务平台持续进行模型研发、调研验证和商业化路径设计。"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {teamHighlights.map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="mb-8 flex size-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-8 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-emerald-400/[0.08] p-7 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Partnership
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              面向园区、能源集团与科研场景开放合作
            </h2>
            <p className="mt-5 max-w-3xl text-pretty leading-8 text-slate-300">
              当前官网建议先承接项目展示、比赛路演和合作沟通。正式商业联系方式确定后，
              可在这里补充电话、邮箱、地址和备案信息。
            </p>
          </div>

          <div className="rounded-2xl bg-white px-7 py-5 text-slate-950 shadow-xl">
            <p className="text-sm font-semibold">正式发布前待补充</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              公司邮箱、电话、地址与备案信息
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-700 text-white">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span>
            <span className="block font-semibold text-slate-950">
              长沙智碳联算科技有限责任公司
            </span>
            <span>面向工业园区的低碳电能与调频联合市场出清系统</span>
          </span>
        </div>
        <p>© 2026 智碳联算. 当前为项目展示官网。</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <SiteHeader />
      <Hero />
      <MetricBand />
      <Challenges />
      <Solutions />
      <Platform />
      <Technology />
      <Validation />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
