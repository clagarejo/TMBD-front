'use client'

import Banner from "@/components/bannerMovie";
import Filters from "@/components/filters";
import ShowMovies from "@/components/showMovies";
import { getMovies } from "@/services/getMovies";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
        if (movies.length > 0) {
          setMovie(movies[0]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (movie) => {
    setMovie(movie);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner movie={movie} />
      <div style={{ display: 'flex', backgroundColor: '#000' }}>
        <Filters />
        <ShowMovies movies={movies} onCardClick={handleCardClick} />
      </div>
    </>
  );
}
