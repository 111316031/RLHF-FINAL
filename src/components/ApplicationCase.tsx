import { Zap } from 'lucide-react';
import Section from './Section';

const ApplicationCase = () => {
  return (
    <Section id="application" title="5. 應用案例" icon={<Zap size={24} />}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">實際應用情境：[應用名稱]</h3>
            <p className="text-gray-600 leading-relaxed">
              詳細說明此演算法在現實世界中的一個具體應用。例如：在影像辨識中，此演算法如何幫助識別特徵；或是在推薦系統中，它如何計算用戶偏好。
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['影像辨識', '語音辨識', '文字生成', '醫學影像', '推薦系統', '自駕車', '生成式 AI'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 aspect-video bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center text-gray-400 border border-gray-200">
            [案例示意圖]
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ApplicationCase;
