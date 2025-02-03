import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { CreateItem } from './CreateItem.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ProductRandom } from './ProductRandom'

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/CreateBrand" element={<CreateItem />} />
        <Route path='/ProductRandom' element={<ProductRandom />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)