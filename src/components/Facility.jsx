export default function Facility() {
  return (
    <section id="facility" className="section section-soft">
      <div className="container">
        <div className="facility__top">
          <div className="facility__image">
            <img
              src="/assets/facility-main.jpg"
              alt="두나팜 고춧가루 생산 설비"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="facility__text">
            <div className="eyebrow">ABOUT DUNAFARM</div>
            <h2 className="section-title">
              자연이 만든 건강한 먹거리를
              <br />
              지키는 <span className="accent">청정식품기업</span>
            </h2>
            <p className="section-desc">
              두나팜은 깨끗하고 안전한 생산환경과 최신 설비, 체계적인 품질관리 시스템을
              기반으로 고객이 믿고 선택할 수 있는 건강한 먹거리를 생산하고 있습니다.
            </p>
          </div>
        </div>
        <div className="facility__gallery">
          <img
            src="/assets/facility-2.jpg"
            alt="두나팜 고춧가루 분쇄 생산라인"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/assets/facility-3.jpg"
            alt="두나팜 고춧가루 이송 컨베이어 설비"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="quote-banner">
          <p>&ldquo;깨끗한 생산환경이 건강한 먹거리의 시작입니다.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
