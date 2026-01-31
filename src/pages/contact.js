import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '../components/HomepageFeatures/styles.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:luca.garello@iit.it?subject=${encodeURIComponent(subject || 'Contact Request from AlterEgo Site')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Layout title="Contact Us" description="Get in touch with the AlterEgo team">
      <main>
        <section className={styles.teamSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center margin-bottom--xl">
                  <Heading as="h1" className={styles.sectionTitle}>
                    Contact Us
                  </Heading>
                  <p className={styles.sectionSubtitle} style={{ marginTop: '1rem' }}>
                    We'd love to hear from you! Whether you have questions about AlterEgo, 
                    are interested in collaboration, or just want to learn more about our work.
                  </p>
                </div>
                
                <div className="card shadow--md" style={{ zIndex: 1, position: 'relative' }}>
                  <div className="card__body">
                    <form onSubmit={handleSubmit}>
                      <div className="margin-bottom--md">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="button--block"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="margin-bottom--md">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="button--block"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="margin-bottom--md">
                        <label htmlFor="subject"><strong>Subject</strong></label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="button--block"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="margin-bottom--lg">
                        <label htmlFor="message"><strong>Message</strong></label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid var(--ifm-color-emphasis-300)' }}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="text--center">
                        <button type="submit" className="button button--primary button--lg">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="margin-top--xl text--center" style={{ position: 'relative', zIndex: 1 }}>
                  <Heading as="h2" className={styles.sectionTitle} style={{ fontSize: '2.5rem' }}>
                    Our Office
                  </Heading>
                  <p className="margin-top--md">
                    <strong>IIT - Istituto Italiano di Tecnologia</strong><br />
                    Via Morego, 30, 16163 Genova GE, Italy<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
