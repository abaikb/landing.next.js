'use client'
import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image src='/logo.PNG' alt="Logo" width={100} height={40} className={styles.logo} />
                <h2>Global Lab</h2>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                {isMenuOpen && <button className={styles.closeMenu} onClick={closeMenu}>X</button>}
                <Link href="/#services">Услуги</Link>
                <Link href="/#works">Работы</Link>
                <Link href="/#workflows">Workflows</Link>
                <Link href="/#contacts">Контакты</Link>
                {isMenuOpen && (
                    <div className={styles.socialLinks}>
                        <a href="facebook-link" target="_blank">Facebook</a>
                        <a href="instagram-link" target="_blank">Instagram</a>
                        <a href="linkedin-link" target="_blank">LinkedIn</a>
                        <a href="whatsapp-link" target="_blank">WhatsApp</a>
                        <div className={styles.languageMobile}>
                            <button className={styles.languageButton}  onClick={closeMenu} type="button">RU</button>
                            <button className={styles.languageButton}  onClick={closeMenu} type="button">EN</button>
                        </div>
                    </div>
                )}
            </nav>
            <div className={styles.languageContainer}>
                <button className={styles.languageButton} type="button">RU</button>
                <button className={styles.languageButton} type="button">EN</button>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
            </div>
        </header>
    );
};

export default Header;
