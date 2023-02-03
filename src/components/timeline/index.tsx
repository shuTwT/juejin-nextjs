import styles from './styles.module.scss'
import Skeleton from '../skeleton'
import IndexAside from '../indexAside'
export default function Timeline() {
    return (<>
        <div className={styles.timelineContainer}>
            <div className={styles.timelineContent}>
                <div className={styles.timelineEntryList}>
                    <div className={styles.entryListContainer}>
                        <div className={styles.listHeader}>
                            <nav className={styles.listNav}>
                                <ul className={styles.navList}>
                                    <li className={`${styles.navItem} ${styles.active}`}>
                                        <a href="/">推荐</a>
                                    </li>
                                    <li className={styles.navItem}><a href="/?sort=newest">最新</a>
                                    </li>
                                    <li className={styles.navItem}><a href="/?sort=three_days_hottest">热榜</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.entryListWrap}>
                            <Skeleton />
                        </div>
                    </div>
                </div>
                <IndexAside />
            </div>
        </div></>)
}