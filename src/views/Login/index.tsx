import { Button, Card, Input, Space } from "antd";
import styles from "./login.module.scss";
const view: React.FC = () => {
    return (
        <div className={styles.login}>
            <Card className={styles.loginBox}>
                <h1>通用后台管理模板</h1>
                <p>react + typescript + vite</p>
                <div className="form">
                    <Space direction="vertical" size={"middle"} style={{ display: "flex" }}>
                        <Input placeholder="用户名" className={styles.ant_input}></Input>
                        <Input.Password placeholder="用户密码"></Input.Password>
                        <Button type="primary" block>登录</Button>
                    </Space>
                </div>
            </Card>

        </div>
    )
}

export default view;