import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Cpu,
  Factory,
  FileCheck2,
  Gauge,
  GraduationCap,
  Handshake,
  Landmark,
  Leaf,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  Network,
  Newspaper,
  Phone,
  RadioTower,
  ServerCog,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const basePath = "/official-website";

type NavItem = {
  label: string;
  href: string;
};

type IconCard = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  text: string;
};

type Metric = {
  value: string;
  label: string;
  note: string;
};

const navItems: NavItem[] = [
  { label: "产品", href: "#product" },
  { label: "方案", href: "#solutions" },
  { label: "场景", href: "#scenarios" },
  { label: "案例", href: "#cases" },
  { label: "技术", href: "#digital" },
  { label: "可信交付", href: "#trust" },
  { label: "动态", href: "#insights" },
  { label: "关于", href: "#about" },
];

const heroMetrics: Metric[] = [
  {
    value: "4.29%",
    label: "综合运营成本降幅",
    note: "来自项目模拟运行与验收材料",
  },
  {
    value: "≥83%",
    label: "可调资源利用率",
    note: "面向园区负荷聚合与调频响应",
  },
  {
    value: "96",
    label: "24小时价格节点",
    note: "适配日前、日内、实时市场节奏",
  },
  {
    value: "8",
    label: "核心业务流程",
    note: "覆盖准入、出清、响应、结算与评价",
  },
];

const productModules = [
  "市场准入核验",
  "电能-调频联合出清",
  "碳流核算与责任分摊",
  "LA需求响应建模",
  "补偿惩罚与结算报表",
  "市场行为评价与风险预警",
];

const capabilities: IconCard[] = [
  {
    icon: Gauge,
    kicker: "Demand",
    title: "负荷计划优化",
    text: "把园区24小时用电计划、分时电价和用户响应约束放入统一模型，辅助形成更稳健的用能策略。",
  },
  {
    icon: RadioTower,
    kicker: "Frequency",
    title: "调频资源聚合",
    text: "挖掘储能、可调负荷和需求响应能力，将用电侧弹性转化为可申报、可评价的辅助服务资源。",
  },
  {
    icon: Leaf,
    kicker: "Carbon",
    title: "碳流核算激励",
    text: "基于节点碳势、支路碳流和用户碳排责任，建立电量、调频和碳成本联动的低碳激励机制。",
  },
  {
    icon: Cpu,
    kicker: "Clearing",
    title: "联合市场出清",
    text: "融合电能量市场、调频市场、碳成本与需求响应，输出中标容量、价格和主体出力计划。",
  },
];

const audienceCards: IconCard[] = [
  {
    icon: Factory,
    kicker: "Park Operator",
    title: "工业园区与企业集群",
    text: "适用于用电负荷集中、分时电价敏感、具备储能或可调负荷资源的园区场景。",
  },
  {
    icon: Landmark,
    kicker: "Government",
    title: "园区管委会与地方平台",
    text: "为零碳园区建设、能源低碳转型评估和示范项目汇报提供可量化的数据支撑。",
  },
  {
    icon: Building2,
    kicker: "Aggregator",
    title: "负荷聚合商与售电公司",
    text: "把分散用户侧资源聚合为可申报、可结算、可评价的辅助服务能力。",
  },
  {
    icon: Handshake,
    kicker: "Energy Group",
    title: "能源集团与储能运营方",
    text: "连接发电侧、交易侧和用电侧，提升储能调度、现货交易和调频参与的协同效率。",
  },
];

const workflow = [
  "数据接入",
  "市场准入核验",
  "碳流率计算",
  "联合市场出清",
  "响应量返回",
  "补偿惩罚",
  "行为评价",
  "结算报表",
];

const modelLayers: IconCard[] = [
  {
    icon: Network,
    kicker: "Carbon Flow",
    title: "电力系统碳排放流模型",
    text: "建立负荷分布、机组注入和线路潮流矩阵，计算节点碳势、支路碳流和系统碳排放量。",
  },
  {
    icon: Activity,
    kicker: "Market Model",
    title: "电能-调频联合出清模型",
    text: "在发电主体、负荷聚合商和系统调频需求之间协同优化交易成本、调频成本和碳排成本。",
  },
  {
    icon: BatteryCharging,
    kicker: "Response",
    title: "LA 需求响应模型",
    text: "以碳排放责任为激励，引导用户削峰填谷并更新响应后的负荷需求曲线。",
  },
];

