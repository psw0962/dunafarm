import { renderToString } from 'react-dom/server';
import App from './App.jsx';

// 빌드 시 정적 HTML을 생성해 크롤러가 JS 실행 없이도 본문을 읽을 수 있게 한다.
export function render() {
  return renderToString(<App />);
}
