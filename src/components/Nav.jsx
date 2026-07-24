import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: '회사소개' },
  { href: '#facility', label: '생산시설' },
  { href: '#strength', label: '경쟁력' },
  { href: '#process', label: '생산과정' },
  { href: '#quality', label: '품질인증' },
  { href: '#product', label: '제품' },
  { href: '#business', label: '거래분야' },
  { href: '#contact', label: '문의' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="brand" href="#hero" aria-label="두나팜 DUNAFARM 홈" onClick={closeMenu}>
          <img className="brand__logo" src="/assets/logo.svg" alt="두나팜 DUNAFARM" />
        </a>
        <div id="nav-menu" className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav__link" href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav__right">
          <a className="btn btn-sm btn-dark" href="tel:+821090137501" onClick={closeMenu}>
            상담 문의
          </a>
          <button
            type="button"
            className={`nav__toggle${isOpen ? ' is-active' : ''}`}
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
