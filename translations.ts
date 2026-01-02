
export type Language = 'jp' | 'en' | 'cn';

export const translations = {
  jp: {
    nav: { home: 'ホーム', service: '事業内容', company: '会社概要', notice: '電子公告', contact: 'お問い合わせ' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'テクノロジーの力で、',
      title2: '確かな価値を創造する。',
      sub: 'C#/.NETを中心とした高度なソフトウェア開発から、レガシーシステムの現代化まで。確かな技術力で、お客様のビジネス成長を加速させます。',
      btn1: '事業内容を見る',
      btn2: 'お問い合わせ'
    },
    services: {
      title: '事業内容',
      sub: '専門性の高い技術力でお客様の課題を解決し、持続可能な成長を支援します。',
      s1: {
        title: 'システム開発・モダン化支援',
        desc: 'C#/.NETエコシステムを基盤とした業務システムの設計・開発。特に、旧言語で構築されたレガシーシステムから最新の.NET環境へのリプレース・移植において、高品質なソリューションを提供します。'
      },
      s2: {
        title: 'IT技術コンサルティング',
        desc: 'DX推進や業務効率化のためのIT戦略を策定。金融ITの知見を活かした堅牢なシステム設計や、最新技術の導入支援を行い、ビジネスのデジタル化をトータルでサポートします。'
      },
      s3: {
        title: '業務支援・管理ソリューション',
        desc: '自社資産の効率的な運用・管理を通じて得たノウハウを活かし、不動産管理や経営効率化に関するアドバイザリー業務を行います。安定した基盤構築を支援します。'
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
        'コンピュータソフトウェアの企画、開発、販売',
        '旧システムからC#/.NETへのリプレース・移植支援',
        'ITコンサルティング及び技術支援',
        '経営コンサルティング業務',
        '不動産の管理及び運用',
        '有価証券の運用及び投資'
      ],
      bank_val: '（準備中）'
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
      copy: '© 2026 TaniWorks Inc. All Rights Reserved.',
      privacy: 'プライバシーポリシー'
    }
  },
  en: {
    nav: { home: 'Home', service: 'Services', company: 'Company', notice: 'Notice', contact: 'Contact' },
    hero: {
      tag: 'Tech & Value Solutions',
      title1: 'Empowering Business',
      title2: 'with Technology.',
      sub: 'From advanced C#/.NET development to legacy system modernization. We accelerate your growth with reliable engineering.',
      btn1: 'Our Services',
      btn2: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      sub: 'Solving complex challenges with high-level expertise to support sustainable growth.',
      s1: {
        title: 'System Development & Modernization',
        desc: 'Design and development based on the C#/.NET ecosystem. We specialize in porting and replacing legacy systems with modern .NET environments, delivering high-quality, scalable solutions.'
      },
      s2: {
        title: 'IT Technical Consulting',
        desc: 'Developing IT strategies for DX and efficiency. We provide total support for business digitalization, leveraging financial IT knowledge for robust system design and technical implementation.'
      },
      s3: {
        title: 'Business & Management Solutions',
        desc: 'Providing advisory services for real estate management and operational efficiency, utilizing our internal expertise in asset administration and stable infrastructure building.'
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
        'Planning, development, and sales of computer software',
        'Modernization and migration of legacy systems to C#/.NET',
        'IT consulting and technical support',
        'Management consulting services',
        'Real estate management and administration',
        'Asset management and investment'
      ],
      bank_val: 'Preparing'
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
      copy: '© 2026 TaniWorks Inc. All Rights Reserved.',
      privacy: 'Privacy Policy'
    }
  },
  cn: {
    nav: { home: '首页', service: '事业内容', company: '公司概要', notice: '电子公告', contact: '联系我们' },
    hero: {
      tag: '技术与价值解决方案',
      title1: '以科技之力，',
      title2: '创造卓越价值。',
      sub: '专注于 C#/.NET 高端软件开发与旧系统现代化迁移。凭借扎实的技术实力，为客户的业务增长保驾护航。',
      btn1: '查看事业内容',
      btn2: '联系我们'
    },
    services: {
      title: '事业内容',
      sub: '以专业技术解决客户难题，支持业务的可持续增长。',
      s1: {
        title: '系统开发与现代化支持',
        desc: '基于 C#/.NET 生态系统的业务系统设计与开发。特别是针对旧语言构建的传统系统（Legacy System），提供向最新 .NET 环境的移植与升级的高质量解决方案。'
      },
      s2: {
        title: 'IT 技术咨询',
        desc: '制定数字化转型（DX）与效率提升策略。结合金融 IT 经验，提供稳健的系统架构设计及新技术导入支持，全方位助力业务数字化。'
      },
      s3: {
        title: '业务支持与管理方案',
        desc: '利用自有资产高效运作与管理中积累的经验，提供不动产管理及经营效率化方面的咨询服务，协助构建稳定的业务基盘。'
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
        '计算机软件的策划、开发与销售',
        '旧系统向 C#/.NET 的迁移与升级支持',
        'IT 咨询及技术支持',
        '经营咨询业务',
        '不动产的管理及运作',
        '有价证券的运作及投资'
      ],
      bank_val: '（准备中）'
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
      copy: '© 2026 TaniWorks Inc. All Rights Reserved.',
      privacy: '隐私政策'
    }
  }
};
