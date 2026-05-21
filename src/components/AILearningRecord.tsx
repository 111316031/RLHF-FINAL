import { MessageCircle, Cpu, Lightbulb } from 'lucide-react';
import Section from './Section';

const AILearningRecord = () => {
  return (
    <Section 
      id="ai-record" 
      title="2. AI 輔助學習紀錄" 
      badge="AI Assisted Learning"
      isAlt
      subtitle="透過與人工智慧的深度對話，加速技術理解並建立多維度的知識體系。"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="bg-white p-10 border border-slate-100 shadow-sm relative">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-[--honhai-red]" />
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 text-white">
                   <MessageCircle size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase">我問了 AI 什麼問題</h3>
             </div>
             <div className="p-6 bg-slate-50 border-l-4 border-slate-200 italic text-slate-600 mb-6">
                「請詳細解釋...演算法的原理，並舉例說明...」
             </div>
             <p className="text-slate-500 text-sm leading-relaxed">
                描述提問的背景與目的，說明為什麼選擇這樣的切入點來探討技術細節。
             </p>
          </div>
        </div>

        <div className="space-y-8">
           <div className="grid gap-6">
              <div className="hh-stat-card bg-slate-900 text-white border-l-[--honhai-red]">
                 <h3 className="text-xs font-black text-[--honhai-red] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Cpu size={14} /> AI 回答重點
                 </h3>
                 <ul className="space-y-3">
                    {['核心邏輯解構', '邊界條件提示', '最佳實踐建議'].map(item => (
                      <li key={item} className="text-sm font-bold flex items-center gap-3">
                         <div className="w-1 h-1 bg-[--honhai-red]" />
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-white p-8 border border-slate-100 shadow-sm">
                 <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Lightbulb size={14} className="text-[--honhai-red]" /> 學習幫助與理解
                 </h3>
                 <p className="text-slate-600 leading-relaxed text-sm">
                    這些回答如何幫助自己理解？例如：原本不懂的部分透過 AI 的類比得到了啟發，或是清楚了原本混淆的觀念，將零散的知識串聯成完整的技術地圖。
                 </p>
              </div>
           </div>
           
           <div className="h-48 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI 對話截圖預留區</span>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default AILearningRecord;
