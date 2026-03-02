import { announcements, typeLabels } from "@/data/announcements";

export default function AnnouncementsPage() {
  const unreadCount = announcements.filter((a) => a.unread).length;

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-header__title">お知らせ</h1>
          <p className="page-header__subtitle">
            各サービスからのメンテナンス情報や新機能のお知らせを確認できます。
            {unreadCount > 0 && (
              <span style={{ color: "var(--ab-semantic-color-text-notice)", marginLeft: 8 }}>
                未読 {unreadCount}件
              </span>
            )}
          </p>
        </div>
        <button className="ab-btn ab-btn--neutral ab-btn--small">
          すべて既読にする
        </button>
      </div>

      <div className="content">
        <div className="announcements-list">
          {announcements.map((item) => (
            <div key={item.id} className="announcement-item">
              <div className="announcement-item__content">
                <div className="announcement-item__meta">
                  <span className="announcement-item__date">{item.date}</span>
                  <span className="announcement-item__service">
                    {item.service}
                  </span>
                  <span
                    className={`status-label status-label--${
                      item.type === "maintenance"
                        ? "notice"
                        : item.type === "new-service"
                          ? "info"
                          : item.type === "update"
                            ? "positive"
                            : "info"
                    }`}
                  >
                    {typeLabels[item.type]}
                  </span>
                </div>
                <div className="announcement-item__title">{item.title}</div>
                <div className="announcement-item__summary">{item.summary}</div>
              </div>
              {item.unread && <div className="announcement-item__unread-dot" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
