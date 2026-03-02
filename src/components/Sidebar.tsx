"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationPopover from "./NotificationPopover";

const navItems = [
  {
    href: "/",
    label: "サービス一覧",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    href: "/performance",
    label: "実績",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    href: "/announcements",
    label: "お知らせ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    badge: 3,
  },
];

const footerItems = [
  {
    href: "https://giftee.co.jp/",
    label: "活用事例",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    href: "https://giftee.co.jp/",
    label: "訴求用素材",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    href: "https://giftee.co.jp/",
    label: "ヘルプ",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "ログアウト",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="layout__sidebar">
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <svg width="61" height="19" viewBox="0 0 61 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_giftee_logo)">
              <path d="M5.73413 16.886C7.19501 16.886 8.17145 16.236 8.17145 14.2067V12.7671C7.77786 13.6751 6.58107 14.6266 4.88659 14.6266C3.04218 14.6266 0.316406 13.6246 0.316406 9.54803C0.316406 6.44288 2.24432 4.48938 4.88659 4.48938C6.60037 4.48938 7.75212 5.46485 8.2123 6.38888V4.72926H10.7831V13.8868C10.7831 17.1368 8.7044 18.6856 5.51912 18.6856C2.37301 18.6856 0.828763 17.2397 0.540756 15.5264H3.13198C3.41537 16.3904 4.3253 16.886 5.73413 16.886ZM5.58039 12.7471C7.27598 12.7471 8.27357 11.481 8.27357 9.52171V9.32808C8.27357 7.40803 7.04434 6.34886 5.58039 6.34886C3.93012 6.34886 2.92805 7.60106 2.92805 9.54803C2.92805 10.5346 3.16585 11.3144 3.64212 11.8873C4.11805 12.4607 4.7642 12.7471 5.58039 12.7471Z" fill="black"/>
              <path d="M15.9152 0.94043H13.1406V3.43982H15.9152V0.94043Z" fill="black"/>
              <path d="M15.8341 4.72949H13.2227V14.8868H15.8341V4.72949Z" fill="black"/>
              <path d="M30.8537 12.9671C31.318 12.9666 31.8151 12.8846 32.2207 12.7671V14.7266C31.6655 14.9066 31.0188 15.0265 30.16 15.0265C27.9593 15.0265 26.9365 14.1007 26.9365 12.0873V6.5488H25.0781V4.70925H26.9365V2.16992H29.5275V4.70925H31.7813V6.5488H29.5073V11.6874C29.5073 12.7157 30.0681 12.9679 30.8537 12.9671Z" fill="black"/>
              <path d="M40.8753 11.6267H43.2829C42.8489 13.7803 41.194 15.0258 38.6106 15.0258C36.928 15.0258 35.7248 14.5524 34.8175 13.5937C33.9478 12.6746 33.3672 11.3996 33.3672 9.72722C33.3672 6.49659 35.5137 4.38867 38.5495 4.38867C40.5763 4.38867 42.1205 5.40275 42.8154 6.95987C43.2259 7.87962 43.3986 8.9614 43.3442 10.327H35.8971C35.8971 11.2741 36.057 11.6532 36.4261 12.191C36.7639 12.6832 37.5649 13.119 38.6106 13.119C39.254 13.119 39.7637 12.9672 40.0937 12.7315C40.4315 12.4902 40.6921 12.1331 40.8753 11.6267ZM38.495 6.28817C37.1403 6.28817 36.0851 7.10142 35.9788 8.6675H40.8551C40.8542 7.23654 39.8989 6.28817 38.495 6.28817Z" fill="black"/>
              <path d="M51.9925 11.6267H54.4001C53.9661 13.7803 52.3112 15.0258 49.7278 15.0258C48.0452 15.0258 46.842 14.5524 45.9347 13.5937C45.065 12.6746 44.4844 11.3996 44.4844 9.72722C44.4844 6.49659 46.6309 4.38867 49.6667 4.38867C51.6935 4.38867 53.2377 5.40275 53.9326 6.95987C54.3431 7.87962 54.5158 8.9614 54.4614 10.327H47.0143C47.0143 11.2741 47.1742 11.6532 47.5433 12.191C47.8811 12.6832 48.6821 13.119 49.7278 13.119C50.3712 13.119 50.8809 12.9672 51.2109 12.7315C51.5487 12.4902 51.8093 12.1331 51.9925 11.6267ZM49.6122 6.28817C48.2575 6.28817 47.2023 7.10142 47.096 8.6675H51.9723C51.9714 7.23654 51.0161 6.28817 49.6122 6.28817Z" fill="black"/>
              <path d="M19.3646 3.38246C19.3646 1.3116 20.6085 0.210557 22.7243 0.228737C23.0614 0.231634 23.2761 0.231054 23.5191 0.244067C23.7621 0.257411 23.9643 0.272791 24.2221 0.327907V2.2519C24.0735 2.22554 23.915 2.20915 23.7463 2.20232C23.5776 2.19581 23.4055 2.19235 23.2304 2.19235C22.7983 2.19235 22.4779 2.30149 22.269 2.51967C22.0595 2.73786 21.9552 3.0651 21.9552 3.50148V4.70896L23.7961 4.70888V6.54842H21.9552V14.8866H19.3646V6.54842H17.582V4.70888H19.3646L19.3646 3.38246Z" fill="black"/>
              <path d="M60.8719 3.45974C60.3124 3.64507 58.8461 4.12524 58.4713 4.22755C58.6082 3.64184 58.769 2.37123 58.7918 1.8818C58.6806 1.80059 58.4089 1.75208 58.1207 1.75208C57.8326 1.75208 57.5609 1.80059 57.4497 1.8818C57.4724 2.37123 57.6333 3.64184 57.7702 4.22755C57.3953 4.12524 55.929 3.64507 55.3695 3.45974C55.2567 3.6533 55.1905 4.3455 55.2305 4.57068C55.7354 4.75966 57.0378 4.98885 57.5637 5.04146C56.9489 5.47539 56.0804 6.23534 55.6563 6.79631C55.9834 7.02746 56.5409 7.40141 56.9745 7.67692C57.2286 7.05115 57.8981 5.92087 58.1207 5.61014C58.3433 5.92087 59.0129 7.05115 59.2669 7.67692C59.7005 7.40141 60.258 7.02747 60.5852 6.79631C60.161 6.23534 59.2925 5.47538 58.6778 5.04146C59.2036 4.98885 60.506 4.75966 61.011 4.57068C61.0509 4.3455 60.9848 3.6533 60.8719 3.45974Z" fill="#F08B71"/>
            </g>
            <defs>
              <clipPath id="clip0_giftee_logo">
                <rect width="61" height="19" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span className="sidebar__logo-label">パートナーさま向け管理画面</span>
        </div>
      </div>

      <div className="sidebar__user">
        <span className="sidebar__user-email">m-hanakuma@giftee.co</span>
        <NotificationPopover />
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__nav-group">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar__nav-item ${
                pathname === item.href ? "sidebar__nav-item--active" : ""
              }`}
            >
              <span className="sidebar__nav-icon">{item.icon}</span>
              {item.label}
              {item.badge && <span className="sidebar__badge">{item.badge}</span>}
            </Link>
          ))}
        </div>

        <div className="sidebar__nav-footer">
          <div className="sidebar__nav-group">
            {footerItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar__nav-item"
                >
                  <span className="sidebar__nav-icon">{item.icon}</span>
                  {item.label}
                  <span className="sidebar__nav-external">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="sidebar__nav-item"
                >
                  <span className="sidebar__nav-icon">{item.icon}</span>
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
}
