"use client";

import { useState, useRef, useEffect } from "react";
import { announcements, typeLabels } from "@/data/announcements";

export default function NotificationPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const popoverRef = useRef<HTMLDivElement>(null);

  const unreadCount = announcements.filter((a) => a.unread).length;
  const filtered =
    filter === "unread"
      ? announcements.filter((a) => a.unread)
      : announcements;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="notification" ref={popoverRef}>
      <button
        className="notification__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="お知らせ"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="notification__badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notification__popover">
          <div className="notification__header">
            <span className="notification__title">お知らせ</span>
            <button
              className="notification__close"
              onClick={() => setIsOpen(false)}
              aria-label="閉じる"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="notification__tabs">
            <button
              className={`notification__tab ${filter === "all" ? "notification__tab--active" : ""}`}
              onClick={() => setFilter("all")}
            >
              すべて
            </button>
            <button
              className={`notification__tab ${filter === "unread" ? "notification__tab--active" : ""}`}
              onClick={() => setFilter("unread")}
            >
              未読 ({unreadCount})
            </button>
            <span className="notification__mark-read">すべて既読にする</span>
          </div>

          <div className="notification__list">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`notification__item ${item.unread ? "notification__item--unread" : ""}`}
              >
                <div className="notification__item-body">
                  <div className="notification__item-meta">
                    <span className="notification__item-service">{item.service}</span>
                    <span className="notification__item-type">{typeLabels[item.type]}</span>
                    <span className="notification__item-date">{item.date}</span>
                  </div>
                  <div className="notification__item-title">{item.title}</div>
                  <div className="notification__item-summary">{item.summary}</div>
                </div>
                {item.unread && <div className="notification__item-dot" />}
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
