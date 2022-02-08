import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail([`steve`, `@`, location.hostname.replace(/www\./, '')].join(''));
    }, [setEmail]);

    function onClickContact() {
        location.href = [`mail`, `to:`, email].join('');
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta name="google-site-verification" content="ORz6tB0hkB7rktH63i-lP3KX7fzkZVGtfVpSHJfE5cY"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>kwsites.co.uk</title>
                <link rel="icon" href="/kwsites-logo.svg"/>
            </Head>

            <Image src="/kwsites-logo.svg" alt="KWSites" width={500} height={300}/>

            <p className={styles.links}>
                <a className={styles.link} href="https://github.com/steveukx/">
                    <FontAwesomeIcon className={styles.link_image} icon={faGithub}/>
                </a>
                <a className={styles.link} onClick={onClickContact}>
                    <FontAwesomeIcon className={styles.link_image} icon={faEnvelope}/>
                </a>
                <a className={styles.link} href="https://www.linkedin.com/in/steveking7/">
                    <FontAwesomeIcon className={styles.link_image} icon={faLinkedinIn}/>
                </a>
            </p>
        </div>
    );
}

export default Home
