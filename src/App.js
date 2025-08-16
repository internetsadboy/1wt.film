import React, {useState} from 'react';

import './App.css';

function App() {
  // I want to collect an email (string) from the user
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false); // To track if there's an error in the form submission
  // I want to display text indicating success / failure to the user
  const [status, setStatus] = useState(null); // For showing success/error messages
  const [formSubmitted, setFormSubmitted] = useState(false); // To track if the form has been submitted

  // I need a function to handle the "submit event"
  // and perform an HTTP POST request to the google api
  // in order to add two data points (date, email) to my private spreadsheet
  const handleSubmit = async (e) => {
    // pause the browser
    e.preventDefault();

    // compute the date for PST
    const date = new Date().toLocaleDateString('en-CA', {
                    timeZone: 'America/Los_Angeles',
                  });
     
    // send request or catch error
    try {
      // hit "sheetserver" with a POST request
      const res = await fetch('https://api.onewaytix.film/submit', {
        method: 'POST',
        body: JSON.stringify({
          date: date,
          email: email,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (res.ok) {
        setFormSubmitted(true);
        setStatus('You\'ll be notified when the film is released!');
        console.log(`Email submitted: ${email} on ${date}`);
       
        // reset form value to empty string
        setEmail('');
     
        // reset error state
        if (hasError) setHasError(false);
      } else {
        setHasError(true);
        setStatus(`Submission failed`);
      }
    } catch (err) {
      // display error
      setHasError(true);
      setStatus(`${err.message}`);
    }
  };

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
        <h3>SYNOPSIS</h3>
        <p>
          A guy buys a one way ticket to Asia <span className="bold">determined to make a documentary</span> with no money, no experience, and no direction. He attempts to show that
          travel is accesible by <span className="bold"> working for food and shelter</span> but his obsession surfaces; being <span className="bold">on the run from materialism. </span>The expedition ends near the Siberian border herding cattle. Is the documentary about Jenny? The Monks? Angela, the dead piglet? Obama, the unriddeable horse in Mongolia? The Actor? The Colorado Dropout? The Deadliest Catch boat? Mysterious characters
          appear and guide him along the way. Overwhelmed, he burries the project. <span className="bold">Six years later</span> he learns that <span className="bold">Asia was only the beginning</span> of becoming a documentary filmmaker.
        </p>
      </section>

      <section>
        <h3>COUNTRIES</h3>
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
        <h3>TRAILER</h3>
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
        <h3>THEMES</h3>
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
          <span className="release highlight-alt">Jan 22, 2026</span>
        </p>
        <p>
          Now in <span className="italic bold">post-production</span>, One Way Tix is
          being submitted to major festivals worldwide.
        </p>
      </section>

      <section>
        <span>THIS PROJECT CAN BE DESCRIBED AS</span> <span className="geurilla bold highlight-alt"> GUERILLA FILMMAKING</span>
      </section>

      <section>
        <p>Filming began in November 2015, unknowingly.</p>
      </section>

      <div className="form-container">
        {status && !hasError && <p className={`release-notification highlight`}>{status}</p>}
         {!formSubmitted && (
             <div style={{width: "100%"}}>
              <h2 className="form-header highlight">Get notified when the film is released!</h2>
              <form onSubmit={handleSubmit} className="form" id="emailForm">
                <input
                  type="email"
                  value={email}
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="email-input"
                  onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="submit-button">Submit</button>
                {hasError && <p className="error-msg">Error: {status}</p>}
              </form>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;