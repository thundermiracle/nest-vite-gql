import logo from "./logo.svg";
import "./App.css";
import Tweets from "./Tweets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>All your tweets are here!</h2>
        <Tweets />
      </header>
    </div>
  );
}

export default App;
