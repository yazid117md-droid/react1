import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoText}>YourBrand</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className={styles.mobileMenu}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className={styles.desktopNav}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path ? styles.active : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${styles.mobileNavLink} ${
                  location.pathname === link.path ? styles.active : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar