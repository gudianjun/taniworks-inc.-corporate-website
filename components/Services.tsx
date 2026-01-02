
import React from 'react';

const Services: React.FC<{ t: any }> = ({ t }) => {
  const services = [
    {
      id: '01',
      title: t.s1.title,
      description: t.s1.desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: '02',
      title: t.s2.title,
      description: t.s2.desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: '03',
      title: t.s3.title,
      description: t.s3.desc,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          {t.sub}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6 bg-white w-14 h-14 rounded-lg flex items-center justify-center shadow-sm">
              {service.icon}
            </div>
            <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-widest">Service {service.id}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
