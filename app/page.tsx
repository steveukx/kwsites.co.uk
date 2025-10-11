'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Home.module.css';

export default function HomePage() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(['steve', '@', window.location.hostname.replace(/www\./, '')].join(''));
  }, []);

  return (
    <div className={styles.container}>
      <Image src="/kwsites-logo.svg" alt="KWSites" width={500} height={300} priority />

      <p className={styles.links}>
        <a className={styles.link} href="https://github.com/steveukx/">
          <FontAwesomeIcon className={styles.link_image} icon={faGithub} />
        </a>
        <a className={styles.link} href={`mailto:${email || ''}`} aria-label="Email Steve">
          <FontAwesomeIcon className={styles.link_image} icon={faEnvelope} />
        </a>
        <a className={styles.link} href="https://www.linkedin.com/in/steveking7/">
          <FontAwesomeIcon className={styles.link_image} icon={faLinkedinIn} />
        </a>
      </p>
    </div>
  );
}
