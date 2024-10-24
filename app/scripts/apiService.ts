import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: { category: 'inspirational', count: '1' },
    headers: {
        'x-rapidapi-key': '2caa9d5b8fmshadd9e729c270d4fp13d674jsn90e8d548f3a4',
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
    }
};

export const apiService = {
    getRandomQuote
};

async function getRandomQuote() {
    try {
        let res = await axios.request(options);
        const quotes = res.data.map((quote: { author: any; category: any; text: any; }) => ({
            author: quote.author,
            category: quote.category,
            text: quote.text
        }));
        return quotes;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        throw error;
    }
}
