import Image from 'next/image'
import styles from './styles.module.scss'
export default function Header() {
    return (<>
        <div className={styles.mainHeaderBox}>
            <header className={styles.mainHeader + ' ' + styles.visiable}>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        <Image src='juejin_big.svg'
                            width={107}
                            height={22}
                            alt='稀土掘金'
                            className={styles.logoImg}
                            priority />
                        <Image src='juejin_small.svg'
                            width={31}
                            height={22}
                            alt='稀土掘金'
                            className={styles.mobile}
                            priority />
                    </a>
                    <nav className={styles.mainNav}>
                        <ul className={styles.navList}>
                            <li className={styles.mainNavList}>
                                <div className={styles.phoneShowMenu}>
                                    <span>首页</span>
                                </div>
                                <ul className={styles.phoneHide}>
                                    <li className={`${styles.navItem} linkItem routerActive active`}>
                                        <a href="/">首页</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">沸点</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">课程</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">直播</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">活动</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">竞赛</a>
                                    </li>
                                    <li className={`${styles.navItem} linkItem`}>
                                        <a href="/">商城</a>
                                    </li>
                                </ul>
                            </li>
                            <ul className={styles.rightSideNav}></ul>
                        </ul>
                    </nav>
                </div>
            </header>
        </div ></>)
}