const caseStudies = [
  {
    type: "示范测算样板",
    title: "湖南装备制造园区用能协同",
    result: "分时电价下形成储能充放电与可调负荷组合策略",
    details: ["用电计划滚动优化", "调频容量可申报测算", "碳排责任到户分摊"],
  },
  {
    type: "平台试运行场景",
    title: "专精特新企业集群辅助服务参与",
    result: "将多企业弹性负荷聚合为可评价的响应资源池",
    details: ["用户响应基线建立", "补偿惩罚规则联动", "行为评价报表"],
  },
  {
    type: "政府汇报场景",
    title: "零碳园区建设成效量化",
    result: "以成本、碳排、可调资源利用率支撑园区低碳转型汇报",
    details: ["减碳路径测算", "运营指标看板", "项目验收材料支撑"],
  },
];

const trustItems: IconCard[] = [
  {
    icon: ShieldCheck,
    kicker: "Governance",
    title: "数据安全边界",
    text: "按园区、企业、设备和交易主体分层管理数据，敏感字段可脱敏接入，支撑后续私有化部署。",
  },
  {
    icon: BadgeCheck,
    kicker: "Explainability",
    title: "算法结果可解释",
    text: "每次出清结果都对应负荷、价格、碳流和约束条件，方便复核、汇报和迭代参数。",
  },
  {
    icon: ClipboardCheck,
    kicker: "Delivery",
    title: "交付流程可验收",
    text: "从资源盘点、模型校准到试运行报表形成闭环，避免官网只讲概念而缺少落地路径。",
  },
  {
    icon: LockKeyhole,
    kicker: "Compliance",
    title: "交易合规留痕",
    text: "围绕市场准入、申报容量、响应量、补偿惩罚和结算报表保留过程记录，降低业务解释成本。",
  },
];

const validationItems = [
  "2024年8月完成供电局交易侧调研",
  "2024年12月完成发电侧与企业调研",
  "2023-2025年持续开发核心模型",
  "软件工作流程通过项目验收",
];

const researchProofs: IconCard[] = [
  {
    icon: GraduationCap,
    kicker: "Team",
    title: "电力系统交叉团队",
    text: "团队围绕工业园区电力服务平台持续开展算法研发、调研验证和商业化路径设计。",
  },
  {
    icon: FileCheck2,
    kicker: "Research",
    title: "论文与专利布局",
    text: "围绕联合出清、碳流核算和调频响应形成研究积累，为产品算法提供技术底座。",
  },
  {
    icon: ServerCog,
    kicker: "Platform",
    title: "软件工作流沉淀",
    text: "将市场准入、联合出清、需求响应、结算报表沉淀为可演示、可扩展的平台模块。",
  },
];

const insightItems = [
  {
    tag: "双碳政策",
    title: "零碳园区从展示工程走向经营工程",
    text: "后续内容可围绕园区碳核算、绿电消纳和低碳运营指标做持续更新，增强官网活跃度。",
  },
  {
    tag: "电力市场",
    title: "现货交易与辅助服务正在打开用电侧价值",
    text: "以短文章解释调频、需求响应、负荷聚合等术语，让政府和园区客户更快理解方案价值。",
  },
  {
    tag: "产品动态",
    title: "从模型验证到试运行平台的版本演进",
    text: "将研发进展、调研纪要和验收节点转化为动态内容，补足公司官网的信任更新机制。",
  },
];

const cooperationSteps = [
  {
    title: "园区资源盘点",
    text: "梳理园区负荷曲线、储能资源、用电计划和市场参与边界。",
  },
  {
    title: "数据接入与模型定制",
    text: "完成数据接入、安全认证、模型参数校准和业务流程配置。",
  },
  {
    title: "模拟出清与收益评估",
    text: "输出成本、收益、碳排和可调资源利用率的模拟测算结果。",
  },
  {
    title: "平台试运行与报表交付",
    text: "形成试运行报表、交易辅助建议和后续迭代计划。",
  },
];

