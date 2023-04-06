// login module

import { makeAutoObservable } from "mobx";
import { http } from "@/utils";

class LoginStore {
    token: string = ""
    constructor() {
        makeAutoObservable(this);
    }
    setToken = (token: string) => {
        this.token = token;
    }
    
}

export default LoginStore;