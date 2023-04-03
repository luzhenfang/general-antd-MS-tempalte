import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'antd'
import { UpCircleOutlined } from "@ant-design/icons"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      {/* 占位组件 */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
