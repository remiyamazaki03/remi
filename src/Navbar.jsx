import { Link, useNavigate } from "react-router-dom";
import Languageswitch from "./Languageswitch";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  const navClick = (to) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
    if (to) {
      navigate(to);
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-css">
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
        <ul className="navbar-nav me-auto navul">
          <li className="nav-item mx-0">
            <Link
              className="nav-link"
              to="/about"
              onClick={() => navClick("/pages/about")}
            >
              {t("navbar.about")}
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/voicecoach"
              onClick={() => navClick("/pages/voicecoach")}
            >
              {t("navbar.voice")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/webdeveloper"
              onClick={() => navClick("/pages/webdeveloper")}
            >
              {t("navbar.web")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/contact"
              onClick={() => navClick("/contact")}
            >
              {t("navbar.contact")}
            </Link>
          </li>
        </ul>
        <Languageswitch onClick={closeMenu} />
      </div>
    </nav>
  );
}
