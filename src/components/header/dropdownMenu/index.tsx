import styles from './styles.module.scss'
export default function () {
    return (<>
        <ul className={`${styles.menuList} notificationDropdownMenu`} >
            <li className={styles.menuItem} >
                <a href="/notification" className={styles.itemLink}>
                    <span className={styles.itemName} >评论</span> </a></li>
            <li className={styles.menuItem}>
                <a href="/notification/digg" className={styles.itemLink} >
                    <span className={styles.itemName} >点赞</span>
                </a>
            </li>
            <li className={styles.menuItem}>
                <a href="/notification/follow" className={styles.itemLink} >
                    <span className={styles.itemName} >关注</span> </a></li>
            <li className={styles.menuItem} >
                <a href="/notification/im" className={styles.itemLink} >
                    <span className={styles.itemName} >私信</span> </a></li>
            <li className={styles.menuItem} >
                <a href="/notification/system" className={styles.itemLink} >
                    <span className={styles.itemName} >系统消息</span> </a></li></ul></>)
}