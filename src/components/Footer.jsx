
import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import styles from '../styles/Footer.module.css'

const Footer = ({ links }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandTitle}>YourBrand</h3>
            <p className={styles.brandDescription}>
              Building amazing web experiences with React and modern tools.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <div className={styles.linksList}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={styles.footerLink}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer