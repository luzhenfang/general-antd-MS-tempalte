import styles from "./login.module.scss";
const view: React.FC = () => {
    return (
        <div className={styles.login}>
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>通用后台管理模板</h1>
                    <p>react + typescript + vite</p>
                </div>
            </div>

        </div>
    )
}

export default view;