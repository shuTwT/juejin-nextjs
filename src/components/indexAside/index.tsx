import styles from './styles.module.scss'
import SigninTip from "./signinTip"
export default function IndexAside() {
    return (<>
        <aside className={`${styles.indexAside} aside`}>
            <SigninTip />
            <div className='sidebar-block banner-block'></div>
            <div className='sidebar-block banner-block'></div>
            <div className='sidebar-block banner-block app-download-sidebar-block'></div>
            <div className='sidebar-block user-block'></div>
            <div className='sidebar-block link-block'></div>
            <div className='index-aside-footer'></div>
        </aside>
    </>)
}