import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="dynamic-background"></div>
      <header className="header">
        <h1>Green Leaf Group</h1>
        <p>Property Management | Sustainable Future</p>
      </header>
      <main className="content">

        <div className="mission-callout">
          <h2>Our mission</h2>
          <hr/>
          <p>
            Managing affordable, quality homes while fostering a greener future...
          </p>
          <hr/>
        </div>

        <section className="business-details">
          <h1>Contact us</h1>
          <hr/>
          <div className="contact-details">
            <a href="mailto:admin@glglettings.com">admin@glglettings.com</a>
          </div>
          <div className="contact-details">
            <a href="tel:+447957842167">+44 7957 842167</a>
          </div>
          <div>
            <p>Open Monday to Friday 9am - 5pm</p>
          </div>
          <button
            className="call-button"
            onClick={() => window.location.href = 'tel:+447957842167'}
          >
            Call Our Office
          </button>
        </section>
      </main>
      <footer className="footer">
        <p>Green Leaf Group LTD &copy; 2025</p>
      </footer>
    </div>
  );
};

export default App;
