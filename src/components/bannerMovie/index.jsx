import styles from './banner.module.css'

export default function Banner({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <main className={styles.main} style={{ backgroundImage: `url(${imageUrl})` }}>
      <section className={styles.section}>
        <p className={styles.description}>
          <span>{movie.title}</span> <br />
          <span>{movie.overview}</span>
        </p>

        <div className={styles.iconContainer}>
          <span className={styles.icon}>Icono para dar me gusta</span>
          <span className={styles.icon}>Percent: {movie.vote_average}</span>
        </div>
      </section>
    </main>
  );
}
