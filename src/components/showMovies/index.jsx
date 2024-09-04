
import styles from './movies.module.css'; 

export default function ShowMovies({ movies, onCardClick  }) {
    return (
        <div className={styles.cardContainer}>
            {movies.map((movie) => (
                <div className={styles.card} key={movie.id}>
                    <img 
                        className={styles.cardImage} 
                        onClick={() => onCardClick(movie)} 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                    />
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{movie.title}</h3>
                        <p className={styles.cardRating}>Rating: {movie.vote_average * 10}%</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
