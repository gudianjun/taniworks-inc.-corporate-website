
import React, { useState } from 'react';

const ContactForm: React.FC<{ t: any }> = ({ t }) => {
  const images = {
    address: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+5p2x5Lqs6YO95LiW55Sw6LC35Yy6562J44CF5Yqb77yR5LiB55uu77yS55Wq5Zyw77yR77yS5Y+377yTPC90ZXh0Pjwvc3ZnPg==",
    phone: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxNTAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+MDMtNjQ1NS05OTYwPC90ZXh0Pjwvc3ZnPg==",
    email: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzNDE1NSI+aW5mb0B0YW5pd29ya3MuY28uanA8L3RleHQ+PC9zdmc+"
  };

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 text-center py-20">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-green-100">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.success}</h3>
          <p className="text-slate-600">{t.success_sub}</p>
          <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-medium hover:underline">{t.back}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-600">{t.sub}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1 space-y-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
            <div><h4 className="font-bold text-slate-900 text-sm">Email</h4><img src={images.email} alt="Email" className="h-4 mt-1 object-contain" /></div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
            <div><h4 className="font-bold text-slate-900 text-sm">Phone</h4><img src={images.phone} alt="Phone" className="h-4 mt-1 object-contain" /><p className="text-slate-400 text-[10px] mt-1">平日 10:00 - 18:00</p></div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg></div>
            <div><h4 className="font-bold text-slate-900 text-sm">Office</h4><img src={images.address} alt="Address" className="h-4 mt-1 object-contain" /></div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-xs font-semibold text-slate-700 mb-1">{t.name}</label><input type="text" required className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" /></div>
              <div><label className="block text-xs font-semibold text-slate-700 mb-1">{t.email}</label><input type="email" required className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" /></div>
            </div>
            <div><label className="block text-xs font-semibold text-slate-700 mb-1">{t.subject}</label><input type="text" required className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" /></div>
            <div><label className="block text-xs font-semibold text-slate-700 mb-1">{t.msg}</label><textarea rows={4} required className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea></div>
            <button type="submit" className="w-full py-3 bg-blue-900 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-lg">{t.submit}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
