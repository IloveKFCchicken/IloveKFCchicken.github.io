import React,{Suspense} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import App from './App.jsx'
// import Expenses from './views/expenses.jsx'
// import Invoices from './views/invoices.jsx'
const App = React.lazy(() => import('./App.jsx'));
const Expenses = React.lazy(() => import('./views/expenses.jsx'));
const Invoices = React.lazy(() => import('./views/invoices.jsx'));

import 'antd/dist/antd.css'
import './index.less'

ReactDOM.render(
  <div>
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}>
    </nav>
    <Suspense fallback={()=><div>loading</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
    </Suspense>
    
  </div>,
  document.getElementById('root')
)
