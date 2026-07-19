import Reveal from './Reveal';

const PRODUCT_GROUPS = [
  {
    badge: '국내산',
    products: [
      {
        tag: '굵은 고춧가루',
        spice: '●',
        origin: '국내산 건고추 100%',
        desc: '주로 김치, 겉절이, 양념이나 찌개 등에 많이 사용',
        tags: ['김치', '겉절이', '찌개'],
      },
      {
        tag: '고운 고춧가루',
        spice: '●',
        origin: '국내산 건고추 100%',
        desc: '주로 고추장이나 젓갈, 물김치 등 국물용으로 많이 사용',
        tags: ['고추장', '젓갈', '물김치'],
      },
    ],
  },
  {
    badge: '중국산',
    products: [
      {
        tag: '고운 매운 중식용',
        spice: '●●',
        origin: '중국산 건고추 100%',
        desc: '맛과 향이 뛰어나며 입자가 고운 고춧가루, 중화요리·짬뽕에 사용',
        tags: ['중식요리', '짬뽕', '볶음'],
      },
      {
        tag: '고운 중식용',
        spice: '●',
        origin: '중국산 건고추 100%',
        desc: '맛과 향이 뛰어나며 입자가 고운 고춧가루, 중화요리·짬뽕에 사용',
        tags: ['중식요리', '짬뽕', '볶음'],
      },
      {
        tag: '굵은 김치용',
        spice: '●',
        origin: '중국산 건고추 100%',
        desc: '주로 겉절이나 김장에 사용',
        tags: ['김장', '겉절이'],
      },
      {
        tag: '굵은 매운 김치용',
        spice: '●●',
        origin: '중국산 건고추 100%',
        desc: '일반 김치용보다 매우며 주로 겉절이나 김장에 사용',
        tags: ['김장', '겉절이'],
      },
      {
        tag: '굵은 한식용',
        spice: '●',
        origin: '중국산 건고추 100%',
        desc: '주로 찜, 국물요리, 무침에 많이 사용',
        tags: ['찌개', '볶음', '무침'],
      },
    ],
  },
  {
    badge: '베트남산',
    products: [
      {
        tag: '굵은 김치용',
        spice: '●●●',
        origin: '베트남산 건고추 100%',
        desc: '일반 김치용 고춧가루보다 매우며 주로 겉절이나 김장에 많이 사용',
        tags: ['김장', '겉절이'],
      },
      {
        tag: '고운 중식용',
        spice: '●●●',
        origin: '베트남산 건고추 100%',
        desc: '맛과 향이 뛰어나며 입자가 고운 고춧가루, 중화요리·짬뽕에 사용',
        tags: ['중식요리', '짬뽕', '볶음'],
      },
      {
        tag: '아주 매운맛',
        spice: '●●●●',
        origin: '베트남산 건고추 100%',
        desc: '청양고추에 10배 매운맛인 깔끔하고 맛있게 매운 베트남산 씨 고춧가루',
        tags: ['중식', '양식', '볶음요리'],
      },
    ],
  },
];

export default function Product() {
  return (
    <section id="product" className="section section-soft">
      <div className="container">
        <div className="product__top">
          <Reveal as="div">
            <div className="eyebrow">PRODUCT LINE</div>
            <h2 className="section-title">
              다양한 고춧가루
              <br />
              공급 품목
            </h2>
            <p className="section-desc">
              국내산, 중국산, 베트남산까지 용도와 매운맛에 맞는 다양한 고춧가루를 공급합니다.
            </p>
          </Reveal>
          <div className="product__image">
            <img src="/assets/product-bag.jpg" alt="두나팜 고춧가루 제품" />
          </div>
        </div>

        {PRODUCT_GROUPS.map((group) => (
          <div className="product-group" key={group.badge}>
            <div className="product-badge">{group.badge}</div>
            <div className="grid-3">
              {group.products.map((p) => (
                <Reveal as="div" className="product-card" key={p.tag}>
                  <div className="product-card__head">
                    <span className="product-card__tag">{p.tag}</span>
                    <span className="product-card__spice">{p.spice}</span>
                  </div>
                  <div className="product-card__origin">{p.origin}</div>
                  <div className="product-card__desc">{p.desc}</div>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
