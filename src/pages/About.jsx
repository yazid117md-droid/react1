// import React from 'react';
import styles from './../styles/About.module.css';
import CerebraImage from '../assets/Black English Logo.svg';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      description: 'Experienced entrepreneur with a passion for technology.',
      image: CerebraImage
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in React and Node.js.',
      image: CerebraImage
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      description: 'Creative designer focused on user experience and modern design.',
      image: CerebraImage
    },
    {
      name: 'Saad Fahd',
      role: 'Mdeer kbeer',
      description: 'Experienced in leading large teams and projects.',
      image: CerebraImage
    }
  ];

  return (
    <div className={styles.about}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Learn more about our company and the team behind our success.
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className={styles.companyInfo}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.description}>
                Founded in 2020, our company has been at the forefront of modern web development. 
                We specialize in creating responsive, high-performance websites and applications using React, Vite, and modern tools.
              </p>
              <p className={styles.description}>
                Our mission is to deliver exceptional digital experiences that help businesses grow and succeed. 
                We believe in clean code, modern design, and user-focused development.
              </p>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>36+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2 className={styles.teamTitle}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <img src={member.image} alt={member.name} className={styles.teamImage} />
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
                <button className={styles.contactButton}>Contact</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p className={styles.ctaDescription}>
            Get in touch with us today and let's create something amazing together.
          </p>
          <button className={styles.ctaButton}>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
