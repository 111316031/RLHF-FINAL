import { Target, Award } from 'lucide-react';
import Section from './Section';

const LearningReflection = () => {
  return (
    <Section 
      id="reflection" 
      title="願景與學習反思" 
      badge="Future Vision"
      isAlt
    >
      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-10 bg-white border-t-4 border-[--honhai-red] shadow-sm">
             <div className="flex items-center gap-4 mb-6">
                <Target className="text-[--honhai-red]" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">AI 輔助的價值與侷限</h3>
             </div>
             <p className="text-slate-600 leading-relaxed">
                AI 縮短了我們理解複雜代碼的時間，但也存在著資訊過時的風險。透過「自主實驗 + AI 驗證」，我們建立了更穩健的知識體系。
             </p>
          </div>
          <div className="p-10 bg-[--honhai-charcoal] text-white">
             <div className="flex items-center gap-4 mb-6">
                <Award className="text-[--honhai-red]" />
                <h3 className="text-xl font-black uppercase tracking-tighter">最終學習成果</h3>
             </div>
             <p className="text-slate-400 leading-relaxed">
                我們不僅學會了演算法的邏輯，更體會到了嚴謹查證的重要性。這是一次對技術深度的追求，也是對卓越品質的承諾。
             </p>
          </div>
        </div>

        <div className="text-center py-12 border-y border-slate-200 italic text-slate-400 text-lg">
          「誠信、勤奮、創新。這不僅是我們的企業精神，也是我們學習技術的座右銘。」
        </div>
      </div>
    </Section>
  );
};

export default LearningReflection;
