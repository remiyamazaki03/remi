export default function Footer() {
  return (
    <div>
      <div className="contact row" id="contact">
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
        </div>
        <div className="col-md-6 d-flex flex-column">
          <h1 className="d-block d-md-none my-4">
            <span className="name">Contact</span> me
          </h1>
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
          <form className="mt-md-5 me-md-5 pe-md-5">
            <label for="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
            <label for="email" className="mt-3">
              email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
            />
            <label for="message" className="mt-3">
              message
            </label>
            <br />
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Sorry, my form isn't working yet. Please contact me via social media while I get this up and running!"
            ></textarea>
            <br />
            <button className="submit-button mt-md-4">Submit</button>
          </form>
        </div>
      </div>
      <footer>
        <div className="name">
          © 2023
          <a
            href="https://github.com/remiyamazaki03/portfolio"
            id="portfolio-rep-link"
            className="name"
          >
            Open-source code
          </a>
          by <span className="fw-bold">Remi Yamazaki</span>
        </div>
        <div className="name">
          Microphone photo by
          <a
            className="name"
            href="https://unsplash.com/@leowieling?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Leo Wieling
          </a>
          on
          <a
            className="name"
            href="https://unsplash.com/photos/grayscale-photo-of-condenser-microphone-beside-pop-filter-bG8U3kaZltE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </div>
      </footer>
    </div>
  );
}
