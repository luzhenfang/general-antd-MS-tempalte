import ArticleList from "@/components/ArticleList";
import AuthComponent from "@/components/AuthComponent";
import Login from "@/views/Login";
import { Spin } from "antd";
import React from "react";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));
const DashBoard = lazy(() => import("@/views/DashBoard"));
const Article = lazy(() => import("@/views/Article"));
const WriteArticle = lazy(() => import("@/views/WriteArticle"));

// 懒加载组件 loading
const LazyLoading: React.FC = () => {
  return (
    <div className="loading-box">
      <Spin />
    </div>
  );
};

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Navigate to={"/dashboard"} />,
  },
  {
    // 嵌套路由(children)写法
    path: "/",
    element: (
      <>
        <AuthComponent>
          <Home></Home>
        </AuthComponent>
      </>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <React.Suspense fallback={<LazyLoading />}>
            <DashBoard />{" "}
          </React.Suspense>
        ),
      },
      {
        path: "/articleList",
        element: (
          <React.Suspense fallback={<LazyLoading />}>
            <ArticleList />
          </React.Suspense>
        ),
      },
      {
        path: "/write",
        element: (
          <React.Suspense fallback={<LazyLoading />}>
            <WriteArticle />
          </React.Suspense>
        ),
      },

      {
        path: "*",
        element: <Navigate to={"/dashboard"} />, // todo:404
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
