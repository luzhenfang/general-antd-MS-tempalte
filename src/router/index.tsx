import { Spin } from "antd";
import React from "react";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";


const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));


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
        element: <Navigate to={"/page1"} />
    },
    {
        // 嵌套路由(children)写法 
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: <React.Suspense fallback={<LazyLoading />}><Page1 /> </React.Suspense>
            },
            {
                path: "/page2",
                element: <React.Suspense fallback={<LazyLoading />}><Page2 /></React.Suspense>
            }

        ]
    },
];

export default routes;