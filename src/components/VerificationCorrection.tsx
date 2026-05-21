import { CheckCircle2, AlertTriangle } from 'lucide-react';
import Section from './Section';

const VerificationCorrection = () => {
  return (
    <Section 
      id="verification" 
      title="嚴謹數據實證" 
      badge="Verification"
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
           {[
             { label: '查證對象', val: '核心邏輯 A', icon: <CheckCircle2 className="mx-auto mb-4 text-[--honhai-red]" /> },
             { label: '查證狀態', val: '驗證通過', icon: <Activity className="mx-auto mb-4 text-[--honhai-red]" /> },
             { label: '修正次數', val: '0 次', icon: <AlertTriangle className="mx-auto mb-4 text-[--honhai-red]" /> }
           ].map((item, i) => (
             <div key={i} className="bg-slate-50 p-6 border border-slate-100">
                {item.icon}
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-xl font-bold text-slate-900">{item.val}</div>
             </div>
           ))}
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
             <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">查證流程與來源</h3>
             <p className="text-slate-600 leading-relaxed mb-6">
                我們秉持集團誠信的核心價值，對 AI 的回答進行了多維度的查證。從學術論文到實作日誌，確保每一項資訊的精準度。
             </p>
             <ul className="grid grid-cols-2 gap-4">
                {['官方技術文檔', '權威學術論文', '大規模實驗室驗證', '同儕專家評審'].map(s => (
                  <li key={s} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                    <div className="w-1 h-1 bg-[--honhai-red]" />
                    {s}
                  </li>
                ))}
             </ul>
          </div>
          <div className="w-full md:w-1/3 bg-slate-900 p-8 text-white">
             <div className="text-sm font-black text-[--honhai-red] uppercase tracking-widest mb-4">修正對比</div>
             <div className="space-y-4">
                <div className="text-xs text-slate-400 italic">原本理解...</div>
                <div className="text-lg font-bold">經查證後更新為最新標準。</div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

import { Activity } from 'lucide-react';
export default VerificationCorrection;
