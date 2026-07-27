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
            <div className="rep-card__name">한재훈 · 영업과장</div>
            <div className="rep-card__line">TEL. <a href="tel:+821090137501">010-9013-7501</a></div>
            <div className="rep-card__line">FAX. 031-354-6845</div>
            <div className="rep-card__line">
              EMAIL. <a href="mailto:jaehun348@naver.com">jaehun348@naver.com</a>
            </div>
          </div>
          <div className="contact__address">경기도 화성시 만세구 향남읍 길성안길 90-8</div>
        </div>
        <div className="contact__image">
          <img
            src="/assets/contact-pour.jpg"
            alt="두나팜에서 생산한 고춧가루 완제품"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer__inner">
          <span className="footer__copy">© 2026 DUNAFARM. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
