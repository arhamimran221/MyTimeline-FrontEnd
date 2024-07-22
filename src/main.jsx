import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider
  theme={{
    components: {
      Select: {
        optionSelectedBg: "#121B37",
         colorBgContainer	: "#00000",
         colorText	: "white",
         colorIcon: "white"
      },
    },
  }}
>
    <App />
    </ConfigProvider>

    </BrowserRouter>
  </React.StrictMode>,
  </StyledEngineProvider>,
)
