import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const tree = (
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
)

// 빌드 시 prerender 된 마크업이 있으면 hydrate, 없으면(dev) 일반 렌더링.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
