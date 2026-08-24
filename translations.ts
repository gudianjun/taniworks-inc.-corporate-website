
export type Language = 'jp' | 'en' | 'cn';

export const translations = {
  jp: {
    pageTitle: 'TaniWorks株式会社 | テクノロジーで価値を創造する',
    nav: { home: 'ホーム', service: '事業内容', products: 'プロダクト', company: '会社概要', history: '沿革', notice: '電子公告', contact: 'お問い合わせ' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'テクノロジーの力で、',
      title2: '確かな価値を創造する。',
      sub: 'ソフトウェア開発からAI導入支援・Webシステム開発・業務効率化コンサルティングまで。確かな技術力で、お客様のビジネス成長を加速させます。',
      btn1: '事業内容を見る',
      btn2: 'お問い合わせ'
    },
    products: {
      title: 'プロダクト',
      sub: '私たちが開発・運営するWebアプリケーションをご紹介します。',
      status_live: 'サービス中',
      status_soon: 'Coming Soon',
      open_app: 'アプリを開く',
      more_coming: '新サービスを準備中…',
      zipurl: {
        tagline: '長いURLをスマートに短縮',
        desc: 'URLを短く変換し、シンプルなリンクで共有できる無料のURL短縮サービス。カスタムスラッグ対応で、ビジネスにも個人にも最適です。',
        category: 'ユーティリティ'
      },
      tanilinks: {
        tagline: 'タイトルとHTMLだけで独自サブドメイン公開',
        desc: 'タイトルとHTMLを入力するだけで、独自サブドメインの静的ページをすぐに公開できるホスティングサービス。サーバー構築やドメイン取得は不要。ランディングページ、資料共有、プロトタイプの公開に最適です。',
        category: 'ホスティング'
      },
      daily: {
        tagline: '米国市場の値動きを毎日配信',
        desc: '米国株式市場の値動きやトレンドを毎日まとめてお届けするデイリー投資ブリーフ。主要指数・注目銘柄・マクロ要因をコンパクトに解説します。投資判断の参考情報であり、売買を推奨するものではありません。',
        category: 'マーケット情報'
      }
    },
    services: {
      title: '事業内容',
      sub: '専門性の高い技術力でお客様の課題を解決し、持続可能な成長を支援します。',
      s1: {
        title: 'ソフトウェア開発・AI導入支援',
        desc: 'C#、Python、Webを活用した業務システムの設計・開発。AI技術を活用した業務改善（自動化・データ分析等）や、レガシーシステムの現代化まで、幅広い技術力でお客様の課題を解決します。'
      },
      s2: {
        title: 'Webシステム開発',
        desc: 'Webアプリケーションの企画・設計・開発を一貫して提供。既存システムの改修・最適化にも対応し、お客様のビジネスに合わせた柔軟なWebソリューションを構築します。'
      },
      s3: {
        title: '業務効率化コンサルティング',
        desc: 'DX推進・業務効率化のためのIT戦略を策定。中小企業のデジタル化・業務自動化を支援し、経営コンサルティングや不動産管理・資産運用に関するアドバイザリー業務も行います。'
      }
    },
    company: {
      title: '会社概要',
      items: {
        name: '会社名',
        rep: '代表者',
        loc: '所在地',
        est: '設立',
        cap: '資本金',
        biz: '事業内容',
        tel: '電話番号',
        bank: '取引銀行'
      },
      biz_list: [
        '業務システムの設計・開発（C#、Python、Web）',
        'AI技術を活用した業務改善（自動化、データ分析等）',
        'Webアプリケーション開発',
        '既存システムの改修・最適化'
      ],
      bank_val: 'GMOあおぞらネット銀行'
    },
    history: {
      title: '沿革',
      error: 'データの読み込みに失敗しました'
    },
    notice: {
      title: '電子公告',
      desc: '会社法に基づく決算公告およびその他の公告事項を掲載いたします。',
      empty: '現在、決算公告はありません。',
      footer: '※ 第1期決算確定後、こちらにPDFリンクが掲載されます。'
    },
    contact: {
      title: 'お問い合わせ',
      sub: 'サービスに関するご相談、システム移行のお見積りなど、お気軽にお問い合わせください。',
      name: 'お名前',
      email: 'メールアドレス',
      subject: '件名',
      msg: 'お問い合わせ内容',
      submit: '送信する',
      success: 'お問い合わせありがとうございます',
      success_sub: '内容を確認の上、担当者より折り返しご連絡を差し上げます。',
      back: '新しく問い合わせる'
    },
    footer: {
      copy: '© 2026 TaniWorks Co., Ltd. All Rights Reserved.',
      privacy: 'プライバシーポリシー'
    }
  },
  en: {
    pageTitle: 'TaniWorks Inc. | Tech & Value Solutions',
    nav: { home: 'Home', service: 'Services', products: 'Products', company: 'Company', history: 'History', notice: 'Notice', contact: 'Contact' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'Empowering Business',
      title2: 'with Technology.',
      sub: 'From software development and AI integration to web systems and business efficiency consulting. We accelerate your growth with reliable engineering.',
      btn1: 'Our Services',
      btn2: 'Contact Us'
    },
    products: {
      title: 'Our Products',
      sub: 'Web applications developed and operated by TaniWorks.',
      status_live: 'Live',
      status_soon: 'Coming Soon',
      open_app: 'Open App',
      more_coming: 'More products coming soon…',
      zipurl: {
        tagline: 'Shorten long URLs instantly',
        desc: 'A free URL shortener that converts long links into clean, shareable short URLs. Supports custom slugs — perfect for business and personal use.',
        category: 'Utility'
      },
      tanilinks: {
        tagline: 'Publish a static page on your own subdomain',
        desc: 'A hosting service that turns a title and raw HTML into a live static page on its own dedicated subdomain. No servers to set up and no domain to buy — ideal for landing pages, shared documents, and quick prototypes.',
        category: 'Hosting'
      },
      daily: {
        tagline: 'Daily wrap-up of U.S. market moves',
        desc: 'A daily investment brief summarizing U.S. stock market trends, key indices, notable stocks, and macro factors in a concise digest. Reference information only — not investment advice.',
        category: 'Market Insights'
      }
    },
    services: {
      title: 'Our Services',
      sub: 'Solving complex challenges with high-level expertise to support sustainable growth.',
      s1: {
        title: 'Software Development & AI Integration',
        desc: 'System design and development using C#, Python, and Web technologies. We provide AI-powered business improvement (automation, data analysis) and legacy system modernization to solve your challenges.'
      },
      s2: {
        title: 'Web System Development',
        desc: 'End-to-end planning, design, and development of web applications. We also handle existing system renovation and optimization, delivering flexible web solutions tailored to your business needs.'
      },
      s3: {
        title: 'Business Efficiency Consulting',
        desc: 'Developing IT strategies for DX and business efficiency. We support SME digitalization and automation, and also provide management consulting, real estate management, and asset administration advisory.'
      }
    },
    company: {
      title: 'Company Profile',
      items: {
        name: 'Company Name',
        rep: 'Representative',
        loc: 'Location',
        est: 'Established',
        cap: 'Capital',
        biz: 'Business',
        tel: 'Phone',
        bank: 'Bank'
      },
      biz_list: [
        'Business system design and development (C#, Python, Web)',
        'Business improvement using AI technology (automation, data analysis, etc.)',
        'Web application development',
        'Modification and optimization of existing systems'
      ],
      bank_val: 'GMO Aozora Net Bank'
    },
    history: {
      title: 'Company History',
      error: 'Failed to load data'
    },
    notice: {
      title: 'Electronic Public Notice',
      desc: 'Financial statements and other public notices based on the Companies Act will be posted here.',
      empty: 'There are no public notices at this time.',
      footer: 'Note: PDF links will be available after the first fiscal year-end.'
    },
    contact: {
      title: 'Contact',
      sub: 'Please feel free to contact us regarding service inquiries or system migration estimates.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      msg: 'Message',
      submit: 'Send Message',
      success: 'Thank you for contacting us',
      success_sub: 'We will review your message and get back to you shortly.',
      back: 'New Inquiry'
    },
    footer: {
      copy: '© 2026 TaniWorks Co., Ltd. All Rights Reserved.',
      privacy: 'Privacy Policy'
    }
  },
  cn: {
    pageTitle: 'TaniWorks株式会社 | 以科技创造卓越价值',
    nav: { home: '首页', service: '事业内容', products: '产品', company: '公司概要', history: '发展历程', notice: '电子公告', contact: '联系我们' },
    hero: {
      tag: '技术与价值解决方案',
      title1: '以科技之力，',
      title2: '创造卓越价值。',
      sub: '涵盖软件开发、AI导入支持、Web系统开发及业务效率化咨询。凭借扎实的技术实力，为客户的业务增长保驾护航。',
      btn1: '查看事业内容',
      btn2: '联系我们'
    },
    products: {
      title: '产品',
      sub: '介绍由 TaniWorks 开发并运营的 Web 应用产品。',
      status_live: '上线中',
      status_soon: '即将上线',
      open_app: '打开应用',
      more_coming: '更多产品即将推出…',
      zipurl: {
        tagline: '智能缩短长链接',
        desc: '免费的短链接生成服务，将长网址转换为简洁易分享的短链接。支持自定义短码，适合企业和个人使用。',
        category: '实用工具'
      },
      tanilinks: {
        tagline: '填标题和 HTML 即得独立二级域名',
        desc: '只需填写标题与 HTML 内容，即可立即获得一个拥有独立二级域名的静态页面托管服务。无需搭建服务器、无需购买域名，适合发布落地页、共享资料与快速原型。',
        category: '托管服务'
      },
      daily: {
        tagline: '每日汇总美股市场动态',
        desc: '每日汇总美国股市行情与走势的投资简报，用简洁的篇幅解读主要指数、重点个股与宏观因素。仅供参考信息，不构成投资建议。',
        category: '市场资讯'
      }
    },
    services: {
      title: '事业内容',
      sub: '以专业技术解决客户难题，支持业务的可持续增长。',
      s1: {
        title: '软件开发与AI导入支持',
        desc: '基于 C#、Python、Web 技术的业务系统设计与开发。运用 AI 技术实现业务改善（自动化、数据分析等），同时提供传统系统现代化迁移的高质量解决方案。'
      },
      s2: {
        title: 'Web系统开发',
        desc: '提供 Web 应用程序的策划、设计及开发一体化服务。同时承接既有系统的改造与优化，为客户构建灵活的 Web 解决方案。'
      },
      s3: {
        title: '业务效率化咨询',
        desc: '制定数字化转型（DX）与效率提升策略，支持中小企业数字化与业务自动化。同时提供经营咨询、不动产管理及资产运用等方面的顾问服务。'
      }
    },
    company: {
      title: '公司概要',
      items: {
        name: '公司名',
        rep: '代表者',
        loc: '所在地',
        est: '设立',
        cap: '资本金',
        biz: '事业内容',
        tel: '电话号码',
        bank: '开户银行'
      },
      biz_list: [
        '业务系统的设计与开发（C#、Python、Web）',
        '运用AI技术实现业务改善（自动化、数据分析等）',
        'Web应用程序开发',
        '既有系统的改修与最优化'
      ],
      bank_val: 'GMO青空网络银行'
    },
    history: {
      title: '发展历程',
      error: '数据加载失败'
    },
    notice: {
      title: '电子公告',
      desc: '本页面根据公司法刊载决算公告及其他公告事项。',
      empty: '当前无公告事项。',
      footer: '※ 第一期决算确定后，PDF 链接将在此处发布。'
    },
    contact: {
      title: '联系我们',
      sub: '有关服务咨询或系统迁移估值，欢迎随时联系。',
      name: '姓名',
      email: '电子邮箱',
      subject: '主题',
      msg: '咨询内容',
      submit: '提交',
      success: '感谢您的联系',
      success_sub: '我们将在确认内容后尽快回复您。',
      back: '重新咨询'
    },
    footer: {
      copy: '© 2026 TaniWorks Co., Ltd. All Rights Reserved.',
      privacy: '隐私政策'
    }
  }
};
