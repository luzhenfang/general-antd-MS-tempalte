import { Spin } from "antd";
import React from "react";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";


const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));


// 懒加载组件 loading
const LazyLoading: React.FC = () => {
    return (
        <div className="loading-box">
            <Spin />
        </div>
    )
}


const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <React.Suspense fallback={<LazyLoading />}><Home /> </React.Suspense>
    },
    {
        path: "/about",
        element: <About />
    }
];

export default routes;