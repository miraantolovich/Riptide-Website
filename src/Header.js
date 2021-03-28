import './App.css';

const Header = ({sticky, element}) => {
    return <header className={sticky ? "sticky" : ""} ref={element}>
        <nav>
          <a href="/" className="currentPage">Home</a>
          <span>|</span>
          <a href="/">About Us</a>
          {sticky ?
           <img src="/assets/riptide-small-logo.png"></img> :
           <img src="/assets/riptide-logo.png"></img>
          }
          <a href="/">Updates</a>
          <span>|</span>
          <a href="/">Support</a>
        </nav>
    </header>
}

export default Header;