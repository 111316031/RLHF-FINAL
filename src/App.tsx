import AlgorithmIntro from './components/AlgorithmIntro';
import AILearningRecord from './components/AILearningRecord';
import VerificationCorrection from './components/VerificationCorrection';
import VisualExplanation from './components/VisualExplanation';
import ApplicationCase from './components/ApplicationCase';
import LearningReflection from './components/LearningReflection';
import { Globe, User, Search, ArrowUpRight, Zap, Terminal } from 'lucide-react';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', label: '介紹', icon: <Terminal size={14} /> },
    { id: 'ai-record', label: '紀錄', icon: <Zap size={14} /> },
    { id: 'verification', label: '數據', icon: <Search size={14} /> },
    { id: 'visual', label: '視覺', icon: <Globe size={14} /> },
    { id: 'application', label: '實踐', icon: <ArrowUpRight size={14} /> },
    { id: 'reflection', label: '反思', icon: <User size={14} /> },
  ];

  return (
    <div className="min-h-screen">
      <div className="glow-bg" />
      
      {/* Floating Modern Header */}
      <nav className="fixed top-6 inset-x-0 z-[100] max-w-4xl mx-auto px-4">
        <div className="glass-panel h-14 rounded-full px-6 flex items-center justify-between card-shadow">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
              <Zap size={16} fill="white" />
            </div>
            <span className="font-black text-sm tracking-tighter uppercase italic">Zenith.</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-1.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="px-5 py-2 bg-indigo-600 text-white text-[11px] font-black rounded-full hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100">
            CONTACT
          </button>
        </div>
      </nav>

      <main className="relative">
        {/* Zenith Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-48 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-black tracking-widest uppercase mb-12 animate-fade-in">
            Algorithm Synthesis 2026
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tight text-slate-900 leading-[0.8] mb-16 text-reveal">
            The New <br />
            Standard.
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-slate-500 leading-relaxed font-medium mb-12 text-reveal" style={{ animationDelay: '0.2s' }}>
              We've redesigned the core of technical research. A seamless integration of AI insight and human logic.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-reveal" style={{ animationDelay: '0.4s' }}>
               <button 
                 onClick={() => scrollTo('intro')}
                 className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3 group"
               >
                 Start Exploration
                 <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
               <div className="flex items-center gap-4">
                 <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="avatar" />
                      </div>
                    ))}
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-black text-slate-900">Ethan Xuan</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Investigator</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Modular Bento Content */}
        <div className="max-w-6xl mx-auto">
          <AlgorithmIntro />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <AILearningRecord />
            <VerificationCorrection />
          </div>
          <VisualExplanation />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <ApplicationCase />
            <LearningReflection />
          </div>
        </div>
      </main>

      {/* Floating Dock Navigation (Mobile Friendly) */}
      <div className="fixed bottom-8 inset-x-0 z-[100] flex justify-center">
        <div className="glass-panel h-16 rounded-3xl p-2 flex items-center gap-1 card-shadow border-white/50">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="dock-item w-12 h-12 md:w-20 md:h-12 flex flex-col items-center justify-center rounded-2xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 group"
            >
              {item.icon}
              <span className="text-[8px] font-black uppercase mt-1 hidden md:block">{item.label}</span>
            </button>
          ))}
          <div className="w-px h-8 bg-slate-200 mx-2" />
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 text-white hover:bg-indigo-600 transition-colors"
          >
            <ArrowUpRight size={16} className="-rotate-90" />
          </button>
        </div>
      </div>

      <footer className="py-32 bg-slate-50 border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8">
            <Zap size={24} fill="white" />
          </div>
          <p className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Built for the future of research.</p>
          <div className="flex gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Security</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <p className="mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            © 2026 ZENITH SYNTHESIS. v3.0 FINAL - {new Date().toLocaleTimeString()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
