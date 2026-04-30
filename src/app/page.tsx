import Image from "next/image";
import { ArrowRight, Leaf, Zap, BarChart3, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      {/* Navbar */}
      <header className="absolute top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gray-900/60 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Leaf className="text-green-400 w-8 h-8" />
          <span className="text-xl font-bold text-white tracking-wide">
            智碳联算 
            <span className="text-blue-400 ml-1">ZHICARBON</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
          <a href="#" className="hover:text-green-400 transition-colors">首页</a>
          <a href="#" className="hover:text-green-400 transition-colors">零碳园区</a>
          <a href="#" className="hover:text-green-400 transition-colors">微电网管理</a>
          <a href="#" className="hover:text-green-400 transition-colors">电力交易</a>
          <a href="#" className="hover:text-green-400 transition-colors">关于我们</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
          联系合作
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Wind Turbines and Green Energy" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Activity className="w-4 h-4" /> 
            国家“双碳”战略践行者
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            智建零碳园区 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              算赢绿色未来
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed text-balance">
            长沙智碳联算科技专注于提供低碳电能管理、调频及电力交易全栈式解决方案。赋能湖南“专精特新”企业，让零碳更经济、管理更智能。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-green-500/30">
              探索解决方案 <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all backdrop-blur-sm">
              了解智碳平台
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row justify-around items-center border border-gray-100">
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-blue-600 mb-1">50+</div>
            <div className="text-sm text-gray-500 font-medium">覆盖零碳园区</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-blue-600 mb-1">2M+</div>
            <div className="text-sm text-gray-500 font-medium">累计减排(吨)</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-blue-600 mb-1">100%</div>
            <div className="text-sm text-gray-500 font-medium">微电网绿电调度</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center py-4">
            <div className="text-4xl font-bold text-blue-600 mb-1">亿级</div>
            <div className="text-sm text-gray-500 font-medium">电力交易撮合规模</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心业务矩阵</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">打通“源、网、荷、储”，创新能源资产管理模式，服务千行百业的低碳转型。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">零碳智慧园区</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                依托AI与大模型算力，构建覆盖能源供给与终端消耗的闭环监控体系。提供从碳核算、认证到减碳规划的全流程服务。
              </p>
              <a href="#" className="font-semibold text-blue-600 inline-flex items-center gap-1 hover:gap-2 transition-all">
                查看详情 <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-green-50 text-green-600 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">低碳电能管理与微电网</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                整合分布式光伏、储能与充电桩，建设源网荷储一体化智能系统，实时追踪用电负荷并进行动态削峰填谷优化。
              </p>
              <a href="#" className="font-semibold text-green-600 inline-flex items-center gap-1 hover:gap-2 transition-all">
                查看详情 <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">电力交易与调频辅助</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                聚合并调度园区灵活性资源，作为虚拟电厂参与现货与绿电交易市场。专业电力交易核心算法，显著降低综合购电成本。
              </p>
              <a href="#" className="font-semibold text-purple-600 inline-flex items-center gap-1 hover:gap-2 transition-all">
                查看详情 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-green-500 w-6 h-6" />
              <span className="text-lg font-bold text-white tracking-wide">长沙智碳联算科技有限公司</span>
            </div>
            <p className="text-sm max-w-sm">
              深耕湖南，面向全国。致力于将前沿算法与综合能源技术深度结合，让零碳更经济，让能源更智慧。
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400">零碳装备</a></li>
              <li><a href="#" className="hover:text-green-400">园区解决方案</a></li>
              <li><a href="#" className="hover:text-green-400">绿电交易平台</a></li>
              <li><a href="#" className="hover:text-green-400">投资者关系</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>客服热线: 400-XXX-XXXX</li>
              <li>商务邮箱: contact@zhicarbon.com</li>
              <li>联系地址: 湖南省长沙市高新区XXX栋</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 长沙智碳联算科技有限公司 版权所有. 湘ICP备XXXXXX号</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">法律声明</a>
            <a href="#" className="hover:text-white">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
