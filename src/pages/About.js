import aboutremi from "../images/aboutremi.jpg";

export default function About() {
  return (
    <div>
      <h2 className="title m-0 d-flex align-items-center">About me</h2>
      <div className="about m-0 row text-center align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2 fs-3">Hi, I'm Remi!</h2>
          <p className="mt-4 bio ">
            Thank you for visiting my page 🥳 <br />
            <br />I am a classically trained singer, with experience in musical
            theatre and pop (including JPop)... but my go-to genre is gospel. I
            direct the Union Praise Team (gospel and contemporary Christian
            choir) at{" "}
            <a
              href="https://www.tokyounion.org"
              rel="noreferrer"
              target="blank"
            >
              Tokyo Union Church
            </a>
            . <br />
            <br />I was born into a teachers' family and have been teaching for
            more than 15 years, and will always be an educator (empowerer!) at
            heart. I believe that <b>everyone</b> can sing, and that everyone
            has the right to be able to express themselves freely through song -
            and I love helping people achieve this through{" "}
            <a href="/voicecoach" rel="noreferrer" target="blank">
              voice lessons
            </a>
            . <br />
            <br />
            I'm from Japan and have lived here most of my life, but I've also
            lived in New York City where I performed at 54 Below (Off Broadway),
            with the Brooklyn Tabernacle Choir (gospel choir with 6 Grammy
            Awards), and at numerous jazz clubs around the city. Before that, I
            attended Princeton University, where I received training in French
            acting and earned a Bachelor's in Comparative Literature.
            <br />
            <br />
            <small>
              For a detailed performance/arts resume or for voice samples,
              please contact me via the form below.
            </small>
          </p>
        </div>
        <img
          className="img-fluid col-md-4 p-0 h-100 d-none d-md-block"
          src={aboutremi}
          alt="Remi"
        />
      </div>
    </div>
  );
}
