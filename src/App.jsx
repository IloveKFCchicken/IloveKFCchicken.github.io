import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button } from 'antd'

import Expenses from './views/expenses.jsx'
import Invoices from './views/invoices.jsx'

export default function App() {
  return (
    <div>
      <div>App</div>
      <div>
        <Button>11</Button>
      </div>
      <div>
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </div>
    </div>
  )
}
