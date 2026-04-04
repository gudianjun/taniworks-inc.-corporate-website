
import React from 'react';
import logoUrl from '../res/taniworks-logo.svg';

interface FooterProps {
  t: any;
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ t, onPrivacyClick }) => {
  const addressImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNDAgMjQiPjx0ZXh0IHg9IjAiIHk9IjE4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNiOCI+5p2x5Lqs6YO95LiW55Sw6LC35Yy6562J44CF5Yqb77yR5LiB55uu77yS55Wq5Zyw77yR77yS5Y+377yTPC90ZXh0Pjwvc3ZnPg==";

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-slate-800 pb-10">
          <div className="mb-6 md:mb-0">
            <button
              onClick={(e) => scrollToId(e, 'home')}
              className="mb-2 focus:outline-none"
            >
              <img src={logoUrl} alt="TaniWorks" className="h-9 w-auto brightness-0 invert" />
            </button>
            <p className="text-sm">Technology & Quality Engineering</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={(e) => scrollToId(e, 'home')} className="hover:text-white transition-colors text-sm focus:outline-none">Home</button>
            <button onClick={(e) => scrollToId(e, 'service')} className="hover:text-white transition-colors text-sm focus:outline-none">Service</button>
            <button onClick={(e) => scrollToId(e, 'company')} className="hover:text-white transition-colors text-sm focus:outline-none">Company</button>
            <button onClick={onPrivacyClick} className="hover:text-white transition-colors text-sm focus:outline-none">{t.privacy}</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <p>{t.copy}</p>
          <div className="flex items-center opacity-60">
            <img src={addressImage} alt="Address" className="h-4 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
