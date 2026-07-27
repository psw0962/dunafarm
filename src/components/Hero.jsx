export default function Hero() {
  return (
    <header id="hero" className="container hero">
      <div>
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <span className="hero__badge-text">
            화성 HACCP 인증 · 고춧가루 전문 제조기업
          </span>
        </div>
        <h1 className="hero__title">
          좋은 원료가
          <br />
          좋은 <span className="accent">제품</span>을 만듭니다
        </h1>
        <p className="hero__desc">
          두나팜은 경기도 화성 제조시설에서 고추 수입부터 건조, 분쇄, 제조, 포장까지 전
          공정을 직접 관리하며, HACCP 기준에 맞춘 체계적인 생산 시스템으로 신뢰할 수 있는
          고춧가루를 공급합니다. 김치용·중식용 고춧가루 OEM/PB 및 대량 도매 납품이
          가능합니다.
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#product">
            제품 라인업 보기
          </a>
          <a className="btn btn-outline" href="#contact">
            상담 문의하기
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <div className="hero__stat-value">30년+</div>
            <div className="hero__stat-label">제조 경험</div>
          </div>
          <div>
            <div className="hero__stat-value">200톤+</div>
            <div className="hero__stat-label">월간 생산</div>
          </div>
          <div>
            <div className="hero__stat-value">100곳+</div>
            <div className="hero__stat-label">납품처</div>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__image-frame">
          <div className="float-card">
            <div className="float-card__icon">✓</div>
            <div>
              <div className="float-card__title">HACCP 인증</div>
              <div className="float-card__sub">식품안전관리인증</div>
            </div>
          </div>
          <img
            src="/assets/hero-product.jpg"
            alt="두나팜 HACCP 인증 고춧가루 제품"
            width="1000"
            height="1000"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
}
