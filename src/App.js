import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Updates</a>
          <a href="/">Support</a>
        </nav>
        <img src="/assets/riptide-logo.png"></img>
      </header>
      <body>
      </body>
      <footer>
        <span>
          <a href="https://twitter.com/">
            <img src="/assets/twitter-icon.png"></img>@GIB_Studios
          </a>
        </span>
        <span>
          <a href="https://github.com/">
            <img src="/assets/github-icon.png"></img>Project Riptide
          </a>
        </span>
        <span>
          <a href="mailto: riptide@gibstudios.com">
            <img src="/assets/email-icon.png"></img>riptide@gibstudios.com
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
