import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css'


const Header = () =>{


    return(
    <header className={styles.header}>
        <div className="container">
            <div className={` row ${styles.row}`}>
        <div className="header-logo">
            
            <a href="/">
            <img src={logo} alt="" className="logo-img" /></a>
        </div>
        <div className="header-select">
            <select>
                <option value="units">Units</option>
                </select>
        </div>
        </div>
        </div>
    </header>
    )
}

export default Header;