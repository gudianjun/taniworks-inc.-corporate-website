
import React from 'react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url?: string;
  status: 'live' | 'coming_soon';
  category: string;
  icon: React.ReactNode;
}

interface ProductsProps {
  t: any;
}

const LinkIcon = () => (
  <svg className="w-4 h-4 ml-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ZipUrlIcon = () => (
  <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const DailyIcon = () => (
  <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
  </svg>
);


const Products: React.FC<ProductsProps> = ({ t }) => {
  const products: Product[] = [
    {
      id: 'zipurl',
      name: 'ZipURL',
      tagline: t.zipurl.tagline,
      description: t.zipurl.desc,
      url: 'https://zipurl.taniworks.jp/',
      status: 'live',
      category: t.zipurl.category,
      icon: <ZipUrlIcon />,
    },
    {
      id: 'daily',
      name: 'Daily Investment Brief',
      tagline: t.daily.tagline,
      description: t.daily.desc,
      url: 'https://daily.taniworks.jp/',
      status: 'live',
      category: t.daily.category,
      icon: <DailyIcon />,
    },

  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">{t.sub}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-700" />

            <div className="p-8 flex flex-col flex-grow">
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-6">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                  {product.icon}
                </div>
                {product.status === 'live' ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    {t.status_live}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-slate-400 bg-slate-100 rounded-full px-3 py-1">
                    {t.status_soon}
                  </span>
                )}
              </div>

              {/* Category */}
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                {product.category}
              </div>

              {/* Name + tagline */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-sm font-medium text-slate-500 mb-4">{product.tagline}</p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{product.description}</p>

              {/* CTA */}
              {product.url && product.status === 'live' && (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                >
                  {t.open_app}
                  <LinkIcon />
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Coming soon placeholder */}
        <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
          <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-slate-400">{t.more_coming}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
