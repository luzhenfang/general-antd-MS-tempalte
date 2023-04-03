import About from "@/views/About";
import Home from "@/views/Home";
import { Navigate, RouteObject } from "react-router-dom";



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