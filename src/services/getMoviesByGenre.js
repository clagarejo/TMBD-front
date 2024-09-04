import axios from 'axios';

export const getMoviesByGenre = async (genreId) => {
    try {
        const response = await axios.get(`http://localhost:3000/filters/movies/${genreId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies by genre:', error);
    }
}
