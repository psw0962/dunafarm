import Reveal from './Reveal';

const STRENGTHS = [
  { icon: 'mortar', title: '제조 노하우', desc: '30년 제조 경험을 바탕으로 축적된 노하우와 기술력으로 최상의 품질을 구현합니다.' },
  { icon: 'factory', title: '최신 설비', desc: '자동화 설비와 위생적인 생산 시스템을 갖춰 안정적이고 효율적인 생산이 가능합니다.' },
  { icon: 'haccp', title: 'HACCP', desc: '식품안전관리인증 기준에 맞춘 위생적이고 체계적인 생산·관리 시스템을 운영합니다.' },
  { icon: 'scan', title: '금속검출', desc: '금속검출기 전수 검사를 통해 제품의 안전성을 철저히 확보합니다.' },
  { icon: 'clipboard', title: 'OEM', desc: '고객의 요구에 맞춘 OEM/PB 생산이 가능하여 다양한 맞춤형 제품을 제공합니다.' },
  { icon: 'truck', title: '안정 공급', desc: '체계적인 재고 관리와 생산 계획을 통해 안정적인 납기와 지속적인 공급을 보장합니다.' },
];

export default function Strength() {
  return (
    <section id="strength" className="container section">
      <Reveal as="div" className="section-header center">
        <div className="eyebrow">OUR STRENGTH</div>
        <h2 className="section-title">두나팜만의 경쟁력</h2>
        <p className="section-desc">
          원료 수입부터 생산, 품질관리, 출고까지 전 공정을 직접 관리하는 두나팜의 차별화된
          경쟁력입니다.
        </p>
      </Reveal>
      <div className="grid-3">
        {STRENGTHS.map((s) => (
          <Reveal as="div" className="strength-card" key={s.title}>
            <div className="strength-card__icon">
              <img src={`/assets/icons/${s.icon}.svg`} alt="" />
            </div>
            <div className="strength-card__title">{s.title}</div>
            <div className="strength-card__desc">{s.desc}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
