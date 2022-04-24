import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '25304871-df2e19bed09fd25767dfbf1e2';

export const fetchApi = async (page, searchQuery) => {
    const response = await axios.get(`/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const mappedImg = response.data.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
            id,
            webformatURL,
            largeImageURL
        })
    );

    if (response.data.total === 0) {
    return Promise.reject(new Error('Something get wrong!'));
  }
  return mappedImg;
    
};

fetchApi.propTypes = {
    page: PropTypes.number.isRequired,
    searchQuery: PropTypes.string.isRequired
}