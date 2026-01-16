import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../components/HomepageFeatures/styles.module.css';

const TeamCategories = [
  {
    title: 'Leadership',
    members: [
      { name: 'Antonio Bicchi', role: 'Senior Scientist', image: '/img/people/Bicchi.jpeg' },
      { name: 'Manuel Catalano', role: 'Researcher', image: '/img/people/Catalano.jpeg' },
      { name: 'Giorgio Grioli', role: 'Researcher', image: '/img/people/Grioli.jpg' },
    ]
  },
  {
    title: 'Researchers',
    members: [
      { name: 'Luca Garello', role: 'Post-doc Researcher', image: '/img/people/Garello.jpeg' },
      { name: 'Eleonora Sguerri', role: 'Team Leader', image: '/img/people/Sguerri.jpeg' },
      { name: 'Manuel Barbarossa', role: 'Senior Technician', image: '/img/people/Barbarossa.jpeg' },
      { name: 'Cristiano Petrocelli', role: 'Senior Technician', image: '/img/people/Petrocelli.jpeg' },
            { name: 'Samuele Bordini', role: 'PhD Student', image: '/img/people/Bordini.jpeg' },
      { name: 'Do Won Park', role: 'PhD Student', image: '/img/people/Park.jpeg' },
      { name: 'Riccardo Simi', role: 'PhD Student', image: '/img/people/Simi.jpeg' },
    ]
  },
//   {
//     title: 'Technical Team',
//     members: [

//     ]
//   },
//   {
//     title: 'PhD Students',
//     members: [

//     ]
//   }
];

function TeamMember({ name, role, image }) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg')}>
      <div className={styles.teamMemberCard}>
        <div className={styles.teamMemberImageContainer}>
          <img src={useBaseUrl(image)} alt={name} className={styles.teamMemberImage} />
          <div className={styles.teamMemberOverlay}></div>
        </div>
        <div className={styles.teamMemberInfo}>
          <Heading as="h4" className={styles.teamMemberName}>{name}</Heading>
          <p className={styles.teamMemberRole}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <Layout title="Team" description="The brilliant minds behind Alter-Ego">
      <main>
        <section className={styles.teamSection}>
          <div className="container">
            <div className="text--center margin-bottom--xl">
              <Heading as="h1" className={styles.sectionTitle}>Meet the Team</Heading>
              <p className={styles.sectionSubtitle}>The brilliant minds behind Alter-Ego robot project.</p>
            </div>
            
            {TeamCategories.map((category, idx) => (
              <div key={idx} className="margin-bottom--xl">
                <div className={styles.categoryHeader}>
                  <Heading as="h2">{category.title}</Heading>
                </div>
                <div className="row">
                  {category.members.map((member, mIdx) => (
                    <TeamMember key={mIdx} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
