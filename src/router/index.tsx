import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";


const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));

const routes: Array<RouteObject> = [
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
];

export default routes;