
export type Language = 'jp' | 'en' | 'cn';

export const translations = {
  jp: {
    nav: { home: 'ホーム', service: '事業内容', company: '会社概要', history: '沿革', notice: '電子公告', contact: 'お問い合わせ' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'テクノロジーの力で、',
      title2: '確かな価値を創造する。',
      sub: 'ソフトウェア開発からAI導入支援・Webシステム開発・業務効率化コンサルティングまで。確かな技術力で、お客様のビジネス成長を加速させます。',
      btn1: '事業内容を見る',
      btn2: 'お問い合わせ'
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
      bank_val: '（準備中）'
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
    nav: { home: 'Home', service: 'Services', company: 'Company', history: 'History', notice: 'Notice', contact: 'Contact' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'Empowering Business',
      title2: 'with Technology.',
      sub: 'From software development and AI integration to web systems and business efficiency consulting. We accelerate your growth with reliable engineering.',
      btn1: 'Our Services',
      btn2: 'Contact Us'
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
      bank_val: 'Preparing'
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
    nav: { home: '首页', service: '事业内容', company: '公司概要', history: '发展历程', notice: '电子公告', contact: '联系我们' },
    hero: {
      tag: '技术与价值解决方案',
      title1: '以科技之力，',
      title2: '创造卓越价值。',
      sub: '涵盖软件开发、AI导入支持、Web系统开发及业务效率化咨询。凭借扎实的技术实力，为客户的业务增长保驾护航。',
      btn1: '查看事业内容',
      btn2: '联系我们'
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
      bank_val: '（准备中）'
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
