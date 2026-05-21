import { ShieldCheck, Zap, Globe } from 'lucide-react';
import Section from './Section';

const AlgorithmIntro = () => {
  return (
    <Section 
      id="intro" 
      title="核心技術介紹" 
      badge="Core Technology"
      subtitle="深耕演算法領域，建立穩固的技術基石與競爭優勢。"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-[--honhai-red] pl-4 mb-4">演算法定義與範疇</h3>
            <p className="text-slate-600 leading-relaxed">
              在此處詳細描述該演算法。身為全球科技領先者，我們不僅關注理論，更關注其在大規模製造與數據處理中的實際效能。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-[--honhai-red] pl-4 mb-4">核心挑戰與解決方案</h3>
            <p className="text-slate-600 leading-relaxed">
              說明此技術如何解決複雜的工業問題。透過優化邏輯，我們實現了更低的延遲與更高的精準度。
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="bg-slate-50 p-8 border border-slate-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <ShieldCheck size={80} />
            </div>
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
              技術運作流程
            </h3>
            <div className="space-y-4">
              {['數據輸入', '邏輯轉換', '結果輸出'].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[--honhai-red] text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
             <div className="flex-1 bg-[--honhai-charcoal] p-6 text-white">
                <Zap size={24} className="text-[--honhai-red] mb-4" />
                <div className="text-sm font-bold uppercase tracking-widest">高效能處理</div>
             </div>
             <div className="flex-1 bg-slate-100 p-6 text-slate-900 border border-slate-200">
                <Globe size={24} className="text-[--honhai-red] mb-4" />
                <div className="text-sm font-bold uppercase tracking-widest">全球化部署</div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AlgorithmIntro;
