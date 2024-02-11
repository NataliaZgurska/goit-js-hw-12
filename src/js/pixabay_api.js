import axios from 'axios';

export class PicturesAPI {
    constructor() {}
  
    async getPictures(searchText, page_number) {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
        const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true';
        const PER_PAGE = '&per_page=15';
        const PAGE = '&page=';
        // let page_number = 1;
        const SEARCH_PARAMS = `&q=${searchText}`;
        
    
        const url = `${BASE_URL}${API_KEY}${SEARCH_PARAMS}${PARAMS}${PER_PAGE}${PAGE}${page_number}`

        const response = await axios.get(url);
        console.log('Запит на сервер', response.data);
        return response.data;
    }

}

