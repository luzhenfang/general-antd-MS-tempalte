// 统一处理 store

import React from "react";
import LoginStore from "./login"

class Store {
    loginStore: LoginStore
    constructor() {
        this.loginStore = new LoginStore();
    }
}

const rootStore = new Store();

const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export default useStore;

