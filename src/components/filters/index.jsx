'use client'

import styles from './filter.module.css';
import { useEffect, useState } from 'react';
import { getGenres } from '@/services'; 

export default function Filters({ onGenreChange, onSearchChange  }) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genres = await getGenres();
                setGenres(genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <section className={styles.section}>
             <div className={styles.searchContainer}>
                <h2 className={styles.heading}>Buscador</h2>
                <input
                    type="search"
                    placeholder="Buscar película..."
                    className={styles.searchInput}
                    onChange={onSearchChange}
                />
            </div>

            <div className={styles.selectContainer}>
                <h2 className={styles.heading}>Seleccionar géneros</h2>
                <select className={styles.selectInput} onChange={onGenreChange}>
                    <option value="">Selecciona un género</option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}
