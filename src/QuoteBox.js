import React from 'react';
import './QuoteBox.css';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = "green";
    }

    render() {
        const quote = 'Do or do not, there is no try.';
        const author = 'Yoda man';

        return (
            <div id="wrapper">
                <div id="quote-box">
                    <div className="blockquote text-center" id="text">
                        "{quote}"
                    </div>
                    <div className="text-right" id="author">
                        -{author}
                    </div>
                    <br/>
                    <br />
                    <div className="row">
                        <div className="col-sm-4">
                            <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                                <i className="twitter icon" style={{fontSize: '2rem'}}></i>
                            </a>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button type="button" className="btn" id="new-quote">
                                New Quote
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
};

export default QuoteBox;