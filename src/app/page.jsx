'use client';

import Banner from "@/components/bannerMovie";
import Filters from "@/components/filters";
import ShowMovies from "@/components/showMovies";
import { getMovies, getMoviesByGenre, getMoviesBySearch } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [genreId, setGenreId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movies;
        if (searchTerm) {
          movies = await getMoviesBySearch(searchTerm);
        } else if (genreId) {
          movies = await getMoviesByGenre(genreId);
        } else {
          movies = await getMovies();
        }
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
  }, [genreId, searchTerm]);

  const handleCardClick = (movie) => {
    setMovie(movie);
  };

  const handleGenreChange = (event) => {
    setSearchTerm("");
    setGenreId(event.target.value);
  };

  const handleSearchChange = (event) => {
    setGenreId(null);
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner movie={movie} />
      <div style={{ display: 'flex', backgroundColor: '#000' }}>
        <Filters
          genreId={genreId}
          searchTerm={searchTerm}
          onGenreChange={handleGenreChange}
          onSearchChange={handleSearchChange}
        />
        <ShowMovies movies={movies} onCardClick={handleCardClick} />
      </div>
    </>
  );
}
