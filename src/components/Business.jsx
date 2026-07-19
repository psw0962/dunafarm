import Reveal from './Reveal';

const FEATURES = [
  { title: 'OEM 생산', desc: '고객 맞춤형 제품 생산' },
  { title: 'PB 생산', desc: '브랜드 맞춤형 제품 개발' },
  { title: '대량 생산', desc: '유통 및 식품업체 정기 납품' },
  { title: '대유통·수출', desc: '대형 유통사 납품 및 수출' },
];

export default function Business() {
  return (
    <section id="business" className="container section">
      <div className="business__top">
        <Reveal as="div">
          <div className="eyebrow">BUSINESS</div>
          <h2 className="section-title">
            신뢰로 함께하는
            <br />
            거래분야
          </h2>
          <p className="section-desc">다양한 분야의 파트너와 함께 성장해 나가겠습니다.</p>
        </Reveal>
        <div className="business__collage">
          <img className="span-2" src="/assets/business-trucks.jpg" alt="납품 차량" />
          <img src="/assets/business-handshake.jpg" alt="파트너십" />
          <img src="/assets/business-sacks.jpg" alt="원료 입고" />
        </div>
      </div>
      <div className="grid-4">
        {FEATURES.map((f) => (
          <Reveal as="div" className="feature-card" key={f.title}>
            <div className="feature-card__title">{f.title}</div>
            <div className="feature-card__desc">{f.desc}</div>
          </Reveal>
        ))}
      </div>
      <div className="stats-banner">
        <div>
          <div className="stats-banner__value">200톤+</div>
          <div className="stats-banner__label">월간 생산</div>
        </div>
        <div>
          <div className="stats-banner__value">100곳 이상</div>
          <div className="stats-banner__label">납품처</div>
        </div>
        <div>
          <div className="stats-banner__value">24시간 이내</div>
          <div className="stats-banner__label">빠른 대응</div>
        </div>
      </div>
    </section>
  );
}
