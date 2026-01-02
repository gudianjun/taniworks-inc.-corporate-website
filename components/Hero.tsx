
import React from 'react';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/4 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            {t.title1}<br />
            <span className="text-blue-700">{t.title2}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            {t.sub}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToId('service')}
              className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition-colors text-center focus:outline-none"
            >
              {t.btn1}
            </button>
            <button 
              onClick={() => scrollToId('contact')}
              className="px-8 py-4 bg-white text-blue-900 border border-slate-200 font-semibold rounded-lg shadow-sm hover:border-blue-600 transition-all text-center focus:outline-none"
            >
              {t.btn2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
