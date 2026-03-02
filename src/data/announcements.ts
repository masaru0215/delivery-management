export type AnnouncementType = "maintenance" | "new-service" | "update" | "general";

export interface Announcement {
  id: number;
  type: AnnouncementType;
  date: string;
  service: string;
  title: string;
  summary: string;
  unread: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    type: "maintenance",
    date: "2026/02/28",
    service: "請求・決済管理",
    title: "【メンテナンス】請求・決済管理システムの定期メンテナンスのお知らせ",
    summary:
      "2026年3月1日(日) 02:00〜06:00 の間、請求・決済管理システムの定期メンテナンスを実施いたします。メンテナンス中はサービスをご利用いただけません。",
    unread: true,
  },
  {
    id: 2,
    type: "new-service",
    date: "2026/02/25",
    service: "全サービス共通",
    title: "【新機能】パートナー向けダッシュボードをリリースしました",
    summary:
      "各サービスの利用状況を一覧で確認できるダッシュボード機能をリリースしました。サービス一覧画面からご利用いただけます。",
    unread: true,
  },
  {
    id: 3,
    type: "update",
    date: "2026/02/20",
    service: "giftee for Business",
    title:
      "【アップデート】giftee for Business: 新しいギフトテンプレートを追加しました",
    summary:
      "春のキャンペーン向けに、桜をモチーフにした新デザインテンプレートを5種類追加しました。キャンペーン作成画面からご利用いただけます。",
    unread: true,
  },
  {
    id: 4,
    type: "maintenance",
    date: "2026/02/15",
    service: "eGift System",
    title: "【メンテナンス完了】eGift System メンテナンス完了のお知らせ",
    summary:
      "2026年2月15日に実施しておりましたeGift Systemのメンテナンスは正常に完了いたしました。ご協力ありがとうございました。",
    unread: false,
  },
  {
    id: 5,
    type: "general",
    date: "2026/02/10",
    service: "全サービス共通",
    title: "【お知らせ】利用規約の改定について",
    summary:
      "2026年3月1日より、パートナー様向けサービスの利用規約を改定いたします。主な変更点については以下をご確認ください。",
    unread: false,
  },
  {
    id: 6,
    type: "new-service",
    date: "2026/02/05",
    service: "Partner API",
    title: "【新機能】Partner API v2.0 をリリースしました",
    summary:
      "より使いやすくなったPartner API v2.0をリリースしました。新しいエンドポイントの追加やレスポンス形式の改善を行っています。",
    unread: false,
  },
  {
    id: 7,
    type: "update",
    date: "2026/01/28",
    service: "Campaign Manager",
    title: "【アップデート】Campaign Manager: A/Bテスト機能を追加しました",
    summary:
      "キャンペーンのA/Bテスト機能を追加しました。複数パターンのキャンペーンを比較し、最適なものを選択できます。",
    unread: false,
  },
];

export const typeLabels: Record<AnnouncementType, string> = {
  maintenance: "メンテナンス",
  "new-service": "新機能",
  update: "アップデート",
  general: "お知らせ",
};
