'use client';

import { useEffect, useState } from 'react';
import styles from './loginModal.module.css';

export default function LoginModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        if (isOpen && !window.google) {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.onload = () => {
                if (window.google && window.google.accounts && window.google.accounts.id) {
                    window.google.accounts.id.initialize({
                        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                        callback: handleCredentialResponse
                    });
                } else {
                    console.error('Google Identity Services script not loaded properly.');
                }
            };
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isOpen]);

    useEffect(() => {
        if (isLogin && window.google) {
            window.google.accounts.id.renderButton(
                document.getElementById("google-signin-button"),
                { theme: "outline", size: "large" }
            );
        }
    }, [isLogin]);

    const handleCredentialResponse = (response) => {
        console.log('Google login success:', response);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.leftPanel}>
                    <h2>{isLogin ? 'Login' : 'Crear Cuenta'}</h2>
                    {isLogin ? (
                        <form className={styles.form}>
                            <input type="text" placeholder="Username" className={styles.input} />
                            <input type="password" placeholder="Password" className={styles.input} />
                            <button type="submit" className={styles.submitButton}>Login</button>
                        </form>
                    ) : (
                        <div className={styles.createAccountContainer}>
                            <div id="google-signin-button"></div>
                        </div>
                    )}
                    <div className={styles.toggleSwitchContainer}>
                        <label className={styles.toggleSwitch}>
                            <input type="checkbox" checked={!isLogin} onChange={toggleForm} />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    <h2 className={styles.rightHeading}>Bienvenido a Peli App</h2>
                    <div className={styles.photoPlaceholder}></div>
                </div>
            </div>
        </div>
    );
}
