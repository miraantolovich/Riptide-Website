import './App.css';
import Header from './Header.js';
import useSticky from './hooks/useSticky.js';

const App = () => {
  const {isSticky} = useSticky();
  return (
    <div className="App">
      <Header sticky={isSticky}></Header>
      <main >
        <div id="description">
          <section id="tagline">
            <img src="/assets/boat-tagline.png"></img>
            <p>
              Explore the high seas, kill monsters, get loot.
            </p>
            <img src="/assets/fish-tagline.png"></img>
          </section>
          <p>
          Riptide is an open-sea exploration game. Upgrade your ship from a dinky raft to a mighty vessel, 
          but at a steep price. You’ll have to sail across the ocean to fight monsters and find hidden 
          treasure to make your mark on the seas. With tons of area to explore and lots of weapons 
          and equipment to upgrade, Riptide will be a barrel of fun.<br /><br />
          Don’t miss out on amazing gameplay, available for free on the Google Play store now!
          </p>
        </div>

        <div id="slideshow">
          <img src="/assets/fake-screenshot.png"></img>
        </div>
        
        <div id="feature">
          <img src="/assets/fake-feature-screenshot.png"></img>
          <p>
            Explore the unique biomes to find loot areas! From wood to highly prized metal, you can 
            find them all if you look hard enough and are willing to face the unknown. If you’re lucky 
            enough, you might even run into a map piece that will allow you to see exactly where you are. <br /><br />
            The map has twenty five unique chunks, and don’t forget to loot every sparkly objects on the way out! 
            Those materials will come in handy.
          </p>
        </div>
      </main>

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
