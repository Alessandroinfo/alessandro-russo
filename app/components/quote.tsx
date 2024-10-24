import React, { useEffect, useState } from 'react';
import { apiService } from '../scripts/apiService';

const Quote = () => {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');

    useEffect(() => {
        apiService.getRandomQuote().then(res => {
            setQuoteText(res[0].text);
            setQuoteAuthor(res[0].author);
        }).catch(err => {
            console.error(err);
        });
    }, []);

    return (
        <h4 className="p-1 overflow-hidden pt-12 text-3xl md:text-4xl justify-end w-3/4 flex flex-col leading-snug stylistic-quote-mark mx-auto font-hairline text-teal-500 italic mb-10">
            <div className="marks">{quoteText}</div>
            <span className="ml-auto">- {quoteAuthor}</span>
        </h4>
    );
};

export default Quote;
