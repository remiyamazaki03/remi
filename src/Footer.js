import FormfacadeEmbed from "@formfacade.dev/embed-react";

export default function Footer() {
  return (
    <div>
      <div className="contact row">
        <div className="col-md-6 d-none d-md-block">
          <h1 className="mt-4 mb-2 mb-md-5">
            Let's <span className="name">get in touch!</span>
          </h1>
          <div className="d-flex">
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
          <div className="mt-4 mb-2 mb-md-5">email: hello03remi@gmail.com</div>
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h1 className="d-block d-md-none my-4">Let's get in touch!</h1>
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
              onSubmitForm={() => {
                alert("Form Submitted");
              }}
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="name">
          © 2024 &nbsp;
          <a
            href="https://github.com/remiyamazaki03/portfolio"
            id="portfolio-rep-link"
            className="name"
          >
            Open-source code
          </a>
          &nbsp; by <span className="fw-bold">Remi Yamazaki</span>
        </div>
      </footer>
    </div>
  );
}
