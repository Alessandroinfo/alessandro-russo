import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: { category: 'inspirational', count: '1' },
    headers: {
        'x-rapidapi-key': 'your-api-key',
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
    }
};

export const apiService = {
    getRandomQuote
};

function getRandomQuote() {
    return axios.request(options)
        .then(res => {
            const quotes = res.data.map((quote: { author: any; category: any; text: any; }) => ({
                author: quote.author,
                category: quote.category,
                text: quote.text
            }));
            return quotes;
        })
        .catch(error => {
            console.error('Error fetching quotes:', error);
            throw error;
        });
}
