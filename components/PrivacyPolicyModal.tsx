
import React from 'react';

interface PrivacyPolicyModalProps {
  onClose: () => void;
  t: string;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ onClose, t }) => {
  const images = {
    address: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+5p2x5Lqs6YO95LiW55Sw6LC35Yy6562J44CF5Yqb77yR5LiB55uu77yS55Wq5Zyw77yR77yS5Y+377yTPC90ZXh0Pjwvc3ZnPg==",
    name: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+6LC3IOe0l+iJrzwvdGV4dD48L3N2Zz4=",
    phone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNTAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+MDMtNjQ1NS05OTYwPC90ZXh0Pjwvc3ZnPg=="
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl p-8 md:p-12 text-slate-700">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">{t}</h2>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p>TaniWorks株式会社（以下、当社）は、個人情報の重要性を認識し、法令を遵守するとともに、適切な保護に努めます。</p>
          <section>
            <h3 className="font-bold text-slate-900 mb-2">1. 個人情報の収集・利用</h3>
            <p>当社は、お問い合わせへの対応や業務の遂行に必要な範囲内で、適正に個人情報を収集し、目的外での利用は行いません。</p>
          </section>
          <section>
            <h3 className="font-bold text-slate-900 mb-2">2. 第三者提供の禁止</h3>
            <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</p>
          </section>
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">お問い合わせ窓口</h3>
            <div className="space-y-2">
              <div className="flex items-center"><span className="w-20 text-slate-500 font-medium">所在地：</span><img src={images.address} alt="Address" className="h-5 object-contain" /></div>
              <div className="flex items-center"><span className="w-20 text-slate-500 font-medium">社名：</span><span>TaniWorks株式会社</span></div>
              <div className="flex items-center"><span className="w-20 text-slate-500 font-medium">代表：</span><img src={images.name} alt="Name" className="h-5 object-contain" /></div>
              <div className="flex items-center"><span className="w-20 text-slate-500 font-medium">電話：</span><img src={images.phone} alt="Phone" className="h-5 object-contain" /></div>
            </div>
          </section>
        </div>

        <div className="mt-8 flex justify-center">
          <button onClick={onClose} className="px-10 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">Close</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
