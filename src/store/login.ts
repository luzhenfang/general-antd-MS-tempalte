// login module

import { makeAutoObservable } from "mobx";
import { http,setToken } from "@/utils";

class LoginStore {
    token: string = ""
    constructor() {
        makeAutoObservable(this);
    }
    setToken = (token: string) => {
        this.token = token;
        setToken(token)
    }

}

export default LoginStore;