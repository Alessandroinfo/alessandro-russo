import axios from 'axios';

// Configurazione delle opzioni per la chiamata API
const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {
        category: 'inspirational',   // Puoi cambiare la categoria qui
        count: '1'         // Numero di citazioni da ottenere
    },
    headers: {
        'x-rapidapi-key': '2caa9d5b8fmshadd9e729c270d4fp13d674jsn90e8d548f3a4',
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
    }
};

// Funzione per ottenere citazioni casuali
export const apiService = {
    getRandomQuote
};

// Chiamata API per ottenere citazioni casuali
function getRandomQuote() {
    return axios.request(options)
        .then(res => {
            // Estrai e formatta la risposta delle citazioni
            const quotes = res.data.map(quote => ({
                author: quote.author,
                category: quote.category,
                text: quote.text
            }));
            return quotes;
        })
        .catch(error => {
            console.error('Errore nella richiesta delle citazioni:', error);
            throw error;
        });
}
