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
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item mx-0">
            <Link className="nav-link" to="/pages/performance">
              My work
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
          <a className="nav-link japanese" href="/jpn.html">
            日本語
          </a>
          <div className="hide speech-bubble">準備中</div>
        </div>
      </div>
    </nav>
  );
}
