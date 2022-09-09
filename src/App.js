import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        {/* <h1 className="Heading">Project: Random Quote Generator!</h1> */}
        <div className="container__box">
          <div className="quote-left"></div>
          <p className="quote__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam amet
            velit vitae omnis deserunt
          </p>
          <div className="quote-author">
            - <span id="author">Tony Robbins</span>
          </div>

          <div className="buttons">
            <div className="socials">
              <a className="button" id="tweet-quote" href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a className="button" id="tumblr-quote" href="#">
                <i class="fa-brands fa-tumblr"></i>
              </a>
            </div>
            <button className="button" id="new-quote">
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

export default App;
