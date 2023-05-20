import Logo from '../Assets/Logo.svg'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header_container}>
      {/* Flex Child 1 */}
      <div className={styles.header_logo}>
        <a href='localhost:5173/'>
          <div className={styles.logo_container}>
            <img src={Logo} alt='logo' />
          </div>
        </a>
      </div>
      {/* Flex Child 2 */}
      <nav className={styles.navbar}>
        <a className={styles.nav_links} href='#'>
          Plans
        </a>
        <a className={styles.nav_links} href='#'>
          Find Domain
        </a>
        <a className={styles.nav_links} href='#'>
          Why Hosterr
        </a>
      </nav>

      {/* Flex Child 3 */}
      <div className={styles.user_container}>
        <div className={styles.sign_in}>Sign In</div>
        <div className={styles.sign_up}>Join Waitlist</div>
      </div>
    </header>
  )
}

export default Header
