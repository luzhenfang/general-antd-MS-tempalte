import { useEffect, useRef, useState, Context } from "react";
import useGyroscopic from "@/hooks/useGyroscopic";
import Cloud from "@/components/Cloud";
import "./login.scss";
import { Button, Col, Form, Input, Row } from "antd";
import { useStore } from "@/store";
import { observer } from "mobx-react";

const Login: React.FC = () => {
  const [visiable, setVisible] = useState(false);
  const { loginStore } = useStore();

  useEffect(() => {
    setVisible(true);
    loginStore.captcha();
  }, []);

  const { vx, vy } = useGyroscopic();
  const style = {
    top: `-${vy}px`,
    left: `-${vx}px`,
    transform: `translateX(${-vy}) translateY(${-vx})`,
    transition: "500ms",
  };

  const onFinish = (values:any) => {
    loginStore.login(values);
  };

  return (
    <Cloud>
      <div className="dyn-wrapper" style={style}>
        <div className="login-wrapper">
          <div className="login-box">
            <div className="left"></div>
            <div className="right">
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="username"
                  label="用户名"
                  rules={[{ required: true, message: "请输入用户名" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="密码"
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <Input.Password />
                </Form.Item>

                {/* <p>{loginStore.captchaInfo.captchaId}</p> */}
                <Form.Item
                  name="captcha"
                  label="验证码"
                  rules={[{ required: true, message: "请输入验证码" }]}
                >
                  <Row>
                    <Col span={12}>
                      <Input />
                    </Col>
                    <Col span={12}>
                      <img
                        src={loginStore.captchaInfo.picPath}
                        alt="验证码"
                        className="captcha-img"
                        style={{
                          width: 100,
                          marginLeft: 10,
                          cursor: "pointer",
                        }}
                        onClick={() => loginStore.captcha()}
                      />
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Cloud>
  );
};
export default observer(Login);
