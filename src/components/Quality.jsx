import Reveal from './Reveal';

const CERTS = [
  { img: 'cert-haccp', title: 'HACCP 인증서', desc: '식품안전관리인증기준(HACCP) 적용업소 인증서 보유' },
  { img: 'cert-license', title: '영업등록증', desc: '식품제조·가공업 영업 등록 완료' },
];

const QUALITY_ITEMS = [
  { icon: 'haccp', title: 'HACCP 관리', desc: '식품안전관리인증기준 적용으로 위생적이고 안전한 생산 환경 유지' },
  { icon: 'magnifier', title: '원료 검사', desc: '입고되는 모든 원료를 엄격하게 검사하여 안전성 확보' },
  { icon: 'scan', title: '금속 검출', desc: '금속검출기 운영으로 이물질 혼입 원천 차단' },
  { icon: 'droplet', title: '위생 관리', desc: '청결한 생산 환경과 철저한 위생 관리 프로세스' },
  { icon: 'checklist', title: '품질 검사', desc: '최종 제품까지 꼼꼼한 품질검사로 안심할 수 있는 제품 생산' },
];

export default function Quality() {
  return (
    <section id="quality" className="container section">
      <Reveal as="div" className="section-header center">
        <div className="eyebrow">QUALITY SYSTEM</div>
        <h2 className="section-title">믿을 수 있는 품질관리 시스템</h2>
        <p className="section-desc">
          두나팜은 식품안전관리인증기준(HACCP)을 적용하여 위생적이고 안전한 생산환경을
          유지합니다.
        </p>
      </Reveal>
      <div className="cert-grid">
        {CERTS.map((c) => (
          <Reveal as="div" className="cert-card" key={c.title}>
            <div className="cert-card__thumb">
              <img src={`/assets/${c.img}.jpg`} alt={c.title} />
            </div>
            <div className="cert-card__body">
              <div className="cert-card__title">{c.title}</div>
              <div className="cert-card__desc">{c.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="quality-panel">
        <div className="quality-panel__head">
          <div className="eyebrow">QUALITY MANAGEMENT</div>
          <div className="quality-panel__title">철저한 품질관리 시스템</div>
        </div>
        <div className="quality-list">
          {QUALITY_ITEMS.map((item) => (
            <Reveal as="div" className="quality-item" key={item.title}>
              <div className="quality-item__icon">
                <img src={`/assets/icons/${item.icon}.svg`} alt="" />
              </div>
              <div className="quality-item__body">
                <div className="quality-item__title">{item.title}</div>
                <div className="quality-item__desc">{item.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
