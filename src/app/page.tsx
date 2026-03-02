const services = [
  {
    name: "eGift system",
    description: "eGiftの商品を管理できます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "Bombay",
    description: "Bombayの商品を管理できます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "新配送システム",
    description: "新配送システムの商品を管理できます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "カタログギフト",
    description: "カタログギフトの管理ができます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "アクティベーション機能",
    description: "アクティベーションの管理ができます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "g4b審査システム",
    description: "g4bの審査案件の管理・やりとりができます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "com掲載管理システム",
    description: "com販売ページの編集・管理ができます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "CPポータルサイト",
    description: "eGiftに関わるQAや事例を参照できます",
    href: "https://giftee.co.jp/",
  },
  {
    name: "eGift Store",
    description: "eGift Storeの管理ができます",
    href: "https://giftee.co.jp/",
  },
];

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Home() {
  return (
    <>
      <div className="page-header">
        <div className="page-header__greeting">
          <img
            src="/icon-gifteesan.png"
            alt="gifteeさん"
            className="page-header__avatar"
          />
          <h1 className="page-header__title">こんにちは、今日はどのサービスからはじめますか？</h1>
        </div>
      </div>

      <div className="content">
        <div className="service-grid">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card"
            >
              <span className="service-card__external-icon">
                <ExternalLinkIcon />
              </span>
              <div className="service-card__name">{service.name}</div>
              <div className="service-card__description">
                {service.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
