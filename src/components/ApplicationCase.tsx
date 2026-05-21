import { Zap } from 'lucide-react';
import Section from './Section';

const ApplicationCase = () => {
  return (
    <Section 
      id="application" 
      title="5. 應用案例" 
      badge="Application Case"
      subtitle="將演算法應用於實際情境，展現技術轉化為生產力的實戰價值。"
    >
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1 space-y-10">
          <div>
            <div className="inline-block bg-[--honhai-red] text-white px-4 py-1 text-xs font-black uppercase tracking-[0.2em] mb-6">
              實際應用情境
            </div>
            <h3 className="text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
              [應用名稱] <br /> <span className="text-slate-400">專題研究</span>
            </h3>
          </div>
          
          <p className="text-slate-600 leading-relaxed text-lg font-medium border-l-4 border-slate-900 pl-8">
            詳細說明此演算法在現實世界中的一個具體應用。例如：在影像辨識中，此演算法如何幫助識別特徵；或是在推薦系統中，它如何精準計算用戶偏好，進而提升轉化率。
          </p>

          <div className="grid grid-cols-2 gap-4">
             {['影像辨識', '語音辨識', '文字生成', '醫學影像', '推薦系統', '自駕車', '生成式 AI'].slice(0, 4).map(tag => (
               <div key={tag} className="flex items-center gap-3 p-5 bg-slate-50 border border-slate-100 group hover:border-[--honhai-red] transition-all">
                  <div className="w-1.5 h-1.5 bg-slate-300 group-hover:bg-[--honhai-red] transition-colors" />
                  <span className="text-sm font-bold text-slate-700">{tag}</span>
               </div>
             ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 aspect-[4/5] bg-slate-100 relative group overflow-hidden shadow-2xl shadow-slate-200">
           <img 
             src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" 
             alt="tech" 
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[--honhai-charcoal] via-transparent to-transparent opacity-60" />
           <div className="absolute bottom-10 left-10 right-10">
              <div className="w-12 h-1 bg-[--honhai-red] mb-4" />
              <p className="text-white font-bold text-sm uppercase tracking-widest leading-relaxed">
                Empowering the future through precise algorithmic logic.
              </p>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default ApplicationCase;
