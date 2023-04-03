import App from "@/App"
import About from "@/views/About"
import Home from "@/views/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"


// 组件声明式 路由写法(旧版)

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;