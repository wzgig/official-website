"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Activity, Zap, BarChart3, Globe, ShieldCheck, Factory, Cpu, Waves } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main ref={ref} className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white overflow-hidden">
      
      {/* Decorative Global Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-40 -right-64 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
      </div>

      <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800 transition-all">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
              <Leaf className="text-slate-950 w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                智碳联算
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] mt-0.5">
                ZHICARBON
              </span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            {['首页', '零碳智慧园区', '微电网与储能', '电力交易', '关于我们'].map((item, i) => (
              <a key={i} href="#" className="text-[15px] font-medium text-slate-300 hover:text-cyan-400 transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="flex flex-row gap-6 items-center">
            <button className="hidden md:flex text-slate-400 hover:text-white transition-colors">
              <Globe className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">中 / EN</span>
            </button>
            <button className="relative bg-transparent text-white px-7 py-2.5 rounded-full text-sm font-bold overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-600 transition-transform group-hover:scale-105"></div>
              <span className="relative z-10 flex items-center gap-2">方案咨询 <ArrowRight className="w-4 h-4" /></span>
            </button>
          </div>
        </div>
      </header>

      {/* Extreme Hero Section */}
      <section className="relative w-full min-h-[100vh] flex items-center pt-20 border-b border-slate-800">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <motion.div style={{ y: yImage }} className="absolute inset-0 scale-110">
             {/* Note: In real app use downloaded images, using Unsplash direct URL here for assured visibility */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
          </motion.div>
          <div className="absolute inset-0 bg-slate-950/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          
          {/* Noise / Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbGgtdi1oLXYtaC12LWh2LWh2LWh2MWgtdjFoMnYxaC12MWgxdi1oMXYxaDN2LWgxdi1oMXYzaC0xdi1oMXYybS0yIC0xNHYtaC12MWgxdi1oMXYxaC0ydjFoLXZoMnYxaDJ2MWgtdjFzLTIgLTJ2LWh2LWgxdi1oMSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full pb-20">
          
          <div className="flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Cpu className="w-4 h-4 text-emerald-400" /> AI 赋能的智碳中枢
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-[5rem] font-black text-white leading-[1.05] mb-8 tracking-tight"
            >
              智建零碳园区<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                算赢绿色未来
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed font-light"
            >
              融合前沿算力与综合能源技术。提供贯穿源、网、荷、储的全生命周期管理及现货电力交易撮合，让“专精特新”企业的低碳转型更智能、更具回报。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <button className="relative bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                探索核心引擎
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-md">
                平台演示申请
              </button>
            </motion.div>
          </div>
          
          {/* Hero Abstract Graphic / Visual Element */}
          <div className="hidden lg:flex w-full h-[600px] relative">
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full border-[1px] border-dashed border-slate-700/50 m-10"
             ></motion.div>
             <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full border-[1px] border-slate-700 m-20"
             ></motion.div>
             
             {/* Floating cards */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
               className="absolute top-[20%] left-10 bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-5 rounded-2xl shadow-2xl">
               <p className="text-xs text-emerald-400 font-bold uppercase mb-1">系统负荷</p>
               <p className="text-2xl font-black text-white">4,120 <span className="text-sm font-medium text-slate-400">MW</span></p>
             </motion.div>
             
             <motion.div 
               initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-[30%] right-0 bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-5 rounded-2xl shadow-2xl">
               <p className="text-xs text-cyan-400 font-bold uppercase mb-1">碳排优化率</p>
               <p className="text-2xl font-black text-white">+32.5% <Activity className="w-5 h-5 inline text-cyan-500 ml-2"/></p>
             </motion.div>
             
             {/* Center Eye */}
             <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-48 h-48 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20"></div>
                   <Activity className="text-cyan-400 w-16 h-16 relative z-10" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Floating Interactive Nav / Highlights */}
      <section className="relative z-20 -mt-20 w-full px-6 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-2 flex flex-col md:flex-row overflow-hidden border border-slate-700"
        >
          {[{ icon: Factory, label: '零碳园区', sub: '光储充全案', color: 'text-emerald-400' }, { icon: Zap, label: '低碳电能', sub: '源网荷协同', color: 'text-cyan-400' }, { icon: BarChart3, label: '绿色交易', sub: '现货与微电厂', color: 'text-blue-400' }, { icon: ShieldCheck, label: '减碳认证', sub: 'CCER变现', color: 'text-purple-400' }].map((item, idx) => (
            <div key={idx} className="flex-1 group p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-700/50 rounded-2xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 shadow-inner flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className={"w-7 h-7 "} />
              </div>
              <h4 className="text-white font-bold mb-1 text-lg">{item.label}</h4>
              <p className="text-sm text-slate-400">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Rich Imagery Section: Solutions */}
      <section className="py-32 bg-slate-900 border-b border-slate-800 relative">
         <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20 grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-sm font-black text-cyan-400 tracking-widest uppercase mb-4">OUR ECOSYSTEM</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">矩阵式能源服务，<br/>算力驱动万物互联</h3>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-light max-w-lg lg:justify-self-end">
              从顶层架构规划到底层算法支撑，智碳联算科技打破传统的物理屏障，用代码重塑能源调度，用交易释放低碳红利。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
             <motion.div whileHover={{ y: -10 }} className="group relative h-[480px] rounded-3xl overflow-hidden bg-slate-800">
                <Image src="/solar.jpg" alt="Solar" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-400/50 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                    <Waves className="text-emerald-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">零碳园区底座建设</h3>
                  <p className="text-slate-300 line-clamp-2 mb-6 font-light">
                    因地制宜配置分布式光伏、新型储能与新能源车桩。打造源网荷储微电网物理基础。
                  </p>
                  <button className="self-start text-emerald-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                    探索方案 <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
             </motion.div>

             {/* Card 2 */}
             <motion.div whileHover={{ y: -10 }} className="group relative h-[480px] rounded-3xl overflow-hidden bg-slate-800">
                <Image src="/data.jpg" alt="Data CPU" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                    <Activity className="text-cyan-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">α 能源聚合算力平台</h3>
                  <p className="text-slate-300 line-clamp-2 mb-6 font-light">
                    引入AI与时序数据库。毫秒级分析海量工业设备画像，实现全自动动态削峰填谷决策。
                  </p>
                  <button className="self-start text-cyan-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                    探索方案 <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
             </motion.div>

             {/* Card 3 */}
             <motion.div whileHover={{ y: -10 }} className="group relative h-[480px] rounded-3xl overflow-hidden bg-slate-800 lg:col-span-1 md:col-span-2">
                <Image src="/trading.jpg" alt="Trading" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/50 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                    <BarChart3 className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">电力市场与碳排交易</h3>
                  <p className="text-slate-300 line-clamp-2 mb-6 font-light">
                    代理“精小特”企业作为虚拟电厂挂牌。捕捉辅助服务机制与绿电现货差价，将环保履约转化为现金收益。
                  </p>
                  <button className="self-start text-blue-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                    探索方案 <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
             </motion.div>
          </div>
         </div>
      </section>

      {/* Massive Data Banner */}
      <section className="py-24 relative overflow-hidden bg-emerald-950 flex items-center justify-center border-b border-emerald-900">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed opacity-10"></div>
         <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">从耗能大户到零碳先锋</h2>
              <p className="text-emerald-300 text-xl font-light">智碳联算，让每一吨减少的碳足迹都清晰可见。</p>
            </div>
            
            <div className="flex items-end gap-4">
                <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
                   <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">平台聚合绿电里程</p>
                   <div className="flex items-baseline gap-2">
                     <span className="text-6xl font-black text-white">1.54</span>
                     <span className="text-2xl font-bold text-slate-400">TWh</span>
                   </div>
                </div>
            </div>
         </div>
      </section>

      <footer className="bg-slate-950 pt-24 pb-12 text-slate-400 border-t border-slate-900 relative overflow-hidden">
        {/* Decorative Grid Line in Footer */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-slate-800 pb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">智碳联算</span>
            </div>
            <p className="text-sm max-w-sm mb-8 leading-relaxed font-light text-slate-300">
              立足湖南，辐射全国。我们将硬件基建与极客算力绑定，赋能“精小特”企业在数字洪流中抢占碳中和高地。
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:text-white cursor-pointer transition-colors">We</div>
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-cyan-600 hover:text-white cursor-pointer transition-colors">In</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wider">业务版图</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">零碳工业园区</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">光储充智能微网</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">SaaS联算平台</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">售电与碳交易辅助</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wider">走进智碳</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">技术愿景</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">碳讯中心</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">生态与政企联盟</a></li>
              <li><a href="#" className="hover:text-cyan-400 hover:translate-x-1 inline-block transition-transform">加入极客团队</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wider">联络中枢</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-300">
              <li className="flex flex-col"><span className="text-xs text-slate-500 mb-1">研发与运营中心</span>湖南省长沙市高新区科技引擎大厦</li>
              <li className="flex flex-col mt-4"><span className="text-xs text-slate-500 mb-1">商业接洽</span>bd@zhicarbon.com</li>
              <li className="flex flex-col mt-4"><span className="text-xs text-slate-500 mb-1">24H热线</span>400-888-0000</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500">
          <p>© 2026 长沙智碳联算科技有限公司 版权所有. <a href="#" className="hover:text-white">湘ICP备XXXXXXXX号</a></p>
          <div className="space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">数据与隐私声明</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">商业条款</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">法律顾问</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
