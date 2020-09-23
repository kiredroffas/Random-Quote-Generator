import React from 'react';
import './QuoteBox.css';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#'+Math.floor(Math.random()*16777215).toString(16),
            quote: 'Do or do not, there is no try.',
            author: 'Yoda man'
        };
        this.newQuote = this.newQuote.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = this.state.background;
    }


    newQuote() {
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.setState({
            background: randomColor,
        }, () => {
            document.body.style.backgroundColor = this.state.background;
        }); 
    }

    render() {
        return (
            <div id="wrapper">
                <div id="quote-box" style={{color: this.state.background}}>
                    <div className="blockquote text-center" id="text">
                        "{this.state.quote}"
                    </div>
                    <br />
                    <div className="text-right" id="author">
                        -{this.state.author}
                    </div>
                    <br/>
                    <br />
                    <div className="row align-items-center">
                        <div className="col-sm-4">
                            <button type="button" className="btn" id="tweet-button">
                                <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                                    <i className="twitter icon" style={{fontSize: '1.2rem', color: 'white'}}></i>
                                </a>
                            </button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button type="button" className="btn" id="new-quote" onClick={this.newQuote}>
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