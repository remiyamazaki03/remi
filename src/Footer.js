export default function Footer() {
  return (
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
  );
}
