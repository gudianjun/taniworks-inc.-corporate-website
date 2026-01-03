
import React, { useState, useEffect } from 'react';

interface HistoryItem {
  id: number;
  date: string;
  event_jp: string;
  event_en: string;
  event_cn: string;
  order: number;
}

const CompanyHistory: React.FC<{ t: any; lang: string }> = ({ t, lang }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/history')
      .then(res => res.json())
      .then(data => {
        setHistory(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load history:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const getEventText = (item: HistoryItem) => {
    if (lang === 'jp') return item.event_jp;
    if (lang === 'en') return item.event_en;
    if (lang === 'cn') return item.event_cn;
    return item.event_jp;
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-32 mx-auto mb-4"></div>
          <div className="h-1 bg-slate-200 rounded w-20 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-slate-500">{t.error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {history.map((item, index) => (
            <div key={item.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow z-10"></div>

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`inline-block px-3 py-1 mb-3 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full ${index % 2 === 0 ? 'md:float-right md:ml-3' : 'md:float-left md:mr-3'}`}>
                    {item.date}
                  </div>
                  <p className="text-slate-800 font-medium clear-both">{getEventText(item)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
