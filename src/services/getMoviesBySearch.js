import axios from 'axios';

export const getMoviesBySearch = async (search) => {
    try {
        const response = await axios.get(`http://localhost:3000/filters/search?query=${search}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies by search:', error);
    }
}
