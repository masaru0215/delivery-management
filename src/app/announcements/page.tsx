"use client";

import { useState } from "react";
import { announcements, typeLabels, type AnnouncementType } from "@/data/announcements";

type FilterType = "all" | AnnouncementType;

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered =
    filter === "all"
      ? announcements
      : announcements.filter((a) => a.type === filter);

  const unreadCount = announcements.filter((a) => a.unread).length;

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: `すべて (${announcements.length})` },
    { key: "maintenance", label: "メンテナンス" },
    { key: "new-service", label: "新機能" },
    { key: "update", label: "アップデート" },
    { key: "general", label: "お知らせ" },
  ];

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
        <div className="tabs">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`tabs__item ${filter === f.key ? "tabs__item--active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="announcements-list">
          {filtered.map((item) => (
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
