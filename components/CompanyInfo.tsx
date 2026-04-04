
import React from 'react';

const CompanyInfo: React.FC<{ t: any }> = ({ t }) => {
  const images = {
    address: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+5p2x5Lqs6YO95LiW55Sw6LC35Yy6562J44CF5Yqb77yR5LiB55uu77yS55Wq5Zyw77yR77yS5Y+377yTPC90ZXh0Pjwvc3ZnPg==",
    name: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+6LC3IOe0l+iJrzwvdGV4dD48L3N2Zz4=",
    phone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNTAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+MDMtNjQ1NS05OTYwPC90ZXh0Pjwvc3ZnPg=="
  };

  const profileItems = [
    { label: t.items.name, value: 'TaniWorks株式会社 (TaniWorks Co., Ltd.)' },
    { label: t.items.rep, value: <img src={images.name} alt="Representative" className="h-6 object-contain" /> },
    { label: t.items.loc, value: <div className="flex items-center">〒158-0082&nbsp;<img src={images.address} alt="Address" className="h-6 object-contain" /></div> },
    { label: t.items.est, value: '2026.03' },
    { label: t.items.cap, value: '2,000,000 JPY' },
    {
      label: t.items.biz,
      value: (
        <ul className="list-disc list-inside space-y-1">
          {t.biz_list.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
      )
    },
    { label: t.items.tel, value: <img src={images.phone} alt="Phone" className="h-6 object-contain" /> },
    { label: t.items.bank, value: t.bank_val }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {profileItems.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row p-6">
              <div className="sm:w-1/3 text-slate-500 font-medium text-sm sm:text-base mb-2 sm:mb-0">
                {item.label}
              </div>
              <div className="sm:w-2/3 text-slate-900 font-semibold text-sm sm:text-base">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
