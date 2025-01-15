import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FormfacadeEmbed from "@formfacade/embed-react";

export default function Footer() {
  const { t } = useTranslation();
  const click = (to) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
    if (to) {
      navigate(to);
    }
  };
  return (
    <div>
      <div className="row contact">
        <div className="col-md-6 d-none d-md-block">
          <h1 className="ps-5 mt-5 mb-2 mb-md-5 homepage">
            {t("footer.line1")} <div className="brand">{t("footer.line2")}</div>
          </h1>

          <div className="d-flex ps-5">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <p className="mt-4 mb-2 mb-md-5 highlight ps-5">
            email: hello@chameleon-studios.com
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h2 className="d-block d-md-none my-4 highlight fs-1">
            {t("footer.mobile")}
          </h2>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            <a
              href="https://www.instagram.com/remi.0.3"
              className="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              className="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              className="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <div className="d-flex d-block d-md-none mb-3 justify-content-center">
            email: hello03remi@gmail.com
          </div>
          <div className="me-sm-5">
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/100240402409090706097/form/1FAIpQLScGNmvJZi7y5zQztyhrSeGIe_HVPr-uCRwYfh4U0UDX8XQXtA/classic.js/?div=ff-compose"
              onSubmitForm={() => console.log("Form submitted")}
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="brand pt-2">
          © 2024 &nbsp;
          <a
            href="https://github.com/remiyamazaki03/remi"
            className="brand footer-link"
          >
            Open-source code
          </a>
          &nbsp; by <span className="fw-bold">Remi Yamazaki</span>&nbsp; |
          &nbsp;&nbsp;
          <Link
            to={"/disclosure"}
            className="brand footer-link"
            onClick={() => click("/disclosure")}
          >
            {t("footer.disclosure")}
          </Link>
        </div>
      </footer>
    </div>
  );
}
