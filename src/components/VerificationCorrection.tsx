import { CheckCircle } from 'lucide-react';
import Section from './Section';

const VerificationCorrection = () => {
  return (
    <Section id="verification" title="3. 查證與修正" icon={<CheckCircle size={24} />}>
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-amber-800 mb-2">查證重點</h3>
          <p className="text-amber-700">
            我選擇了 AI 回答中的「...」這一點進行查證。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">查證方法與來源</h3>
            <p className="text-gray-600 mb-4">
              我是如何確認 AI 的回答是否正確的？
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>查閱官方文檔</li>
              <li>參考權威學術論文</li>
              <li>實作驗證</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">理解修正</h3>
            <p className="text-gray-600">
              查證後是否有修正原本的理解？
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-red-500 line-through">修正前</span>
                <span className="text-sm font-medium text-green-600">修正後</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>原本以為...</div>
                <div>後來確認為...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VerificationCorrection;
