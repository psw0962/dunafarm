import Reveal from './Reveal';

const MANUFACTURING_STEPS = [
  { n: '01', img: 'process-input', title: '원료투입' },
  { n: '02', img: 'process-inspect', title: '원료 이물질 검사' },
  { n: '03', img: 'process-seed', title: '종자 분리 및 분쇄' },
  { n: '04', img: 'process-mixtank', title: '배합탱크' },
  { n: '05', img: 'process-grinder', title: '맷돌 분쇄기' },
  { n: '06', img: 'process-sieve', title: '입도선별기' },
  { n: '07', img: 'process-dryuv', title: '건조 및 UV살균' },
  { n: '08', img: 'process-metaldetect', title: '금속검출' },
  { n: '09', img: 'process-finaltank', title: '완제품탱크' },
];

const PACKAGING_STEPS = [
  { n: '10', img: 'process-packmachine', title: '반자동포장기' },
  { n: '11', img: 'process-packaging', title: '소포장' },
  { n: '12', img: 'process-metaldetect2', title: '금속검출기' },
];

function ProcessCard({ step }) {
  return (
    <Reveal as="div" className="process-card">
      <img src={`/assets/${step.img}.jpg`} alt={step.title} />
      <div className="process-card__label">
        <span className="process-card__n">{step.n}</span>
        <span className="process-card__title">{step.title}</span>
      </div>
    </Reveal>
  );
}

export default function Process() {
  return (
    <section id="process" className="section section-soft">
      <div className="container">
        <Reveal as="div" className="section-header">
          <div className="eyebrow">SMART FACTORY</div>
          <h2 className="section-title">체계적인 생산과정</h2>
          <p className="section-desc">
            9단계 제조 공정과 3단계 포장 관리로 위생적이고 안전하게 생산합니다.
          </p>
        </Reveal>
        <div className="process-label">제조 과정</div>
        <div className="process-grid">
          {MANUFACTURING_STEPS.map((step) => (
            <ProcessCard step={step} key={step.n} />
          ))}
        </div>
        <div className="process-label">포장 과정</div>
        <div className="process-grid" style={{ marginBottom: 40 }}>
          {PACKAGING_STEPS.map((step) => (
            <ProcessCard step={step} key={step.n} />
          ))}
        </div>
        <div className="alert-banner">
          <span>!</span>
          <span>모든 제품은 2회의 금속검출 과정을 거쳐 안전하게 출고됩니다.</span>
        </div>
      </div>
    </section>
  );
}
