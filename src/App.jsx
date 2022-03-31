import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button, Descriptions, Badge } from 'antd'

import Expenses from './views/expenses.jsx'
import Invoices from './views/invoices.jsx'

export default function App() {
  return (
    <div style={{padding:20}}>
      <h1>这是一个简单的博客首页</h1>
      <div>
        <p>
          <Button>刷新</Button>
          <Button type="primary" style={{marginLeft:12}}>新增</Button>
        </p>
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
          <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
          <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
          <Descriptions.Item label="Usage Time" span={2}>
            2019-04-24 18:00:00
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="processing" text="Running" />
          </Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div style={{ marginTop: 24 }}>
        <h3>查看其他页面</h3>
        <Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
      </div>
    </div>
  )
}
