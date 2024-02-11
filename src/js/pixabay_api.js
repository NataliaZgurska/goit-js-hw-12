import axios from 'axios';

export class PicturesAPI {
    constructor() {}
  
    async getPictures(searchText, page_number, per_page) {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
        const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=';
        const PAGE = '&page=';
        const SEARCH_PARAMS = `&q=${searchText}`;
        
        const url = `${BASE_URL}${API_KEY}${SEARCH_PARAMS}${PARAMS}${per_page}${PAGE}${page_number}`

        const response = await axios.get(url);
        return response.data;
    }

}

