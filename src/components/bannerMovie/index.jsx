import styles from './banner.module.css';

export default function Banner({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const roundedPercentage = Math.round(movie.vote_average * 10);

  const rotateValue = (roundedPercentage / 100) * 360;

  return (
    <main className={styles.main} style={{ backgroundImage: `url(${imageUrl})` }}>
      <section className={styles.section}>
        <p className={styles.description}>
          <span>{movie.title}</span> <br />
          <span>{movie.overview}</span>
        </p>

        <div className={styles.iconContainer}>
          <span className={styles.icon}> ❤️ </span>
          <div className={styles.circleContainer}>
            <div className={styles.circle} style={{ transform: `rotate(${rotateValue}deg)` }}></div>
            <div className={styles.circleInner} style={{ transform: `rotate(${rotateValue > 180 ? 180 : rotateValue}deg)` }}></div>
            <span className={styles.circlePercentage}>{roundedPercentage}%</span>
          </div>
        </div>
      </section>
    </main>
  );
}
