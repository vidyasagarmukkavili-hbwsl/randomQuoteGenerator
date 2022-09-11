import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    // State Variables go here:
    this.state = {
      quoteText: "Loading..",
      quoteAuthor: "",
      elementColor: "pink",
    };

    this.fetchQuote = this.fetchQuote.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  // Accessing the API inside the componentDidMount Lifecycle method
  componentDidMount() {
    // console.log("The component has mounted");
    this.fetchQuote();
    this.handleColor();
  }

  handleColor = () => {
    // colors for changing colors:
    let ecolors = [
      "#32161C",
      "#142C44",
      "#216C6C",
      "#551143",
      "#3E1C50",
      "#2A0C0C",
      "#48873A",
      "#3B3A33",
    ];
    let colorIndex = Math.floor(Math.random() * ecolors.length);

    this.setState((state) => ({
      elementColor: ecolors[colorIndex],
    }));
  };

  fetchQuote = () => {
    this.handleColor();

    let tempText = "Temptext";
    let tempAuthor = "Tempauthor";

    var self = this;

    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let quoteIndex = Math.floor(Math.random() * data.length);

        // console.log(data);

        const newquoteText = data[quoteIndex].text;
        const newquoteAuthor = data[quoteIndex].author;

        tempAuthor = newquoteAuthor;
        tempText = newquoteText;

        // data
        console.log(tempText);
        console.log(tempAuthor);

        // Setting the state variables here:

        self.setState({
          quoteText: tempText,
          quoteAuthor: tempAuthor,
        });
      }) // closing the .then for data
      .catch((error) => {
        console.log("There was some error here");
        console.log(error);
      });
  };

  render() {
    return (
      <div
        className="mainContainer"
        style={{ backgroundColor: this.state.elementColor }}
      >
        <div className="App">
          {/* <Helmet>
          <style>{"body { background-color: orange; }"}</style>
        </Helmet> */}

          {/* {(document.body.style.backgroundColor = this.state.elementColor)} */}

          <div className="main-container">
            {/* <h1 className="Heading">Project: Random Quote Generator!</h1> */}
            <div className="container__box">
              <div className="quote-left"></div>
              <p
                className="quote__paragraph"
                style={{ color: this.state.elementColor }}
              >
                {/* The quotes */}
                {this.state.quoteText}
              </p>
              <div className="quote-author">
                -{" "}
                <span id="author" style={{ color: this.state.elementColor }}>
                  {this.state.quoteAuthor}
                </span>
              </div>

              <div className="buttons">
                <div className="socials">
                  <a
                    className="button"
                    href={`https://twitter.com/intent/tweet?text=${this.state.quoteText} - ${this.state.quoteAuthor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="tweet-quote"
                    style={{ backgroundColor: this.state.elementColor }}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="button"
                    id="tumblr-quote"
                    href={`https://twitter.com/intent/tweet?text=${this.state.quoteText} - ${this.state.quoteAuthor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: this.state.elementColor }}
                  >
                    <i className="fa-brands fa-tumblr"></i>
                  </a>
                </div>
                <button
                  onClick={this.fetchQuote}
                  className="button"
                  id="new-quote"
                  style={{ backgroundColor: this.state.elementColor }}
                >
                  New quote
                </button>
              </div>
            </div>

            <div className="footer">
              by{" "}
              <a href="#" className="link">
                Vidya Sagar Mukkavili
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
