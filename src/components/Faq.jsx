import Reveal from './Reveal';

const FAQS = [
  {
    q: '두나팜 고춧가루 제조공장은 어디에 있나요?',
    a: '경기도 화성시 만세구 향남읍 길성안길 90-8에 위치한 HACCP 인증 고춧가루 제조시설에서 생산합니다. 수도권 전 지역으로 빠른 납품이 가능합니다.',
  },
  {
    q: '고춧가루 OEM·PB 생산이 가능한가요?',
    a: '가능합니다. 고객사 요구사항에 맞춘 OEM 생산과 브랜드 맞춤형 PB 제품 개발을 모두 진행하고 있으며, 입자 굵기와 매운맛 정도, 원산지 배합, 포장 규격까지 맞춤 제작해 드립니다.',
  },
  {
    q: '고춧가루 대량 도매 납품도 되나요?',
    a: '네. 월 200톤 이상의 생산 능력을 갖추고 있으며 100곳 이상의 식품업체·유통사에 정기 납품하고 있습니다. 대형 유통사 납품과 수출 물량도 대응 가능합니다.',
  },
  {
    q: '취급하는 고춧가루 원산지는 어떻게 되나요?',
    a: '국내산, 중국산, 베트남산 건고추를 취급합니다. 김치용·김장용 굵은 고춧가루부터 고추장·물김치용 고운 고춧가루, 중식·짬뽕용, 청양고추의 10배 매운맛 제품까지 용도별로 공급합니다.',
  },
  {
    q: '품질과 이물질 관리는 어떻게 하나요?',
    a: 'HACCP 식품안전관리인증기준을 적용해 원료 입고 검사부터 종자 분리, 분쇄, 입도 선별, 건조·UV살균, 완제품 검사까지 전 공정을 관리합니다. 특히 모든 제품은 제조 단계와 포장 단계에서 총 2회의 금속검출 과정을 거쳐 출고됩니다.',
  },
  {
    q: '고춧가루 구매 상담은 어떻게 하나요?',
    a: '영업 담당 한재훈 과장에게 전화(010-9013-7501) 또는 이메일(jaehun348@naver.com)로 문의하시면 24시간 이내에 회신드립니다.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="container section">
      <Reveal as="div" className="section-header center">
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-desc">
          고춧가루 제조, OEM/PB 생산, 대량 도매 납품에 대해 가장 많이 문의주시는 내용을
          모았습니다.
        </p>
      </Reveal>
      <div className="faq-list">
        {FAQS.map((item) => (
          <Reveal as="div" className="faq-item" key={item.q}>
            <h3 className="faq-item__q">{item.q}</h3>
            <p className="faq-item__a">{item.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
