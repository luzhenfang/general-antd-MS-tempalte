import { getToken } from "@/utils"
import { useNavigate, Navigate } from "react-router-dom";
import { message, Button } from "antd";
import { useEffect } from "react";


const AuthComponent = ({ children }: { children: React.ReactNode }) => {

    const ifToken = getToken();
    const navigateTo = useNavigate();
    useEffect(() => {
        if (!ifToken) {
            navigateTo("/login");
            message.warning("需要登录.")
        }
    }, []);
    return <>{children}</>
}

export default AuthComponent;