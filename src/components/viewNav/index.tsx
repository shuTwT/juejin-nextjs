import styles from './styles.module.scss'
export default function ViewNav() {
    return (<><nav className={styles.viewNav}>
        <div className={styles.navList}>
            <a href="/" className={`${styles.navItem} active`}>综合</a>
            <a href="/" className={`${styles.navItem}`}>关注</a>
            <a href="/" className={`${styles.navItem}`}>后端</a>
            <a href="/" className={`${styles.navItem}`}>前端</a>
            <a href="/" className={`${styles.navItem}`}>Android</a>
            <a href="/" className={`${styles.navItem}`}>ios</a>
            <a href="/" className={`${styles.navItem}`}>人工智能</a>
            <a href="/" className={`${styles.navItem}`}>开发工具</a>
            <a href="/" className={`${styles.navItem}`}>代码人生</a>
            <a href="/" className={`${styles.navItem}`}>阅读</a>
        </div>
    </nav></>)
}