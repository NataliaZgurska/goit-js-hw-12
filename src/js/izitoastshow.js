import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// спливаюче вікно про помилку бібліотеки iziToast
export function errorShow() {
              iziToast.show({
                    close: true,
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#FFFFFF',
                    messageSize: '10px',
                    backgroundColor: '#B51B1B',
                    position: 'center',
                    close: true,
                    timeout: 10000,
                    progressBarColor: '#FFFFFF',
                    maxWidth: '380px',
              });
}

// спливаюче вікно кінець колекції
export function theendShow() {
              iziToast.show({
                    close: true,
                    message: 'We are sorry, but you have reached the end of search results',
                    messageColor: '#FFFFFF',
                    messageSize: '10px',
                    backgroundColor: '#004ff9c7',
                    position: 'bottomCenter',
                    close: true,
                    timeout: 10000,
                    progressBarColor: '#FFFFFF',
                    maxWidth: '380px',
                 });
}