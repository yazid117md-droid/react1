// About page component with company information and team section
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './../styles/About.module.css'
import CerebraImage from '../assets/Black English Logo.svg'
const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      description: 'Experienced entrepreneur with a passion for technology.'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in React and Node.js.'
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      description: 'Creative designer focused on user experience and modern design.'
    },
    {
      name: 'Saad Fahd',
      role: 'Mdeer kbeer',
      description: 'Creative designer focused on user experience and modern design.'
    }
  ]

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
                Founded in 2020, our company has been at the forefront of 
                modern web development. We specialize in creating responsive, 
                high-performance websites and applications using the latest 
                technologies like React, Vite, and Tailwind CSS.
              </p>
              <p className={styles.description}>
                Our mission is to deliver exceptional digital experiences that 
                help businesses grow and succeed in the digital world. We believe 
                in clean code, modern design, and user-focused development.
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>36y789+</span>
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
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="card bg-base-100 image-full w-96 shadow-sm mx-auto">
          <figure>
            <img
              src={member.image || CerebraImage}
              alt={member.name}
              className="object-contain w-full max-h-14"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{member.name}</h2>
            <p className="text-blue-600 font-medium">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
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
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

export default About