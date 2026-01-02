
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CompanyInfo from './components/CompanyInfo';
import PublicNotice from './components/PublicNotice';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('jp');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Hero t={t.hero} />
        </section>
        <section id="service" className="py-20 bg-white scroll-mt-20">
          <Services t={t.services} />
        </section>
        <section id="company" className="py-20 bg-slate-50 scroll-mt-20">
          <CompanyInfo t={t.company} />
        </section>
        <section id="notice" className="py-20 bg-white scroll-mt-20">
          <PublicNotice t={t.notice} />
        </section>
        <section id="contact" className="py-20 bg-slate-50 scroll-mt-20">
          <ContactForm t={t.contact} />
        </section>
      </main>
      <Footer t={t.footer} onPrivacyClick={() => setIsPrivacyOpen(true)} />
      
      {isPrivacyOpen && (
        <PrivacyPolicyModal t={t.footer.privacy} onClose={() => setIsPrivacyOpen(false)} />
      )}
    </div>
  );
};

export default App;
