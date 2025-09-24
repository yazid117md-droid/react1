import React from 'react';
import styles from './../styles/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Simplified & Secure User Authentication — Powered by mPass Lite
          </h1>
          <p className={styles.heroSubtitle}>
            Built with React, Vite, and modern tools. Fully responsive and ready for your projects.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/about" className={styles.heroLink}>
              Learn More
            </Link>
            <button className={styles.heroButton}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>Why Choose Us?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureName}>Modern Design</h3>
              <p className={styles.featureDescription}>
                Clean, modern design that works on all devices and screen sizes.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureName}>Fast Performance</h3>
              <p className={styles.featureDescription}>
                Optimized for speed with Vite and modern build tools.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureName}>Easy to Customize</h3>
              <p className={styles.featureDescription}>
                Well-structured code that's easy to modify and extend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
