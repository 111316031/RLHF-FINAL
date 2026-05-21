import AlgorithmIntro from './components/AlgorithmIntro';
import AILearningRecord from './components/AILearningRecord';
import VerificationCorrection from './components/VerificationCorrection';
import VisualExplanation from './components/VisualExplanation';
import ApplicationCase from './components/ApplicationCase';
import LearningReflection from './components/LearningReflection';
import { Globe, User, Activity, Cpu, Briefcase } from 'lucide-react';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'intro', label: '1. 演算法介紹' },
    { id: 'ai-record', label: '2. AI 輔助學習紀錄' },
    { id: 'verification', label: '3. 查證與修正' },
    { id: 'visual', label: '4. 視覺化說明' },
    { id: 'application', label: '5. 應用案例' },
    { id: 'reflection', label: '6. 學習反思' },
  ];

  return (
    <div className="min-h-screen selection:bg-sky-200 selection:text-sky-900">
      {/* Light Blue Corporate Header */}
      <header className="hh-header">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-1 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-3xl md:text-4xl font-black text-[--brand-blue] tracking-tighter italic">ALGO</span>
            <div className="h-6 md:h-8 w-px bg-slate-200 mx-1 md:mx-2" />
            <span className="text-sm md:text-lg font-bold text-slate-400 tracking-widest uppercase">Report</span>
          </div>

          <nav className="flex-1 flex justify-center overflow-x-auto no-scrollbar mx-4">
            <div className="flex items-center flex-shrink-0 py-4" style={{ gap: '60px' }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="hh-nav-link text-[11px] md:text-sm font-black uppercase tracking-wide whitespace-nowrap"
                  style={{ border: 'none', background: 'none', padding: '0 10px' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-6 flex-shrink-0">
            <button className="hh-btn hidden sm:block rounded-md">
              開始探索
            </button>
          </div>
        </div>          </header>

          <main className="pt-20">
          {/* Modern Hero Section */}
          <section className="bg-white border-b border-slate-100 py-32 md:py-48">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
              <span className="hh-hero-subtitle">Technical Analysis Archive</span>
              <h1 className="hh-hero-title mt-6">
                演算法 <span className="text-[--brand-blue]">學習與實證</span> <br /> 
                技術專題報告
              </h1>
              <p className="mt-10 text-xl text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
                本報告嚴謹遵循六大任務要求，結合 AI 輔助學習、數據查證與視覺化分析，全面解構演算法的核心邏輯與應用價值。
              </p>
            </div>
          </section>
        {/* Structured Content */}
        <div className="bg-white">
          <AlgorithmIntro />
          <AILearningRecord />
          <VerificationCorrection />
          <VisualExplanation />
          <ApplicationCase />
          <LearningReflection />
        </div>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <span className="text-5xl font-black text-white tracking-tighter uppercase mb-8 block italic">ALGO <span className="text-[--brand-blue]">REPORT</span></span>
              <p className="text-slate-500 max-w-lg leading-relaxed text-sm">
                專注於演算法學習的深度報告框架。透過系統性的方法論，將複雜的邏輯轉化為清晰的見解。本專案採納了頂級企業的視覺邏輯，並嚴格對標學術與技術任務要求。
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 border-b border-slate-700 pb-2 inline-block">章節概覽</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
                <a href="#" className="hover:text-[--brand-blue] transition-colors">演算法介紹</a>
                <a href="#" className="hover:text-[--brand-blue] transition-colors">AI 學習紀錄</a>
                <a href="#" className="hover:text-[--brand-blue] transition-colors">查證與修正</a>
              </nav>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-8 border-b border-slate-700 pb-2 inline-block">資源</h4>
              <nav className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
                <a href="#" className="hover:text-[--brand-blue] transition-colors">視覺化組件</a>
                <a href="#" className="hover:text-[--brand-blue] transition-colors">應用案例庫</a>
                <a href="#" className="hover:text-[--brand-blue] transition-colors">技術反思錄</a>
              </nav>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            <span>© 2026 ALGORITHM LEARNING ARCHIVE. v4.0 BLUE EDITION.</span>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-[--brand-blue] transition-colors cursor-pointer rounded">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-[--brand-blue] transition-colors cursor-pointer rounded">
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
