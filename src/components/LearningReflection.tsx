import { Lightbulb, ShieldAlert, Award } from 'lucide-react';
import Section from './Section';

const LearningReflection = () => {
  return (
    <Section 
      id="reflection" 
      title="6. 學習反思" 
      badge="Learning Reflection"
      isAlt
      subtitle="總結本次學習歷程，思辨科技工具帶來的賦能與挑戰。"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="p-10 bg-white border-t-8 border-slate-900 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-slate-50 text-[--honhai-red]">
                    <Lightbulb size={24} />
                 </div>
                 <h3 className="text-xl font-black text-slate-900 uppercase">AI 對學習的幫助</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                 簡短說明 AI 如何協助您快速進入該演算法的領域。例如：提供清晰的概念對比、即時的代碼範例解釋，或是針對特定難點的解答。
              </p>
           </div>

           <div className="p-10 bg-white border-t-8 border-[--honhai-red] shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-slate-50 text-slate-400">
                    <ShieldAlert size={24} />
                 </div>
                 <h3 className="text-xl font-black text-slate-900 uppercase">AI 回答的限制</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                 描述在使用 AI 過程中發現的不足之處。例如：回答過於笼統、無法處理特定版本的語法差異，或是邏輯推導中的隱藏錯誤。
              </p>
           </div>
        </div>

        <div className="bg-[--honhai-charcoal] p-12 text-white relative overflow-hidden flex flex-col justify-center">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Award size={160} />
           </div>
           <div className="relative z-10">
              <h3 className="text-sm font-black text-[--honhai-red] uppercase tracking-[0.3em] mb-8">最終學習成果</h3>
              <p className="text-2xl md:text-3xl font-black leading-tight mb-10 tracking-tighter">
                 「我最後真正學會了什麼？」
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                 總結透過這次 AI 輔助與查證的過程，您對這個演算法產生的深刻見解。不僅是代碼的實現，更是解決問題思維的提升。
              </p>
              <div className="h-1 w-20 bg-[--honhai-red]" />
           </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-400 font-bold uppercase tracking-widest text-[10px]">
        誠信 (Integrity) · 勤奮 (Diligence) · 創新 (Innovation)
      </div>
    </Section>
  );
};

export default LearningReflection;
