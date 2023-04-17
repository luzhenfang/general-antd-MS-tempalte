import { http } from "@/utils";
import { message } from "antd";
import { makeAutoObservable } from "mobx";


class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default UserStore;
