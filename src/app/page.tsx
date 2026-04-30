import Image from "next/image";
import {
  Activity,
  BatteryCharging,
  CheckCircle2,
  ChevronRight,
  Cpu,
  FileCheck2,
  Gauge,
  Leaf,
  LineChart,
  Mail,
  Network,
  RadioTower,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type Capability = {
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
  { label: "产品", href: "#platform" },
  { label: "方案", href: "#solutions" },
  { label: "零碳", href: "#carbon" },
  { label: "能源", href: "#energy" },
  { label: "数字", href: "#digital" },
  { label: "应用验证", href: "#validation" },
  { label: "关于我们", href: "#about" },
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
    label: "24小时价格节点",
    note: "适配日前、日内、实时市场节奏",
  },
];

const capabilities: Capability[] = [
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

const modelLayers: Capability[] = [
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

const validationItems = [
  "2024年8月完成供电局交易侧调研",
  "2024年12月完成发电侧与企业调研",
  "2023-2025年持续开发核心模型",
  "软件工作流程通过项目验收",
];

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span
        className={`flex size-10 items-center justify-center rounded-full border ${
          light ? "border-white/55 text-white" : "border-emerald-800 text-emerald-800"
        }`}
      >
        <Leaf className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-semibold tracking-tight">智碳联算</span>
        <span
          className={`mt-1 block text-[11px] font-medium uppercase tracking-[0.32em] ${
            light ? "text-white/78" : "text-slate-500"
          }`}
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
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-6 lg:px-16">
        <LogoMark light />
        <nav
          aria-label="主导航"
          className="hidden items-center gap-8 text-sm font-medium text-white/88 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 text-white/85 lg:flex">
          <a
            href="#contact"
            aria-label="联系合作"
            className="rounded-full border border-white/30 p-2.5 transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-emerald-950 text-white">
      <Image
        src="/official-website/images/zhicarbon-eco-hero.png"
        alt="森林河谷、远处风机和能源数据流组成的智碳联算官网首屏视觉"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/58 via-black/18 to-black/58" />
      <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-black/55 to-transparent" />

      <Header />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-8 rounded-full border border-white/28 bg-white/8 px-5 py-2 text-sm font-medium tracking-[0.24em] text-white/88 backdrop-blur">
          面向工业园区的低碳电能与调频联合市场出清系统
        </p>
        <h1 className="text-balance text-6xl font-semibold tracking-tight md:text-8xl">
          智碳联算
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-white/86 md:text-2xl md:leading-10">
          让园区零碳运营更可计算，让低碳电能、调频资源与碳成本进入同一张经营账。
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-8 hidden px-6 lg:block">
        <div className="mx-auto grid max-w-5xl grid-cols-3 border-y border-white/28 bg-black/18 text-white backdrop-blur-md">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="border-r border-white/20 px-8 py-5 last:border-r-0">
              <p className="text-3xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-sm text-white/78">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CarbonIntro() {
  return (
    <section id="carbon" className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Carbon Neutral Operation"
          title="让零碳园区更经济，也更可验证"
          description="金风科技官网的零碳叙事强调经济性和场景落地。智碳联算的差异化，是把园区低碳电能、调频辅助服务、碳流核算和需求响应放进同一套市场模型。"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {heroMetrics.map((metric) => (
            <article key={metric.label} className="border-t border-slate-200 pt-8">
              <p className="text-5xl font-semibold tracking-tight text-emerald-800">{metric.value}</p>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{metric.label}</h3>
              <p className="mt-3 leading-7 text-slate-600">{metric.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="bg-[#f4f8f5] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
              Solutions
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              三类减碳能力，一套市场出清平台
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">
              首屏向金风式大图靠拢，内容区保留我们的技术真实度：用模型把源、网、荷、储、碳和交易连接起来。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
                <item.icon className="mb-9 size-8 text-emerald-700" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
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
          <div className="relative min-h-[520px] overflow-hidden bg-emerald-950">
            <Image
              src="/official-website/images/low-carbon-industrial-park.png"
              alt="低碳工业园区、储能和电力设施"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/72 via-black/18 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/72">
                Industrial Park Energy
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                从耗能园区到可调资源池
              </h2>
            </div>
          </div>

          <div id="platform">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">
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
                <div key={step} className="grid grid-cols-[4rem_1fr] border-b border-slate-200 py-5 last:border-b-0">
                  <span className="text-sm font-semibold text-emerald-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-lg font-semibold text-slate-950">{step}</span>
                    <ChevronRight className="size-5 text-slate-400" aria-hidden="true" />
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
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Digital Platform
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              数字化不是看板，而是自动出清和交易控制
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-slate-300">
              参考金风数字能源页面的“感知、预测、策略、控制”表达，我们把它落到园区电能与调频联合出清：从数据准备到模型结果，形成可审计的决策链路。
            </p>
          </div>

          <div className="grid gap-4">
            {modelLayers.map((item) => (
              <article key={item.title} className="border border-white/12 bg-white/[0.04] p-7">
                <div className="flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-400/14 text-emerald-200">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
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

function Validation() {
  return (
    <section id="validation" className="bg-[#eef6f3] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Validation"
          title="用调研、模型和验收建立项目可信度"
          description="当前阶段先展示真实研发与验证路径，避免虚构大型商业客户。后续可以把这里升级为正式园区案例库。"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-white p-8 shadow-sm">
            <LineChart className="mb-10 size-10 text-emerald-700" aria-hidden="true" />
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
                  &gt;=83%
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
                <FileCheck2 className="mb-8 size-8 text-emerald-700" aria-hidden="true" />
                <p className="text-lg font-semibold leading-8 text-slate-950">{item}</p>
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
              {[
                "联合出清模型",
                "碳流核算算法",
                "需求响应机制",
                "调频辅助服务",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-slate-200 pt-5">
                  <CheckCircle2 className="size-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span className="font-semibold text-slate-950">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-emerald-950 px-5 py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">
              Partnership
            </p>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              面向园区、能源集团与科研场景开放合作
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-emerald-50/78">
              正式商业联系方式确定后，可在这里补充电话、邮箱、地址和备案信息。当前版本先承接项目展示、比赛路演和合作沟通。
            </p>
          </div>
          <div className="border border-white/18 p-6">
            <p className="text-sm font-semibold text-white">待补充</p>
            <p className="mt-2 leading-7 text-emerald-50/72">
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
    <footer className="bg-[#081a14] px-5 py-10 text-white/62">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <LogoMark light />
        <p>© 2026 长沙智碳联算科技有限责任公司. 当前为项目展示官网。</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Hero />
      <CarbonIntro />
      <Solutions />
      <EnergyPlatform />
      <DigitalModel />
      <Validation />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
