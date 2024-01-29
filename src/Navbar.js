import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  const navClick = (to) => {
    console.log("navClick triggered");
    console.log("Current scroll position:", window.scrollY);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Scrolled to the top");
    closeMenu();
    if (to) {
      navigate(to);
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top navbar-css">
      <Link className="navbar-brand ms-3" to="/" onClick={() => navClick("/")}>
        Remi
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item mx-0">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => navClick("/pages/about")}
            >
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/voicecoach"
              onClick={() => navClick("/pages/voicecoach")}
            >
              Voice lessons
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/webdeveloper"
              onClick={() => navClick("/pages/webdeveloper")}
            >
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
