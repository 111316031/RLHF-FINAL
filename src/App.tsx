import AlgorithmIntro from './components/AlgorithmIntro';
import AILearningRecord from './components/AILearningRecord';
import VerificationCorrection from './components/VerificationCorrection';
import VisualExplanation from './components/VisualExplanation';
import ApplicationCase from './components/ApplicationCase';
import LearningReflection from './components/LearningReflection';
import { Globe, User, Search, ChevronRight, Activity, Cpu, Briefcase } from 'lucide-react';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', label: '核心技術' },
    { id: 'ai-record', label: '學習軌跡' },
    { id: 'verification', label: '數據實證' },
    { id: 'visual', label: '視覺架構' },
    { id: 'application', label: '全球應用' },
    { id: 'reflection', label: '願景反思' },
  ];

  return (
    <div className="min-h-screen selection:bg-[--honhai-red] selection:text-white">
      {/* Hon Hai Corporate Header */}
      <header className="hh-header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-4xl font-black text-[--honhai-red] tracking-tighter">HON HAI</span>
              <div className="h-8 w-px bg-slate-200 mx-2" />
              <span className="text-lg font-bold text-slate-900 tracking-widest uppercase">Research</span>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="hh-nav-link"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 text-slate-400 hover:text-[--honhai-red] transition-colors">
              <Search size={20} />
            </button>
            <button className="hh-btn hidden sm:block">
              全球布局
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Authoritative Hero Section */}
        <section className="bg-white border-b-8 border-[--honhai-red] py-32 md:py-48">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="hh-hero-subtitle">Intelligence Beyond Boundaries</span>
                <h1 className="hh-hero-title mt-6">
                  鴻海科技集團 <br />
                  <span className="text-[--honhai-red]">2026 演算法報告</span>
                </h1>
                <p className="mt-10 text-xl text-slate-600 leading-relaxed font-medium">
                  以全球領先的製造實力為基礎，深耕演算法與智慧系統開發。這不僅是一份學習紀錄，更是我們邁向未來科技的數位資產。
                </p>
                <div className="mt-12 flex flex-wrap gap-6">
                  <button 
                    onClick={() => scrollTo('intro')}
                    className="hh-btn flex items-center gap-3"
                  >
                    進入技術專題 <ChevronRight size={18} />
                  </button>
                  <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-50 transition-all">
                    技術白皮書
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: 'Fortune Global', val: '28', unit: 'th', icon: <Briefcase /> },
                   { label: 'Revenue', val: '6.6', unit: 'TWD T', icon: <Activity /> },
                   { label: 'Technology', val: '3+3', unit: 'Strategy', icon: <Cpu /> },
                   { label: 'Innovation', val: '100', unit: '% Effort', icon: <Globe /> }
                 ].map((stat, i) => (
                   <div key={i} className="hh-stat-card">
                      <div className="text-[--honhai-red] mb-2">{stat.icon}</div>
                      <div className="text-3xl font-black text-slate-900 leading-none">
                        {stat.val}<span className="text-sm font-bold text-slate-400 ml-1">{stat.unit}</span>
                      </div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Structured Corporate Content */}
        <div className="bg-white">
          <AlgorithmIntro />
          <AILearningRecord />
          <VerificationCorrection />
          <VisualExplanation />
          <ApplicationCase />
          <LearningReflection />
        </div>
      </main>

      {/* Global Corporate Footer */}
      <footer className="bg-[--honhai-charcoal] py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <span className="text-5xl font-black text-white tracking-tighter uppercase mb-8 block">HON HAI <span className="text-[--honhai-red]">Technology Group</span></span>
              <p className="text-slate-400 max-w-lg leading-relaxed text-sm">
                鴻海科技集團為全球最大的電子代工服務商，專注於資訊、通訊、自動化設備、光電、精密機械、汽車、與消費性電子等產業。我們透過全球化的佈局與技術創新，為人類創造更美好的智慧生活。
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 border-b border-slate-700 pb-2 inline-block">技術領域</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
                <a href="#" className="hover:text-[--honhai-red] transition-colors">電動車 EV</a>
                <a href="#" className="hover:text-[--honhai-red] transition-colors">數位健康 Digital Health</a>
                <a href="#" className="hover:text-[--honhai-red] transition-colors">機器人 Robotics</a>
              </nav>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 border-b border-slate-700 pb-2 inline-block">關於我們</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
                <a href="#" className="hover:text-[--honhai-red] transition-colors">集團概況</a>
                <a href="#" className="hover:text-[--honhai-red] transition-colors">投資者關係</a>
                <a href="#" className="hover:text-[--honhai-red] transition-colors">社會責任 ESG</a>
              </nav>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">© 2026 HON HAI PRECISION INDUSTRY CO., LTD.</span>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-[--honhai-red] transition-colors cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-[--honhai-red] transition-colors cursor-pointer">
                <User size={18} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
