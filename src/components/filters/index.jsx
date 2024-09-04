import { useEffect, useState } from 'react';
import { getGenres } from '@/services';
import styles from './filter.module.css';

export default function Filters() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const fetchedGenres = await getGenres();
                setGenres(fetchedGenres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles.section}>
            <div className={styles.searchContainer}>
                <h2 className={styles.heading}>Buscador</h2>
                <input
                    type="search"
                    placeholder="Buscar película..."
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.selectContainer}>
                <h2 className={styles.heading}>Seleccionar géneros</h2>
                <select className={styles.selectInput}>
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
