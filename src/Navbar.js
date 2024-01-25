import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top navbar-css">
      <Link className="navbar-brand ms-3" to="/">
        Remi
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item mx-0">
            <Link className="nav-link" to="/pages/about">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voicecoach">
              Voice lessons
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/webdeveloper">
              Web development
            </Link>
          </li>
        </ul>
        <div>
          <Link className="nav-link japanese" to="/">
            日本語
          </Link>
          <div className="hide speech-bubble">準備中</div>
        </div>
      </div>
    </nav>
  );
}
