import { useState } from 'react';
import spotify from '../assets/desktop/spotify.svg';
import apple from '../assets/desktop/apple-podcast.svg';
import google from '../assets/desktop/google-podcasts.svg';
import pocket from '../assets/desktop/pocket-casts.svg';

function Main() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(false);

  const emailValidation = () => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/;
    if (regex.test(email)) {
      setMessage('You have succesfully requested access.');
      setValid(true);
    } else if (!regex.test(email) || email === '') {
      setMessage('Please enter a valid email address.');
      setValid(false);
    }
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <main>
      <h1>
        Publish your podcasts <span>everywhere.</span>
      </h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div id="container">
        <div>
          <img id="spotify" src={spotify} alt="spotify" />
        </div>
        <div>
          <img id="apple" src={apple} alt="apple" />
        </div>
        <div>
          <img id="google" src={google} alt="google" />
        </div>
        <div>
          <img id="pocket" src={pocket} alt="pocket" />
        </div>
      </div>
      <p className={valid ? 'green' : 'red'} id="message">
        {message}
      </p>
      <div id="btn-container">
        <input
          id="input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          value={email}
          required
        />
        <button onClick={emailValidation}>Request Access</button>
      </div>
    </main>
  );
}

export default Main;
