'use client'

import { useState } from 'react';
import styles from './loginModal.module.css';

export default function LoginModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        }); // Reset form when switching
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login data:', formData);
        } else {
            console.log('Register data:', formData);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.leftPanel}>
                    <h2>{isLogin ? 'Login' : 'Crear Cuenta'}</h2>
                    {isLogin ? (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                            <button type="submit" className={styles.submitButton}>
                                Login
                            </button>
                        </form>
                    ) : (
                        <div className={styles.createAccountContainer}>
                            <button
                                type="button"
                                className={styles.emailButton}
                                onClick={() => console.log('Sign in with Email')}
                            >
                                Iniciar Sesión con Correo Electrónico
                            </button>
                        </div>
                    )}
                    <label className={styles.toggleSwitch}>
                        <input type="checkbox" onClick={toggleForm} />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <div className={styles.rightPanel}>
                    <h2 className={styles.rightHeading}>Bienvenido a Peli App</h2>
                    <div className={styles.photoPlaceholder}>
                        {/* Aquí puedes agregar una foto */}
                    </div>
                </div>
            </div>
        </div>
    );
}


