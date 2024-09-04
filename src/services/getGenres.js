import axios from 'axios';

export const getGenres = async () => {
    try {
        const response = await axios.get('http://localhost:3000/filters/genres'); 
        return response.data;
    } catch (error) {
        console.error('Error fetching genres:', error);
    }
}
