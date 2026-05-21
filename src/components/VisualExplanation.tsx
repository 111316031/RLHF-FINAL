import { Image, BarChart3, Network } from 'lucide-react';
import Section from './Section';

const VisualExplanation = () => {
  return (
    <Section 
      id="visual" 
      title="4. 視覺化說明" 
      badge="Visual Explanation"
      isAlt
      subtitle="透過圖表、流程圖或架構圖，將抽象的演算法邏輯具象化，提升技術溝通的效率。"
    >
      <div className="flex flex-col items-center">
        <div className="w-full bg-slate-900 aspect-video md:aspect-[21/9] flex flex-col items-center justify-center border-b-8 border-[--honhai-red] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <Network size={80} className="text-slate-700 mb-6 group-hover:scale-110 transition-transform duration-700" />
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] relative z-10">Algorithm Architecture Diagram</p>
          <div className="absolute bottom-6 right-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            Fig 01. 演算法邏輯架構示意圖
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 w-full bg-white border-x border-b border-slate-200">
           {[
             { title: '流程圖', desc: '展示演算法的步驟邏輯。', icon: <Image size={18} /> },
             { title: '架構圖', desc: '展示系統的組成與層次。', icon: <Network size={18} /> },
             { title: '比較表', desc: '分析演算法在不同場景下的優劣。', icon: <BarChart3 size={18} /> }
           ].map((item, i) => (
             <div key={i} className="p-10 border-r last:border-0 border-slate-100 hover:bg-slate-50 transition-colors group">
                <div className="text-[--honhai-red] mb-4 group-hover:scale-110 transition-transform w-fit">{item.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="mt-8 text-slate-400 text-xs italic font-medium">
          * 請在此區塊嵌入您製作的視覺化圖表或圖片元件。
        </div>
      </div>
    </Section>
  );
};

export default VisualExplanation;
