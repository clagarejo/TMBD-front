'use client'

import Banner from "@/components/bannerMovie";
import Filters from "@/components/filters";
import ShowMovies from "@/components/showMovies";
import { getMovies, getMoviesByGenre } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [genreId, setGenreId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = genreId ? await getMoviesByGenre(genreId) : await getMovies();
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
  }, [genreId]); 

  const handleCardClick = (movie) => {
    setMovie(movie);
  };

  const handleGenreChange = (event) => {
    setGenreId(event.target.value); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner movie={movie} />
      <div style={{ display: 'flex', backgroundColor: '#000' }}>
        <Filters onGenreChange={handleGenreChange} />
        <ShowMovies movies={movies} onCardClick={handleCardClick} />
      </div>
    </>
  );
}
