import styles from './styles.module.scss'
import Header from '../header'
import ViewNav from '../viewNav'
import Timeline from '../timeline'
export default function ViewContainer() {
    return (<>
        <div className={`${styles.viewContainer} container`}>
            <Header />
            <main className={`${styles.mainContainer} container`}>
                <div className={styles.view}>
                    <ViewNav />
                    <Timeline />
                </div>
            </main>
        </div>
    </>)
}