import logo from '../assets/desktop/logo.svg';

function Header() {
  return (
    <header>
      <nav>
        <div id="bg-container"></div>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
