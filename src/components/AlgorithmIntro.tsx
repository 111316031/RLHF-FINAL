import { BookOpen, Brain, LayoutDashboard, Rocket, Sparkles } from 'lucide-react';
import Section from './Section';

const AlgorithmIntro = () => {
  return (
    <Section 
      id="intro" 
      title="1. 演算法介紹" 
      subtitle="深入淺出，掌握演算法的核心邏輯與價值"
      icon={<BookOpen size={28} />}
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-indigo-500" />
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider text-sm">核心定義</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              請在此處用自己的話說明該演算法的定義。試著用直覺的類比來描述，例如：<span className="text-indigo-600 font-medium">「這就像是在圖書館裡依照字母快速尋找書籍的過程...」</span>
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Brain size={18} className="text-purple-500" />
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider text-sm">問題解決</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              說明該演算法的核心目標，例如解決效率、準確度或特定場景下的數據處理問題。它在什麼樣的極限情況下依然能保持穩定？
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
            <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Rocket size={18} /> 基本運作流程
            </h3>
            <div className="space-y-4">
              {[
                { step: "01", text: "輸入數據：獲取原始資訊集" },
                { step: "02", text: "處理邏輯：執行核心轉換或篩選" },
                { step: "03", text: "輸出結果：呈現最終分析或決策" }
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-4">
                  <span className="text-2xl font-black text-indigo-200">{item.step}</span>
                  <span className="text-slate-600 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-2xl text-white">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-indigo-400">
              <LayoutDashboard size={18} /> 常見應用場景
            </h3>
            <div className="flex flex-wrap gap-2">
              {['數據檢索', '路徑規劃', '模式識別', '資源優化'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AlgorithmIntro;
