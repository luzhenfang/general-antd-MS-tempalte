import App from "@/App"
import About from "@/views/About"
import Home from "@/views/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter;