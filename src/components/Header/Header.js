import { Link } from "react-router-dom";
import styles from './Header.module.css'

function Header() {
    return (
      <header className={styles.header}>
        
          <div className={styles.logo}>
            <Link to="/">
            <img className={styles.logo_img} src="/images/logo.svg" alt="" />
            </Link>
          </div>
        
        
        <div className={styles.main}>
          <div className={styles.burger_header}>
            <img  src="/images/burger_header.svg" alt="" />
          </div>
          <div className={styles.header_content}>
            <h1>Только самые <h1 className={styles.red}>сочные бургеры!</h1></h1>
            <h2>Бесплатная доставка от 599₽</h2>
          </div>
        </div>
      </header>
    )
  }

  export default Header;