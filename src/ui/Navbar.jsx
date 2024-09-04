'use client'


import { useState } from 'react';
import Link from "next/link";
import styles from './navbar.module.css';
import LoginModal from '@/components/Login';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href={`/`}>
                <h1 className={styles.title}>Peli App</h1>
              </Link>
            </li>
            <li className={styles.routerMovies}>
              <Link href={`/pages/favorites`}>Favoritas</Link>
            </li>
            <li className={styles.routerMovies}>
              <Link href={`/pages/populars`}>Populares</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.loginContainer}>
          <span onClick={openModal} className={styles.login}>Login</span>
        </div>
      </main>
      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
