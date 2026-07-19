const STATS = [
  { n: '01', title: '생산능력 확대', desc: '증설된 생산라인으로 대량 생산 체계를 구축했습니다.' },
  { n: '02', title: '최신 설비 구축', desc: '자동화 설비 도입으로 위생적이고 효율적인 생산이 가능합니다.' },
  { n: '03', title: 'HACCP 기준 운영', desc: '식품안전관리인증 기준에 맞춘 위생적이고 체계적인 관리.' },
  { n: '04', title: '안정적인 납기', desc: '체계적인 생산과 관리로 안정적인 납기를 보장합니다.' },
];

export default function About() {
  return (
    <section id="about" className="container section">
      <div className="about__grid">
        <div className="about__text">
          <div className="eyebrow">ABOUT US</div>
          <h2 className="section-title">
            30년 제조 경험을 기반으로
            <br />
            생산 역량을 <span className="accent">더욱 강화</span>했습니다
          </h2>
          <p>
            고객에게 더욱 안정적인 품질과 공급을 제공하기 위해 최신 생산설비를 갖춘 제조시설을
            구축했습니다.
          </p>
          <p>
            고추 수입부터 건조, 분쇄, 제조, 포장까지 전 공정을 직접 관리하며, HACCP 기준에
            맞춘 체계적인 생산 시스템으로 신뢰할 수 있는 고춧가루를 생산합니다.
          </p>
        </div>
        <div className="about__image">
          <img src="/assets/factory-building.jpg" alt="두나팜 제조시설 외관" />
        </div>
      </div>
      <div className="stat-strip">
        {STATS.map((s) => (
          <div className="stat-strip__item" key={s.n}>
            <div className="stat-strip__n">{s.n}</div>
            <div className="stat-strip__title">{s.title}</div>
            <div className="stat-strip__desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
