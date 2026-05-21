import { MessageSquare, Cpu } from 'lucide-react';
import Section from './Section';

const AILearningRecord = () => {
  return (
    <Section 
      id="ai-record" 
      title="AI 學習軌跡紀錄" 
      badge="AI Collaboration"
      isAlt
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[--honhai-red] text-white">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">關鍵提問</h3>
              <p className="text-slate-500 italic">「如何在大規模數據集中應用此演算法以實現零誤差？」</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed pl-14">
            我們利用 AI 的分析能力，針對技術細節進行深度探索。
          </p>
        </div>
        
        <div className="bg-slate-50 p-8 border border-slate-200">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Cpu size={14} /> AI 核心反饋
          </h3>
          <ul className="space-y-4">
            {['精準參數配置', '邊際效應分析', '資源分配優化'].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-700 font-bold border-b border-slate-200 pb-2 last:border-0">
                 <div className="w-1.5 h-1.5 bg-[--honhai-red]" />
                 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AILearningRecord;
