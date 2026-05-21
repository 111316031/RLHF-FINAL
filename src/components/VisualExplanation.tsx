import { Layout } from 'lucide-react';
import Section from './Section';

const VisualExplanation = () => {
  return (
    <Section id="visual" title="4. 視覺化說明" icon={<Layout size={24} />}>
      <div className="space-y-6 text-center">
        <p className="text-gray-600 mb-8">
          用一張圖或表說明演算法的概念、流程或架構
        </p>
        
        <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl min-h-[400px] flex flex-col items-center justify-center p-8">
          <div className="text-gray-400 mb-4">
            <Layout size={64} strokeWidth={1} />
          </div>
          <p className="text-gray-500 font-medium">在此處嵌入流程圖、架構圖或視覺化互動元件</p>
          <p className="text-gray-400 text-sm mt-2">(可以使用 Mermaid.js, SVG 或 圖片元件)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-white shadow-sm border border-gray-100 rounded-lg">
            <span className="block font-bold text-blue-600 mb-1">流程圖</span>
            <span className="text-xs text-gray-400">展示步驟邏輯</span>
          </div>
          <div className="p-4 bg-white shadow-sm border border-gray-100 rounded-lg">
            <span className="block font-bold text-blue-600 mb-1">架構圖</span>
            <span className="text-xs text-gray-400">展示系統組成</span>
          </div>
          <div className="p-4 bg-white shadow-sm border border-gray-100 rounded-lg">
            <span className="block font-bold text-blue-600 mb-1">比較表</span>
            <span className="text-xs text-gray-400">分析優劣差異</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VisualExplanation;
