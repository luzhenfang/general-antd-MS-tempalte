// 统一处理 store

import React from "react";
import LoginStore from "./login";
import UserStore from "./user";
import ArticleStore from "./article";
import CategoryStore from "./category";

class Store {
  loginStore: LoginStore;
  userStore: UserStore;
  articleStore: ArticleStore;
  categoryStore: CategoryStore;
  constructor() {
    this.loginStore = new LoginStore();
    this.userStore = new UserStore();
    this.articleStore = new ArticleStore();
    this.categoryStore = new CategoryStore();
  }
}

const rootStore = new Store();

const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export { useStore };
