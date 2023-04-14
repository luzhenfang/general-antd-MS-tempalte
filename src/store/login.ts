// login module

import { action, makeAutoObservable, observable, runInAction } from "mobx";
import { http, setToken } from "@/utils";
import { message } from "antd";

interface CaptchaInfo {
  captchaId: string;
  picPath: string;
}

class LoginStore {
  token: string = "1111222";
  captchaInfo: CaptchaInfo = {} as CaptchaInfo;
  constructor() {
    makeAutoObservable(this);
  }
  setToken = (token: string) => {
    this.token = token;
    setToken(token);
  };

  login = async ({
    username,
    password,
    captcha,
  }: {
    username: string;
    password: string;
    captcha: string;
  }) => {
    try {
      let res = await http.post("/api/v1/users/login", {
        email: username,
        password: password,
        captcha: captcha,
        captchaId: this.captchaInfo.captchaId,
      });
      this.setToken(res.data.token);
    } catch (err: any) {
      let data = err.response.data;
      message.error(data.message);
    }
  };

  captcha = async () => {
    let c: CaptchaInfo = (await http.get("/api/v1/users/captcha")).data;
    this.captchaInfo = c;
  };
}

export default LoginStore;
