import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'antd'
import { UpCircleOutlined } from "@ant-design/icons"
import { Outlet, useRoutes } from 'react-router-dom'

import router from "./router";

function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
