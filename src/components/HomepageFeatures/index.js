import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faHandsHelping, 
  faCompass, 
  faLanguage, 
  faHeartbeat, 
  faGraduationCap,
  faBuildingColumns,
  faFishFins,
  faArrowRight,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';

const FeatureList = [
  {
    title: 'A Living AI',
    icon: faBrain,
    color: '#6366f1', // Indigo
    description: (
      <>
        Our proprietary cognitive architecture allows AlterEgo to learn from interactions and adapt to your personality and preferences.
      </>
    ),
  },
  {
    title: 'Safe By Design',
    icon: faHandsHelping,
    color: '#ec4899', // Pink
    description: (
      <>
        Thanks to its variable stiffness actuators and sophisticated sensors, AlterEgo can interact with the world in a natural and safe manner.
      </>
    ),
  },
  {
    title: 'Smart Navigation',
    icon: faCompass,
    color: '#3b82f6', // Blue
    description: (
      <>
        Utilizes advanced sensors and mapping technology to navigate complex environments with ease.
      </>
    ),
  },
  {
    title: 'Multilingual Capabilities',
    icon: faLanguage,
    color: '#8b5cf6', // Purple
    description: (
      <>
       Fluent in over 50 languages with real-time translation, making AlterEgo the perfect companion for global citizens.
      </>
    ),
  },
  {
    title: 'Teleoperation Ready',
    icon: faGamepad,
    color: '#10b981', // Green
    description: (
      <>
        You are always in control. AlterEgo can be teleoperated remotely, allowing you to be present anywhere, anytime.
      </>
    ),
  },
  {
    title: 'Personal Tutor',
    icon: faGraduationCap,
    color: '#f59e0b', // Yellow
    description: (
      <>
        AlterEgo can answer questions and provide explanations.
        It's long experience as museum guide makes it an excellent educational companion.
      
      </>
    ),
  },
];

const GalleryList = [
  {
    title: "Italia's Got Talent",
    video: 'https://www.youtube.com/embed/DJGeX3ddcJY?si=0U41T2c3xtEfRDGh',
    description: 'AlterEgo showcased its skills on a popular talent show, impressing judges and audiences alike.',
  },
  {
    title: 'Muschio Selvaggio',
    video: 'https://www.youtube.com/embed/1JmQZO3mBEo?si=anhnLUzBDaGcKOU6&amp;start=80',
    description: 'AlterEgo has been teleoperated from Milan during an episode of Muschio Selvaggio.',
  },
  {
    title: 'Aquarium Guide',
    video: 'https://www.youtube.com/embed/dukKL50JNT4?si=Ba-C_zm6iI7DNZWp',
    description: 'AlterEgo can provide information about marine life, answer questions, and enhance the visitor experience.',
  },
];

const PartnerList = [
    {
    name: 'Kilometro Rosso',
    image: '/logos/kilometro_rosso.png',
  },
  {
    name: 'Confcommercio',
    image: '/logos/confcommercio.png',
  },
  {
    name: 'Acquario di Genova',
    image: '/logos/acquario.png',
  },
  {
    name: 'Museo Galata',
    image: '/logos/Galata.png',
  },
  {
    name: 'IRCCS Maugeri',
    image: '/logos/Maugeri.png',
  },
  {
    name: 'Stella Maris',
    image: '/logos/stella_maris.png',
  },

];

function Feature({icon, title, description, color}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard} style={{'--icon-color': color, '--icon-bg-color': `${color}15`}}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} className={styles.featureIcon} />
        </div>
        <div className="padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        {/* THIS IS THE LEARN MORE LINK BELOW - ENABLE IF YOU NEED TO EXPLAIN THE FEATURE MORE */}
        {/* <div className={styles.learnMore}>
          <span>Explore technology</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles.learnMoreIcon} />
        </div> */}
      </div>
    </div>
  );
}

function GalleryItem({ icon, title, description, video }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.galleryCard}>
        <div className={styles.galleryMedia}>
          {video ? (
            <iframe
              src={video}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.galleryVideo}
            ></iframe>
          ) : (
            <FontAwesomeIcon icon={icon} className={styles.galleryIcon} />
          )}
        </div>
        <div className={styles.galleryBody}>
          <Heading as="h3" className={styles.galleryTitle}>{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function Partner({ name, icon, image }) {
  return (
    <div className={styles.partnerItem}>
      <div className={styles.partnerLogoPlaceholder}>
        {image ? (
          <img src={useBaseUrl(image)} alt={name} className={styles.partnerLogo} />
        ) : (
          <FontAwesomeIcon icon={icon} className={styles.partnerIcon} />
        )}
      </div>
    </div>
  );
}

/////////////////////











export default function HomepageFeatures() {
  return (
    <div className={styles.homepageWrapper}>
      <section className={styles.features}>
        <div className="container">
          <div className="text--center margin-bottom--xl">
              <Heading as="h2" className={styles.sectionTitle}>Revolutionary Features</Heading>
              <p className={styles.sectionSubtitle}>AlterEgo combines cutting-edge technology with intuitive design to create the most advanced humanoid companion.</p>
          </div>
          <div className={clsx('row', styles.featureGrid)}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2" className={styles.sectionTitle}>AlterEgo in Action</Heading>
            <p className={styles.sectionSubtitle}>See how AlterEgo integrates seamlessly into daily life, from public assistance to personal companionship.</p>
          </div>
          <div className="row">
            {GalleryList.map((props, idx) => (
              <GalleryItem key={idx} {...props} />
            ))}
          </div>
          <div className="text--center margin-top--xl">
            <button className={clsx('button button--primary button--lg', styles.galleryButton)}>
              Check our YouTube Channel
              <FontAwesomeIcon icon={faArrowRight} className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <div className="container">
          <div className="text--center">
            <Heading as="h2" className={styles.sectionTitle}>Our Partners</Heading>
            <p className={styles.sectionSubtitle}>We collaborate with leading institutions and companies to push the boundaries of robotics.</p>
          </div>
          <div className={styles.partnersGrid}>
            {PartnerList.map((props, idx) => (
              <Partner key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
