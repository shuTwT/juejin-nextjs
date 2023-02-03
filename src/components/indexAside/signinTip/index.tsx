import styles from './styles.module.scss'
export default function signinTip() {
    return (<>
        <div className={`${styles.signinTip} ${styles.signin}`}>
            <div className={styles.firstLine}>
                <div className={styles.iconText}>
                    <span className={styles.title}>晚上好</span>
                    <div className={styles.secondLine}>点亮在社区的每一天</div>
                </div>
                <button className={`${styles.btn}`}>
                    <span className={styles.btnText}>去签到</span></button>
            </div>
        </div></>)
}