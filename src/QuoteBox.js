import React from 'react';
import './QuoteBox.css';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#'+Math.floor(Math.random()*16777215).toString(16),
            quote: '',
            author: '',
            quotes: [],
            broken: false
        };
        this.newQuote = this.newQuote.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = this.state.background;
        const ranNum = Math.floor((Math.random() * 1642));
        fetch("https://type.fit/api/quotes", {
            "method": "GET",
            "headers": {
            }
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            this.setState({
                quotes: res
            });
            this.setState({
                quote: this.state.quotes[ranNum].text,
                author: this.state.quotes[ranNum].author

            });
        })
        .catch(error => {
            console.log(error);
            this.setState({
                quote: "Oops, looks like the quote API is broken.",
                author: "Sorry",
                broken: true
            });
        })
    }


    newQuote() {
        if (!this.state.broken) {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const ranNum = Math.floor((Math.random() * 1642));
            this.setState({
                background: randomColor,
                quote: this.state.quotes[ranNum].text,
                author: this.state.quotes[ranNum].author
            }, () => {
                document.body.style.backgroundColor = this.state.background;
            });
        }
        else {
            console.log('Could not fetch quotes from quote API');
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            this.setState({
                background: randomColor,
            }, () => {
                document.body.style.backgroundColor = this.state.background;
            });
        }
    }

    render() {
        return (
            <div id="wrapper">
                <div id="quote-box" style={{color: this.state.background}}>
                    <div className="blockquote text-center" id="text">
                        <i className="quote left icon" style={{fontSize: '2rem', color: this.state.background}}></i>
                        {this.state.quote}
                    </div>
                    <br />
                    <div className="text-right" id="author">
                        -{this.state.author}
                    </div>
                    <br/>
                    <br />
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <button type="button" className="btn" id="tweet-button" style={{backgroundColor: this.state.background}}>
                                <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                                    <i className="twitter icon" style={{fontSize: '1.2rem', color: 'white'}}></i>
                                </a>
                            </button>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-5">
                            <button type="button" className="btn" id="new-quote" onClick={this.newQuote} style={{backgroundColor: this.state.background}}>
                                New Quote
                            </button>
                        </div>
                    </div> 
                </div>
                <br />
                <p>By <em>Kiredroffas</em></p>
            </div>
        );
    }
};

export default QuoteBox;