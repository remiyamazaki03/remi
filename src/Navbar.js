export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-css">
      <a className="navbar-brand ms-3" href="index.html">
        Remi
      </a>
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
          <li className="nav-item">
            <a className="nav-link" href="index.html#work">
              My work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/vocal-coach.html">
              Voice lessons
            </a>
          </li>
        </ul>
        <a className="nav-link me-4" href="/jpn.html">
          {" "}
          日本語{" "}
        </a>
      </div>
    </nav>
  );
}
