import React from 'react';
import {apiService} from '../scripts/api/api'

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteText: '',
            quoteAuthor: ''
        }
    }

    componentDidMount() {
        const quotePromise = apiService.getRandomQuote();
        quotePromise.then(res => {
            this.setState({
                // quoteText: res.data.results[0].content,
                // quoteAuthor: res.data.results[0].author
                quoteText: res.data.contents.quotes[0].quote,
                quoteAuthor: res.data.contents.quotes[0].author
            });
        }).catch(function (err) {
            console.error(err);
        });
    }

    render() {
        let quote;
        let classQuote = 'p-1 overflow-hidden pt-12 text-3xl md:text-4xl justify-end w-3/4 flex flex-col leading-snug stylistic-quote-mark mx-auto font-hairline text-teal-500 italic mb-10';

        if (this.state.quoteAuthor) {
            return (
                <h4 className={classQuote}>
                    <div className={'marks'}>{this.state.quoteText}</div>
                    <span className={'ml-auto'}>- {this.state.quoteAuthor}</span>
                </h4>);
        } else {
            return (
                <h4 className={classQuote} style={{opacity: "0"}}/>);
        }
    }
}

export default Quote;
