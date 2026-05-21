import { Share2 } from 'lucide-react';
import Section from './Section';

const VisualExplanation = () => {
  return (
    <Section 
      id="visual" 
      title="視覺化架構分析" 
      badge="Visual Architecture"
      isAlt
    >
      <div className="flex flex-col items-center">
        <div className="w-full bg-slate-900 aspect-video md:aspect-[21/9] flex flex-col items-center justify-center border-b-8 border-[--honhai-red]">
          <Share2 size={64} className="text-slate-700 mb-6" />
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em]">Architecture Diagram</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-x border-b border-slate-200">
           {[
             { title: '數據流轉', desc: '展示系統內部的資訊流向與處理節點。' },
             { title: '邏輯層次', desc: '解構演算法的遞迴、分治或動態規劃層次。' },
             { title: '效能評估', desc: '透過圖表展現不同規模下的運算效率。' }
           ].map((item, i) => (
             <div key={i} className="p-8 border-r last:border-0 border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="text-[--honhai-red] font-black mb-4">0{i + 1}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </Section>
  );
};

export default VisualExplanation;
