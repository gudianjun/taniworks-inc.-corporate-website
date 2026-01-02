
import React, { useState, useEffect } from 'react';
import { Language } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.service, id: 'service' },
    { name: t.company, id: 'company' },
    { name: t.notice, id: 'notice' },
    { name: t.contact, id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const LangButton = ({ l, label }: { l: Language, label: string }) => (
    <button
      onClick={() => setLang(l)}
      className={`text-xs font-bold px-2 py-1 rounded transition-all ${
        lang === l 
          ? 'bg-blue-900 text-white' 
          : 'text-slate-500 hover:text-blue-900'
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-2xl font-bold tracking-tight text-blue-900 focus:outline-none"
            >
              TaniWorks<span className="text-blue-600">.</span>
            </button>
            <div className="hidden sm:flex items-center space-x-1 border-l border-slate-200 pl-4">
              <LangButton l="jp" label="JP" />
              <LangButton l="en" label="EN" />
              <LangButton l="cn" label="CN" />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none ${
                  isScrolled ? 'text-slate-700' : 'text-slate-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 transition-all duration-300 shadow-xl ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col p-4 space-y-2">
            <div className="flex justify-center space-x-4 pb-4 border-b border-slate-100">
              <LangButton l="jp" label="日本語" />
              <LangButton l="en" label="English" />
              <LangButton l="cn" label="中文" />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-left text-lg font-medium text-slate-800 hover:text-blue-600 px-4 py-3 rounded-lg hover:bg-slate-50 focus:outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
};

export default Navbar;
