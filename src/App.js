// import logo from "./logo.svg";
import "./App.css";
// import { ReactDOM } from "react";
import React from "react";
// import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    // State Variables go here:
    this.state = {
      quoteText: " Initial text",
      quoteAuthor: "Initial author",
    };

    this.fetchQuote = this.fetchQuote.bind(this);
    // this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  // state = {
  //   quoteText: " Initial text",
  //   quoteAuthor: "Initial author",
  // };

  // Accessing the API inside the componentDidMount Lifecycle method
  componentDidMount() {
    // console.log("The component has mounted");
    this.fetchQuote();
  }

  // handleNewQuote() {
  //   this.setState((state) => ({
  //     quoteText: state.quoteText + "newquoteText",
  //     quoteAuthor: state.quoteAuthor + "newquoteAuthor",
  //   }));
  // }

  // fetchQuote = () =>

  fetchQuote() {
    let tempText = "Temptext";
    let tempAuthor = "Tempauthor";

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
        this.setState((state) => ({
          quoteText: tempText,
          quoteAuthor: tempAuthor,
        }));
      })
      .catch((error) => {
        console.log("There was some error here");
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          {/* <h1 className="Heading">Project: Random Quote Generator!</h1> */}
          <div className="container__box">
            <div className="quote-left"></div>
            <p className="quote__paragraph">
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              amet velit vitae omnis deserunt */}
              {this.state.quoteText}
            </p>
            <div className="quote-author">
              -{" "}
              <span id="author">
                {/* Tony Robbins */}
                {this.state.quoteAuthor}
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
              Vidya Sagar Mukkavili
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <div className="main-container">
//         {/* <h1 className="Heading">Project: Random Quote Generator!</h1> */}
//         <div className="container__box">
//           <div className="quote-left"></div>
//           <p className="quote__paragraph">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam amet
//             velit vitae omnis deserunt
//           </p>
//           <div className="quote-author">
//             - <span id="author">Tony Robbins</span>
//           </div>

//           <div className="buttons">
//             <div className="socials">
//               <a className="button" id="tweet-quote" href="#">
//                 <i class="fa-brands fa-twitter"></i>
//               </a>
//               <a className="button" id="tumblr-quote" href="#">
//                 <i class="fa-brands fa-tumblr"></i>
//               </a>
//             </div>
//             <button className="button" id="new-quote">
//               New quote
//             </button>
//           </div>
//         </div>

//         <div className="footer">
//           by{" "}
//           <a href="#" className="link">
//             Vidya Sagar Mukkavili
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
