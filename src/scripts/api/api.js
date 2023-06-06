import axios from 'axios';

// Headers
const headers = {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
    'Authorization': 'Token {55600df061a314e8837b6483f18af5b4a786cd37}',
};

// default conf for axios
const API = axios.create({
    // baseURL: 'https://api.paperquotes.com/apiv1/',
    baseURL: 'https://quotes.rest/',
    // headers: headers
});


// Endpoints
// const RANDOM_QUOTE = 'quotes';
const RANDOM_QUOTE = 'qod.json?category=inspire';

// Exporting services
export const apiService = {
    getRandomQuote
};

// Handle the auth
function getRandomQuote() {
    const payload = {
        maxlength: '100',
        minlength: '0',
        limit: 1
    };

    // return API.get(RANDOM_QUOTE, {params: payload})
    return API.get(RANDOM_QUOTE)
        .then(res => {
            return res;
        });
}
