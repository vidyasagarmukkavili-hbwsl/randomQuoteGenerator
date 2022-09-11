import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // State Variables go here:
    this.state = {
      quoteText: "Initial text",
      quoteAuthor: "Initial author",
    };

    this.fetchQuote = this.fetchQuote.bind(this);
  }

  // Accessing the fetchQuote() method inside the componentDidMount() Lifecycle method
  componentDidMount() {
    this.fetchQuote();
  }


  fetchQuote() {
    let tempText = "Temptext";              // tempText  is just there for testing and changing the state value
    let tempAuthor = "Tempauthor";          // tempAuthor is just there for testing and changing the state value

    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let quoteIndex = Math.floor(Math.random() * data.length);

        const newquoteText = data[quoteIndex].text;
        const newquoteAuthor = data[quoteIndex].author;

        tempAuthor = newquoteAuthor;
        tempText = newquoteText;

        // data
        console.log(tempText);
        console.log(tempAuthor);

        // Setting the state variables here:
        // This part is not working

        this.setState({
          quoteText: tempText,
          quoteAuthor: tempAuthor,
        });


      }) // closing the .then for data
      .catch((error) => {
        console.log("There was some error here");
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="container__box">
            <div className="quote-left"></div>
            <p className="quote__paragraph">
              {this.state.quoteText}  
              {/* Setting the Quote Text here */}
            </p>
            <div className="quote-author">
              -{" "}
              <span id="author">
                {this.state.quoteAuthor}
                {/* Setting the Author here */}
              </span>
            </div>

            <div className="buttons">
              <div className="socials">
                <a className="button" id="tweet-quote" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="button" id="tumblr-quote" href="#">
                  <i className="fa-brands fa-tumblr"></i>
                </a>
              </div>
              <button
                onClick={this.fetchQuote}
                className="button"
                id="new-quote"
              >
                New quote
              </button>
            </div>
          </div>

          <div className="footer">
            by{" "}
            <a href="#" className="link">
              Vidya Sagar 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
