import axios from 'axios';

export class PicturesAPI {
    constructor() {}
  
    async getPictures(searchText) {
        const BASE_URL = 'https://pixabay.com/api';
        const API_KEY = '/?key=42190673-143cbde4cd6a94de75e31d0a4';
        const PARAMS = '&image_type=photo&orientation=horizontal&safesearch=true';
        const SEARCH_PARAMS = `&q=${searchText}`;
        
        const url = BASE_URL + API_KEY + SEARCH_PARAMS + PARAMS; 

        const response = await axios.get(url);
        console.log('Запит на сервер', response.data);
        return response.data;
    }

}

