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
      { name: 'Manuel Catalano', role: 'Senior Scientist', image: '/img/people/Catalano.jpeg' },
      { name: 'Giorgio Grioli', role: 'Senior Scientist', image: '/img/people/Grioli.jpg' },
    ]
  },
  {
    title: 'Researchers',
    members: [
      { name: 'Luca Garello', role: 'Post-doc Researcher', image: '/img/people/Garello.jpeg' },
      { name: 'Eleonora Sguerri', role: 'Senior Technician', image: '/img/people/Sguerri.jpeg' },
      { name: 'Manuel Barbarossa', role: 'Chief Technician', image: '/img/people/Barbarossa.jpeg' },
      { name: 'Cristiano Petrocelli', role: 'Senior Technician', image: '/img/people/Petrocelli.jpeg' },
      { name: 'Samuele Bordini', role: 'PhD Student', image: '/img/people/Bordini.jpeg' },
      { name: 'Do Won Park', role: 'PhD Student', image: '/img/people/Park.jpeg' },
      { name: 'Riccardo Simi', role: 'PhD Student', image: '/img/people/Simi.jpeg' },
      { name: 'Nikolas Helling', role: 'Fellow Researcher', image: '/img/people/helling.jpg' },
      { name: 'Gabriele Ribolla', role: 'Fellow Researcher', image: '/img/people/ribolla.jpg' },
      { name: 'Daniele Taglietti', role: 'Fellow Researcher', image: '/img/people/taglietti.png' },
    ]
  },
  {
    title: 'Collaborators',
    members: [
      { name: 'Francesco Rea', role: 'Senior Scientist', image: '/img/people/Rea.jpeg' },
      { name: 'Alessandra Sciutti', role: 'Senior Scientist', image: '/img/people/Sciutti.jpeg' },
      { name: 'Francesca Cocchella', role: 'PhD Student', image: '/img/people/Cocchella.jpeg' },

    ]
  },
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
    <Layout title="Team" description="The brilliant minds behind AlterEgo">
      <main>
        <section className={styles.teamSection}>
          <div className="container">
            <div className="text--center margin-bottom--xl">
              <Heading as="h1" className={styles.sectionTitle}>Meet the Team</Heading>
              <p className={styles.sectionSubtitle}>The brilliant minds behind AlterEgo.</p>
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
