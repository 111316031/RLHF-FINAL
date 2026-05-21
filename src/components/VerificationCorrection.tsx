import { CheckCircle2, Search, ArrowRightLeft } from 'lucide-react';
import Section from './Section';

const VerificationCorrection = () => {
  return (
    <Section 
      id="verification" 
      title="3. 查證與修正" 
      badge="Verification & Accuracy"
      subtitle="秉持實事求是的科學精神，針對 AI 回答的關鍵內容進行嚴謹的交叉比對與實證。"
    >
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-slate-50 p-10 border border-slate-100">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 text-white">
                   <Search size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase">查證重點與確認方式</h3>
             </div>
             <p className="text-slate-700 font-bold mb-6 italic border-b border-slate-200 pb-4">
                「我選擇了 AI 回答中的一個重點：[請填寫查證內容] 進行查證。」
             </p>
             <p className="text-slate-600 leading-relaxed">
                說明如何確認該資訊是否正確。是透過查閱官方技術文檔、參考權威學術論文，還是透過實際的程式碼編譯與運行來進行驗證？請列出您的查證來源與過程。
             </p>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-[--honhai-charcoal] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ArrowRightLeft size={60} />
              </div>
              <h3 className="text-sm font-black text-[--honhai-red] uppercase tracking-widest mb-6">理解修正對比</h3>
              <div className="space-y-6 relative z-10">
                 <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">修正前</span>
                    <p className="text-sm text-slate-300 line-through decoration-red-500/50 decoration-2">原本以為該演算法在...情況下會...</p>
                 </div>
                 <div className="h-px bg-slate-800 w-full" />
                 <div>
                    <span className="text-[10px] font-black text-[--honhai-red] uppercase tracking-widest block mb-2">修正後</span>
                    <p className="text-lg font-bold text-white">後來確認最新標準應為...</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default VerificationCorrection;
