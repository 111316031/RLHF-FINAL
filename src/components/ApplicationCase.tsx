import { Zap, ExternalLink } from 'lucide-react';
import Section from './Section';

const ApplicationCase = () => {
  return (
    <Section 
      id="application" 
      title="全球應用實踐" 
      badge="Global Impact"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="inline-block bg-slate-900 text-white px-4 py-1 text-xs font-black uppercase tracking-[0.2em]">
            工業 4.0 案例研究
          </div>
          <h3 className="text-3xl font-black text-slate-900 leading-tight">
            智慧工廠中的 <br /> <span className="text-[--honhai-red]">自動化調度系統</span>
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            我們將此演算法應用於全球各地的智慧工廠中。透過精準的邏輯運算，實現了物流機器人的最優路徑規劃，將生產效率提升了 35%。
          </p>
          <div className="grid grid-cols-2 gap-6">
             {['影像辨識', '語音辨識', '文字生成', '醫學影像'].map(tag => (
               <div key={tag} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 font-bold text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[--honhai-red]" />
                  {tag}
               </div>
             ))}
          </div>
          <button className="flex items-center gap-2 text-[--honhai-red] font-black uppercase tracking-widest text-xs group">
            查看詳細技術報告 <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="w-full lg:w-1/2 aspect-square bg-slate-100 relative group overflow-hidden">
           <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" alt="factory" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Zap size={64} className="text-white opacity-20" />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default ApplicationCase;
