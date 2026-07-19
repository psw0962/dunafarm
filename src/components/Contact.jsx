export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <div className="contact__eyebrow">CONTACT</div>
          <h2 className="contact__title">감사합니다.</h2>
          <p className="contact__desc">
            두나팜은 고객의 신뢰를 바탕으로 건강한 고춧가루를 생산하며, 더 큰 가치를 함께
            만들어가겠습니다.
          </p>
          <div className="rep-card">
            <div className="rep-card__label">담당자</div>
            <div className="rep-card__name">담당자 이름 · 직급</div>
            <div className="rep-card__line">010-0000-0000</div>
            <div className="rep-card__line">sales@dunafarm.co.kr</div>
          </div>
          <div className="contact__address">경기도 화성시 향남읍 길성안길 90-4</div>
        </div>
        <div className="contact__image">
          <img src="/assets/contact-pour.jpg" alt="두나팜 고춧가루" />
        </div>
      </div>
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__brand-mark">DF</div>
            <span className="footer__brand-name">두나팜 DUNAFARM</span>
          </div>
          <span className="footer__copy">© 2026 DUNAFARM. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
