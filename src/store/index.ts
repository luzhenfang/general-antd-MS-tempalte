/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-07 00:20:06
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-22 21:27:29
 * @FilePath: /general-antd-MS-tempalte/src/store/index.ts
 * @Description:
 *
 */
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
