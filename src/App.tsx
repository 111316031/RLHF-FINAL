import AlgorithmIntro from './components/AlgorithmIntro';
import AILearningRecord from './components/AILearningRecord';
import VerificationCorrection from './components/VerificationCorrection';
import VisualExplanation from './components/VisualExplanation';
import ApplicationCase from './components/ApplicationCase';
import LearningReflection from './components/LearningReflection';
import { Code, Globe, ChevronRight } from 'lucide-react';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', label: '演算法介紹' },
    { id: 'ai-record', label: '學習紀錄' },
    { id: 'verification', label: '查證與修正' },
    { id: 'visual', label: '視覺化說明' },
    { id: 'application', label: '應用案例' },
    { id: 'reflection', label: '學習反思' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
              <Code size={22} />
            </div>
            <span className="font-black text-2xl tracking-tighter text-slate-900">
              ALGO<span className="text-indigo-600">LAB</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 flex items-center gap-2 group">
            聯繫開發者
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                2026 演算法分析報告
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
                解構演算法的<br />
                <span className="section-title-gradient">智慧核心</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
                這不僅是一份報告，更是一次結合 AI 與人類直覺的深度探索。透過視覺化與實證，揭開代碼背後的數學美學。
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollTo('intro')}
                  className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2"
                >
                  開始探索之旅
                  <ChevronRight size={20} />
                </button>
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="avatar" />
                    </div>
                  ))}
                  <span className="pl-6 text-sm font-bold text-slate-400">+1.2k 學習者已加入</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-50" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-100 rounded-full blur-[80px] opacity-40" />
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto px-6 pb-32">
          <AlgorithmIntro />
          <AILearningRecord />
          <VerificationCorrection />
          <VisualExplanation />
          <ApplicationCase />
          <LearningReflection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Code size={22} />
                </div>
                <span className="font-black text-2xl tracking-tighter">ALGO<span className="text-indigo-400">LAB</span></span>
              </div>
              <p className="text-slate-400 max-w-xs leading-relaxed">
                致力於讓演算法學習變得更直觀、更有趣、更具啟發性。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">快速連結</h4>
              <div className="grid gap-4 text-slate-400 text-sm">
                <a href="#" className="hover:text-indigo-400 transition-colors">演算法介紹</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">學習紀錄</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">視覺化展示</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">追蹤我們</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                  <Code size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© 2026 ALGOLAB Framework. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">隱私政策</a>
              <a href="#" className="hover:text-white transition-colors">使用條款</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