const faqs = [
  {
    question: "官网是否需要真实客户 Logo？",
    answer:
      "当前阶段建议先使用“示范测算样板”和“验证路径”表达，不虚构客户。等拿到授权后，再替换为正式客户 Logo 与案例详情。",
  },
  {
    question: "产品看起来像咨询服务还是软件平台？",
    answer:
      "页面已把产品定位收束为低碳电能、调频资源和碳流核算的联合出清平台，同时保留咨询式落地流程，便于早期项目转化。",
  },
  {
    question: "后续最值得补的内容是什么？",
    answer:
      "优先补充平台界面截图、案例授权材料、资质证书图片和政策解读文章，这些内容最能提升公司官网的可信度。",
  },
];

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className="flex min-w-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
    >
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-full border ${
          light ? "border-white/55 text-white" : "border-teal-800 text-teal-800"
        }`}
      >
        <Leaf className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 leading-none">
        <span className="block truncate text-lg font-semibold tracking-tight">
          智碳联算
        </span>
        <span
          className={`mt-1 block truncate text-[11px] font-medium uppercase tracking-[0.28em] ${
            light ? "text-white/78" : "text-slate-500"
          }`}
          translate="no"
        >
          ZhiCarbon Union
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto max-w-[1680px] px-5 py-5 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between gap-5">
          <LogoMark light />
          <nav
            aria-label="主导航"
            className="hidden items-center gap-7 text-sm font-medium text-white/88 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/35 px-4 py-2 text-sm font-semibold text-white/92 transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Mail className="size-4" aria-hidden="true" />
            合作咨询
          </a>
        </div>

        <nav
          aria-label="移动端导航"
          className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm font-medium text-white/84 lg:hidden"
        >
          {navItems.slice(0, 6).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 border border-white/20 bg-black/12 px-3 py-2 backdrop-blur transition-colors hover:border-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <p
        className={`mb-5 text-sm font-semibold uppercase tracking-[0.24em] ${
          light ? "text-cyan-200" : "text-teal-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-4xl font-semibold tracking-tight md:text-6xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-3xl text-pretty text-lg leading-8 ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-200" : "text-slate-600"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[88svh] overflow-hidden bg-[#07221d] px-5 pt-36 pb-16 text-white sm:pt-40"
    >
      <Image
        src={`${basePath}/images/zhicarbon-eco-hero.png`}
        alt="森林河谷、远处风机和能源数据流组成的智碳联算官网首屏视觉"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(5,34,30,0.2)_42%,rgba(2,15,23,0.78))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-black/70 to-transparent" />

      <Header />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_0.56fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-7 inline-flex max-w-full border border-white/28 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/88 backdrop-blur sm:text-sm">
            低碳电能 · 调频资源 · 碳流核算 · 联合出清
          </p>
          <h1 className="text-balance text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            智碳联算
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/88 md:text-2xl md:leading-10">
            面向工业园区的低碳电力服务平台，让零碳运营更可计算，让调频资源、碳成本和交易策略进入同一张经营账。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              预约方案沟通
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              查看解决方案
              <ChevronRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border border-white/20 bg-black/22 p-5 backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            What Was Missing
          </p>
          <p className="mt-3 text-2xl font-semibold leading-9">
            公司官网需要更强的可信背书、案例路径、动态内容和明确转化入口。
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px bg-white/18 text-sm text-white/78">
            {["案例样板", "资质合规", "政策动态", "FAQ答疑"].map((item) => (
              <div key={item} className="bg-black/18 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section aria-label="核心验证指标" className="bg-white px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {heroMetrics.map((metric) => (
          <article key={metric.label} className="bg-white p-6">
            <p className="text-4xl font-semibold tracking-tight text-teal-800">
              {metric.value}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-slate-950">{metric.label}</h2>
            <p className="mt-2 leading-7 text-slate-600">{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CarbonIntro() {
  return (
    <section id="carbon" className="bg-[#f7fbf8] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Carbon Neutral Operation"
          title="让零碳园区更经济，也更可验证"
          description="零碳园区建设不能停留在形象展示。智碳联算把低碳电能、调频辅助服务、碳流核算和需求响应放进同一套市场模型，让减碳收益可计算、可追踪、可复盘。"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "看得见的碳",
              text: "用节点碳势、支路碳流和用户碳排责任把碳排影响拆到可解释的业务颗粒度。",
            },
            {
              title: "算得清的账",
              text: "把电价、调频补偿、碳成本和响应成本统一进出清模型，输出可比较的经营方案。",
            },
            {
              title: "落得下的平台",
              text: "从调研、测算到试运行形成可验收工作流，为政府汇报和园区运营提供数据底座。",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-slate-200 pt-8">
              <Sparkles className="mb-8 size-7 text-cyan-700" aria-hidden="true" />
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSuite() {
  return (
    <section id="product" className="bg-[#071b20] px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Product System
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              不只展示数据，而是输出可执行的市场策略
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-200">
              智碳联算的产品核心不是普通能耗看板，而是面向园区交易、调频和碳成本的联合决策系统。
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {productModules.map((module) => (
                <div key={module} className="border border-white/14 px-5 py-4">
                  <CheckCircle2 className="mb-5 size-5 text-cyan-200" aria-hidden="true" />
                  <p className="font-semibold text-white">{module}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-teal-950">
            <Image
              src={`${basePath}/images/energy-control-room.png`}
              alt="能源运营控制中心与数字化平台界面"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            <div className="absolute right-0 bottom-0 left-0 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                Energy Operation Console
              </p>
              <p className="mt-3 max-w-xl text-2xl font-semibold leading-9">
                把园区负荷、储能、碳流和交易报价统一到一套运营中枢。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section id="scenarios" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Applicable Scenarios"
          title="服务园区低碳转型中的多方参与者"
          description="面向政府园区、企业集群、负荷聚合商与能源运营方，提供从模型测算到平台试运行的低碳电力服务能力。"
        />

        <div className="mt-16 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {audienceCards.map((item) => (
            <article key={item.title} className="bg-white p-7">
              <item.icon className="mb-10 size-8 text-teal-700" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                {item.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-[#eef7f5] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionTitle
            eyebrow="Solutions"
            title="三类减碳能力，一套市场出清平台"
            description="从园区用电计划、储能与可调负荷，到碳流核算和交易出清，形成一条可解释的低碳经营链路。"
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="bg-white p-7 shadow-sm transition-transform hover:-translate-y-1"
              >
                <item.icon className="mb-9 size-8 text-teal-700" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergyPlatform() {
  return (
    <section id="energy" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden bg-teal-950">
            <Image
              src={`${basePath}/images/low-carbon-industrial-park.png`}
              alt="低碳工业园区、储能和电力设施"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                Industrial Park Energy
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                从耗能园区到可调资源池
              </h2>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              Platform Workflow
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              把交易流程做成可落地的软件工作台
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">
              平台围绕市场准入、联合出清、需求响应、补偿惩罚和评价分析构建，输出电力交易结算与园区运营建议。
            </p>

            <div className="mt-10 space-y-0 border-y border-slate-200">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[4rem_1fr] border-b border-slate-200 py-5 last:border-b-0"
                >
                  <span className="text-sm font-semibold text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-w-0 items-center justify-between gap-6">
                    <span className="min-w-0 text-lg font-semibold text-slate-950">
                      {step}
                    </span>
                    <ChevronRight className="size-5 shrink-0 text-slate-400" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DigitalModel() {
  return (
    <section id="digital" className="bg-slate-950 px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Digital Platform"
            title="数字化不是看板，而是自动出清和交易控制"
            description="从感知、预测、策略到控制，平台将园区电能与调频联合出清落到可审计的决策链路中。"
            align="left"
            light
          />

          <div className="grid gap-4">
            {modelLayers.map((item) => (
              <article key={item.title} className="border border-white/12 bg-white/[0.04] p-7">
                <div className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cyan-300/14 text-cyan-100">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {item.kicker}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
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

function Cases() {
  return (
    <section id="cases" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Cases"
            title="先用可信样板替代空泛客户墙"
            description="官网早期最容易缺少真实案例。这里用示范测算、试运行场景和政府汇报场景说明可落地路径，避免虚构客户背书。"
            align="left"
          />

          <div className="grid gap-5">
            {caseStudies.map((item, index) => (
              <article key={item.title} className="border-l-2 border-teal-700 bg-[#f8faf9] p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                      {item.type}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-5xl font-semibold tracking-tight text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-lg leading-8 text-slate-700">{item.result}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="border border-teal-900/15 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustDelivery() {
  return (
    <section id="trust" className="bg-[#0a2a33] px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Trust & Delivery"
          title="补齐公司官网最需要的可信交付表达"
          description="政府、园区和能源客户不仅看视觉，也看数据边界、算法解释、验收路径和合规留痕。官网需要把这些能力前置表达。"
          light
        />

        <div className="mt-16 grid gap-px bg-white/14 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <article key={item.title} className="bg-[#0a2a33] p-7">
              <item.icon className="mb-10 size-8 text-cyan-200" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {item.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Validation() {
  return (
    <section id="validation" className="bg-[#eef7f5] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Validation"
          title="用调研、模型和验收建立项目可信度"
          description="当前阶段先展示真实研发与验证路径，避免虚构大型商业客户。后续可把这里升级为正式园区案例库。"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-white p-8 shadow-sm">
            <LineChart className="mb-10 size-10 text-teal-700" aria-hidden="true" />
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">综合运营成本</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">
                  -4.29%
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  通过碳排激励引导用户响应，降低园区整体交易与运营成本。
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">可调资源利用率</p>
                <p className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">
                  ≥83%
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  挖掘用电侧储能与负荷响应能力，支撑调频辅助服务参与。
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {validationItems.map((item) => (
              <article key={item} className="bg-white p-6 shadow-sm">
                <FileCheck2 className="mb-8 size-8 text-teal-700" aria-hidden="true" />
                <p className="text-lg font-semibold leading-8 text-slate-950">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchProof() {
  return (
    <section className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle
            eyebrow="Research Foundation"
            title="用科研模型支撑商业场景落地"
            description="面向电力现货、辅助服务和碳排责任协同优化，团队持续把论文模型、调研数据和软件流程转化为可交付的平台能力。"
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {researchProofs.map((item) => (
              <article key={item.title} className="border-t border-slate-200 pt-8">
                <item.icon className="mb-10 size-8 text-teal-700" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                  {item.kicker}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="bg-[#f7fbf8] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionTitle
            eyebrow="Insights"
            title="官网还需要持续更新的政策与动态入口"
            description="B2B 官网不能只是一张静态名片。政策解读、市场规则和产品动态能持续证明公司在行业现场。"
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {insightItems.map((item) => (
              <article key={item.title} className="bg-white p-7 shadow-sm">
                <Newspaper className="mb-10 size-8 text-teal-700" aria-hidden="true" />
                <p className="text-sm font-semibold text-cyan-700">{item.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <LogoMark />
            <h2 className="mt-12 text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              以电力系统算法服务园区绿色经营
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-9 text-slate-600">
            <p>
              智碳联算由长沙理工大学电气工程与人工智能交叉团队推进，围绕工业园区电力服务平台持续进行模型研发、调研验证和商业化路径设计。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["联合出清模型", "碳流核算算法", "需求响应机制", "调频辅助服务"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-slate-200 pt-5">
                    <CheckCircle2 className="size-5 shrink-0 text-teal-700" aria-hidden="true" />
                    <span className="font-semibold text-slate-950">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cooperation() {
  return (
    <section className="bg-[#eef7f5] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Cooperation Path"
          title="从园区资源盘点到平台试运行"
          description="先用数据和模拟出清证明价值，再逐步进入定制模型、试运行与持续运维，降低园区低碳电力服务的落地成本。"
        />

        <div className="mt-16 grid gap-px bg-teal-900/16 md:grid-cols-4">
          {cooperationSteps.map((step, index) => (
            <article key={step.title} className="bg-[#eef7f5] p-7">
              <p className="text-sm font-semibold text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionTitle
            eyebrow="FAQ"
            title="把访客最关心的问题提前回答"
            description="新增 FAQ 能降低沟通门槛，也能让早期官网在没有大量客户案例时显得更坦诚、更专业。"
            align="left"
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="border border-slate-200 p-6">
                <div className="flex gap-4">
                  <CircleHelp className="mt-1 size-6 shrink-0 text-teal-700" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
                    <p className="mt-3 leading-8 text-slate-600">{item.answer}</p>
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

function Contact() {
  return (
    <section id="contact" className="bg-[#06221c] px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Partnership
            </p>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              面向园区、能源集团与科研场景开放合作
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200">
              欢迎与我们联系，共同探索工业园区低碳运营的更多可能。
            </p>
          </div>
          <div className="border border-white/18 p-6">
            <p className="mb-5 text-lg font-semibold text-white">联系我们</p>
            <div className="space-y-4 text-slate-200">
              <p className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-cyan-200" aria-hidden="true" />
                <span>
                  <strong className="text-white">电话：</strong>
                  19074917487
                </span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-cyan-200" aria-hidden="true" />
                <span>
                  <strong className="text-white">邮箱：</strong>
                  qqiuqiuhua@gmail.com
                </span>
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-cyan-200" aria-hidden="true" />
                <span>
                  <strong className="text-white">地址：</strong>
                  长沙市天心区长沙理工大学云塘校区工程训练中心210室
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#071b20] px-5 py-10 text-white/62">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <LogoMark light />
        <div className="text-center md:text-right">
          <p>© 2026 长沙智碳联算科技有限责任公司.</p>
          <p className="mt-2 text-white/40">统一社会信用代码：91430103MAK3K4LG0X</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] bg-white px-4 py-3 text-sm font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        跳至主要内容
      </a>
      <main id="main-content" className="min-h-screen overflow-x-hidden bg-white text-slate-950">
        <Hero />
        <ProofStrip />
        <CarbonIntro />
        <ProductSuite />
        <Scenarios />
        <Solutions />
        <EnergyPlatform />
        <DigitalModel />
        <Cases />
        <TrustDelivery />
        <Validation />
        <ResearchProof />
        <Insights />
        <About />
        <Cooperation />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
