import { Lightbulb } from 'lucide-react';
import Section from './Section';

const LearningReflection = () => {
  return (
    <Section id="reflection" title="6. 學習反思" icon={<Lightbulb size={24} />}>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-semibold text-green-800 mb-3">AI 對學習的幫助</h3>
            <p className="text-green-700">
              描述 AI 如何加速了你的學習過程，或是提供了哪些不同層面的見解。
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h3 className="text-xl font-semibold text-red-800 mb-3">AI 回答的限制</h3>
            <p className="text-red-700">
              在使用 AI 過程中發現的不足之處，例如：資訊過時、過於簡化、或是邏輯錯誤。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">我最後真正學會了什麼？</h3>
          <p className="text-gray-600 leading-relaxed">
            總結本次學習的心得。透過結合 AI 與自主查證，你對這個演算法有了哪些深刻的理解？
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
            <p className="text-gray-600 font-medium">「學習不是為了記住答案，而是為了學會如何尋找答案。」</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LearningReflection;
