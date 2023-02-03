import styles from './styles.module.scss'
export default function Skeleton() {
    return (<>
        <div className={`${styles.xituSkeleton} ${styles.xituSkeletonAnimated}`}>
            <div className={styles.xituSkeletonItem} >
                <div className={styles.xituSkeletonContent} >
                    <div className={styles.xituSkeletonLine} ></div>
                    <div className={styles.xituSkeletonLine} ></div>
                    <div className={styles.xituSkeletonLine} ></div>
                    <div className={styles.xituSkeletonLine} ></div>
                </div></div></div>
    </>)
}