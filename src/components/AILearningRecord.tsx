import { MessageSquare } from 'lucide-react';
import Section from './Section';

const AILearningRecord = () => {
  return (
    <Section id="ai-record" title="2. AI 輔助學習紀錄" icon={<MessageSquare size={24} />}>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">我問了 AI 什麼問題？</h3>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 italic text-gray-700">
              「請詳細解釋...演算法的原理，並舉例說明...」
            </div>
            <p className="text-gray-600">
              描述提問的背景與目的，為什麼會選擇這樣問？
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">AI 回答的重點是什麼？</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>重點一：關於...的解釋</li>
              <li>重點二：提供了...的範例</li>
              <li>重點三：指出了...的注意事項</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">學習成效</h3>
          <p className="text-gray-600 leading-relaxed">
            這些回答如何幫助自己理解？例如：原本不懂的部分透過 AI 的類比得到了啟發，或是清楚了原本混淆的觀念。
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center text-gray-400">
          <p>這裡可以放入 AI 對話的截圖</p>
        </div>
      </div>
    </Section>
  );
};

export default AILearningRecord;
