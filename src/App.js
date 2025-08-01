import './App.css';

function App() {
  return (
    <div className="App">
      <section id="yellow-bar"></section>
      <section id="main-header">
        <h1>
          ONE WAY TIX
        </h1>
        <p className="subtitle">
          A documentary feature film, <span className="bold">10 years</span> in the making.
        </p>
      </section>

      <section>
        <h4>SYNOPSIS</h4>
        <p>
          A guy buys a one way ticket to Asia <span className="bold">determined to make a documentary</span> with no money, no experience, and no direction. He attempts to show that
          travel is accesible by <span className="bold"> working for food and shelter</span> but his obsession surfaces; being <span className="bold">on the run from materialism. </span>The expedition ends near the Siberian border herding cattle. Is the documentary about Jenny? The Monks? Angela, the dead piglet? Obama, the unriddeable horse in Mongolia? The Actor? The Colorado Dropout? The Deadliest Catch boat? Mysterious characters
          appear and guide him along the way. Overwhelmed, he burries the project. <span className="bold">Six years later</span> he learns that <span className="bold">Asia was only the beginning</span> of becoming a documentary filmmaker.
        </p>
      </section>

      <section>
        <h4>COUNTRIES</h4>
        <ul className="country-list">
          <li><span className="highlight-alt">FRANCE</span></li>
          <li><span className="highlight-alt">US</span></li>
          <li><span className="highlight-alt">INDONESIA</span></li>
          <li><span className="highlight-alt">MALAYSIA</span></li>
          <li><span className="highlight-alt">VIET NAM</span></li>
          <li><span className="highlight-alt">HONG KONG</span></li>
          <li><span className="highlight-alt">NEPAL</span></li>
          <li><span className="highlight-alt">"TIBET"</span></li>
          <li><span className="highlight-alt">CHINA</span></li>
          <li><span className="highlight-alt">MONGOLIA</span></li>
        </ul>
      </section>

      <section>
        <h4>TRAILER</h4>
        <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
          <iframe
            src="https://player.vimeo.com/video/1083081464?title=0&byline=0&portrait=0&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
            title="ONE WAY TIX - Unofficial Trailer"
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </section>

      <section>
        <h4>THEMES</h4>
        <ul>
          <li>Escaping Materialism</li>
          <li>Animal Consumption</li>
          <li>Self-Discovery</li>
          <li>Manifestation</li>
          <li>Friendship</li>
          <li>Adventure</li>
          <li>Death</li>
          <li>Self-Sabotage</li>
          <li>Mental Health</li>
        </ul>
      </section>

      <section>
        <p>
          <span className="highlight"> ANTICIPATED RELEASE </span>
          <span className="highlight-alt">Jan 22, 2026.</span>
        </p>
        <p>
          Now in <span className="italic bold">post-production</span>, One Way Tix is
          being submitted to major festivals worldwide.
        </p>
      </section>

      <section>
        THIS PROJECT CAN BE DESCRIBED AS <span className="bold highlight-alt"> GUERILLA FILMMAKING.</span>
      </section>

      <section>
        <p>Filming began in November 2015, unknowingly.</p>
      </section>

      <div className="form-container">
        <h2 className="form-header highlight">Get notified when the film is released!</h2>
        <form className="form">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>   
      
    </div>
  );
}

export default App;