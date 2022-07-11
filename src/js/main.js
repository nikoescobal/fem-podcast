import spotify from '../assets/desktop/spotify.svg';
import apple from '../assets/desktop/apple-podcast.svg';
import google from '../assets/desktop/google-podcasts.svg';
import pocket from '../assets/desktop/pocket-casts.svg';
// import logo from '../assets/desktop/logo.svg';
import Header from './Header';

function Main() {
  return (
    <>
      {/* <header>
        <nav>
          <div className="color-overlay" />
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
        </nav>
      </header> */}
      <Header />
      <main>
        <h1>
          Publish your podcasts <span>everywhere.</span>
        </h1>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
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
        <div id="btn-container">
          <input placeholder="Email Address" />
          <button className="">Request Access</button>
        </div>
      </main>
    </>
  );
}

export default Main;
