const metrics = [
  {
    label: "総ギフト発行数",
    value: "124,563",
    unit: "件",
    change: "+12.3%",
    direction: "up" as const,
  },
  {
    label: "総取引金額",
    value: "¥48.2M",
    unit: "",
    change: "+8.7%",
    direction: "up" as const,
  },
  {
    label: "アクティブキャンペーン",
    value: "23",
    unit: "件",
    change: "+3",
    direction: "up" as const,
  },
  {
    label: "受取率",
    value: "94.2",
    unit: "%",
    change: "-0.5%",
    direction: "down" as const,
  },
];

const monthlyData = [
  {
    month: "2026年1月",
    service: "giftee for Business",
    issued: "15,234",
    amount: "¥6,120,000",
    redeemed: "14,521",
    rate: "95.3%",
  },
  {
    month: "2026年1月",
    service: "eGift System",
    issued: "8,432",
    amount: "¥3,210,000",
    redeemed: "7,945",
    rate: "94.2%",
  },
  {
    month: "2026年1月",
    service: "Campaign Manager",
    issued: "5,678",
    amount: "¥2,450,000",
    redeemed: "5,234",
    rate: "92.2%",
  },
  {
    month: "2025年12月",
    service: "giftee for Business",
    issued: "13,987",
    amount: "¥5,680,000",
    redeemed: "13,245",
    rate: "94.7%",
  },
  {
    month: "2025年12月",
    service: "eGift System",
    issued: "7,654",
    amount: "¥2,890,000",
    redeemed: "7,123",
    rate: "93.1%",
  },
  {
    month: "2025年12月",
    service: "Campaign Manager",
    issued: "4,321",
    amount: "¥1,980,000",
    redeemed: "3,987",
    rate: "92.3%",
  },
];

export default function PerformancePage() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-header__title">実績</h1>
          <p className="page-header__subtitle">
            各サービスの利用実績を確認できます。
          </p>
        </div>
        <button className="ab-btn ab-btn--outlined">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          CSVダウンロード
        </button>
      </div>

      <div className="content">
        <div className="filter-bar">
          <select className="filter-select" defaultValue="2026-01">
            <option value="2026-02">2026年2月</option>
            <option value="2026-01">2026年1月</option>
            <option value="2025-12">2025年12月</option>
            <option value="2025-11">2025年11月</option>
          </select>
          <select className="filter-select" defaultValue="all">
            <option value="all">すべてのサービス</option>
            <option value="gfb">giftee for Business</option>
            <option value="egift">eGift System</option>
            <option value="campaign">Campaign Manager</option>
          </select>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <div className="metric-card__label">{metric.label}</div>
              <div className="metric-card__value">
                {metric.value}
                {metric.unit && (
                  <span className="metric-card__unit">{metric.unit}</span>
                )}
              </div>
              <div
                className={`metric-card__change metric-card__change--${metric.direction}`}
              >
                {metric.direction === "up" ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
                前月比 {metric.change}
              </div>
            </div>
          ))}
        </div>

        <div className="data-table-wrapper">
          <div className="data-table-header">
            <span className="data-table-header__title">月別サービス実績</span>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>月</th>
                <th>サービス</th>
                <th>発行数</th>
                <th>取引金額</th>
                <th>受取済み</th>
                <th>受取率</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((row, i) => (
                <tr key={i}>
                  <td>{row.month}</td>
                  <td>{row.service}</td>
                  <td>{row.issued}</td>
                  <td>{row.amount}</td>
                  <td>{row.redeemed}</td>
                  <td>
                    <span
                      className={`status-label ${
                        parseFloat(row.rate) >= 94
                          ? "status-label--positive"
                          : "status-label--info"
                      }`}
                    >
                      {row.rate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
