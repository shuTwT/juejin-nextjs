import Image from 'next/image'
import styles from './styles.module.scss'
import NotificationIcon from '../icon/notificationIcon'
import DropdownMenu from './dropdownMenu'
import Unfold from '../icon/unfold'
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
                            <ul className={styles.rightSideNav}>
                                <li className={styles.searchAdd}>
                                    <ul className={`${styles.searchAddUl} isResourceVisible`}>
                                        <li className={`${styles.navItem} ${styles.search}`}>
                                            <form role="search" action="" className={`${styles.searchForm} isResourceVisible`}>
                                                <input type="search" maxLength={32} placeholder="探索稀土掘金" className={`${styles.searchInput} isResourceVisible`} />
                                                <div className={styles.searchIconContainer}>
                                                    <img src="/1e8ab9a22f0ddc36349f60b38900d0bd.svg" alt="搜索" className={styles.searchIcon} />
                                                </div>
                                                <div className={styles.typehead} style={{ display: "none" }}>
                                                    <div className={styles.searchAnnual} >
                                                        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a41831fce8b4c838f1807b2c86aea06~tplv-k3u1fbpfcp-zoom-1.image" alt="" className={styles.searchAnnualImg} />
                                                        <span className={styles.searchAnnualTxt} >
                                                            开启我的2022年度报告
                                                        </span>
                                                    </div>
                                                    <div className="title">
                                                        <span >搜索历史</span>
                                                        <span className="clear">
                                                            清空
                                                        </span>
                                                    </div>
                                                    <div className="list">
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </li>
                                        <li className={`${styles.navItem} ${styles.add} ${styles.creatorItem}`}>
                                            <div className={styles.addGroup}>
                                                <button className={styles.addBtn}>创作者中心</button>
                                                <div className={styles.more}>
                                                    <Unfold></Unfold>
                                                </div>
                                                <ul className={styles.moreList}></ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${styles.navItem} ${styles.vipEntry}`}>
                                    <div className={styles.vipTitle}>
                                        <div className={styles.vipEntryImg}>
                                            <img src="/24127194d5b158d7eaf8f09a256c5d01.svg" alt="vip" className='vipImg' />
                                        </div>
                                        <div className={styles.vipWords}>会员</div>
                                    </div>
                                </li>
                                <li className={`${styles.navItem} ${styles.notification}`}>
                                    <a href="/notification">
                                        <NotificationIcon></NotificationIcon>
                                    </a>
                                    <DropdownMenu></DropdownMenu>
                                </li>
                                <li className={`${styles.navItem} menu`}></li>
                                <li className={`${styles.navItem} ${styles.auth}`}>
                                    <div className={styles.loginButtonWrap}>
                                        <button className={styles.loginButton}>
                                            登录
                                            <div className={styles.loginButtonInner}>
                                                <div className={styles.loginButtonLine}>
                                                </div>
                                                注册
                                            </div>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </nav>
                </div>
            </header>
        </div ></>)
}