import React, {useEffect, useState} from 'react';
import {apiService} from '../scripts/apiService';

const Quote = () => {
    const [quoteText, setQuoteText] = useState('');
    const [quoteAuthor, setQuoteAuthor] = useState('');
    const [isVisible, setIsVisible] = useState(false); // State to manage text visibility

    useEffect(() => {
        apiService.getRandomQuote().then(res => {
            setQuoteText(res[0].text);  // Set the quote text
            setQuoteAuthor(res[0].author);  // Set the author of the quote
            setIsVisible(true);  // Show the text after loading
        }).catch(err => {
            console.error(err);  // Log any errors during API call
        });
    }, []);

    return (
        <h4
            className={`p-1 overflow-hidden pt-12 text-3xl md:text-4xl justify-end w-3/4 ease-in flex flex-col leading-snug stylistic-quote-mark mx-auto font-thin text-teal-500 italic mb-10 ${isVisible ? 'ease-in' : 'opacity-0'}`}
        >
            <div className="marks">{quoteText}</div>
            <span className="ml-auto">- {quoteAuthor}</span>
        </h4>
    );
};

export default Quote;
