import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import icons from "../src/iIcons/icon.svg" 
import MainLayout from './layout/MainLayout.tsx'
import  Themes  from './Pages/theme.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Themes> 
    <MainLayout />
    </Themes>
    </BrowserRouter>
  </StrictMode>,
)
