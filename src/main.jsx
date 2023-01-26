import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes , BrowserRouter} from 'react-router-dom'
import Index from './pages/Index'
import Create from './pages/Create'
import View from './pages/View'
import ContextProvider from './store/ContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ContextProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view/:bookid" element={<View />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
