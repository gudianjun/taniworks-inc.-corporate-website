
import React from 'react';

const PublicNotice: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center">
        <p className="text-slate-700 font-medium mb-8">{t.desc}</p>
        
        <div className="inline-flex items-center space-x-2 text-slate-500 italic bg-white px-6 py-4 rounded-lg border border-slate-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{t.empty}</span>
        </div>
        
        <div className="mt-12 text-sm text-slate-400">
          <p>{t.footer}</p>
        </div>
      </div>
    </div>
  );
};

export default PublicNotice;
