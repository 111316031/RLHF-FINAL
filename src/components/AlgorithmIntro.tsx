import { ShieldCheck, Cpu, PlayCircle, Globe } from 'lucide-react';
import Section from './Section';

const AlgorithmIntro = () => {
  return (
    <Section 
      id="intro" 
      title="1. 演算法介紹" 
      badge="Algorithm Introduction"
      subtitle="以精準的邏輯架構，定義技術的核心價值與運作範疇。"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-1.5 h-6 bg-[--honhai-red]" />
               <h3 className="text-xl font-black text-slate-900 uppercase">這個演算法是什麼</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg pl-5">
              請在此處用自己的話說明該演算法的定義。例如：這是一個基於...原理，旨在實現...的邏輯模型。
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-1.5 h-6 bg-[--honhai-red]" />
               <h3 className="text-xl font-black text-slate-900 uppercase">主要解決什麼問題</h3>
            </div>
            <p className="text-slate-600 leading-relaxed pl-5">
              詳細說明該演算法的核心目標，例如在面對大規模數據時的處理效率、資源分配的優化，或是特定場景下的準確度提升。
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-50 p-8 border border-slate-100">
            <h3 className="text-sm font-black text-[--honhai-red] uppercase tracking-widest mb-6 flex items-center gap-2">
              <PlayCircle size={16} /> 基本運作流程
            </h3>
            <div className="space-y-6">
              {[
                { label: '輸入數據', desc: '獲取原始資訊集與參數設定' },
                { label: '處理邏輯', desc: '執行核心運算、篩選或轉換' },
                { label: '輸出結果', desc: '產出最終分析報告或決策建議' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                   <span className="text-2xl font-black text-slate-200">0{i+1}</span>
                   <div>
                      <div className="font-bold text-slate-900">{step.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{step.desc}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[--honhai-charcoal] p-8 text-white">
            <h3 className="text-sm font-black text-[--honhai-red] uppercase tracking-widest mb-6 flex items-center gap-2">
              <Globe size={16} /> 常見應用領域
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {['數據檢索', '路徑規劃', '模式識別', '資源優化'].map(tag => (
                <div key={tag} className="text-xs font-bold border border-white/10 px-3 py-2 hover:bg-[--honhai-red] transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AlgorithmIntro;
