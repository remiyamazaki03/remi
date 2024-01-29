import aboutremi from "../images/aboutremi.jpg";

export default function About() {
  return (
    <div>
      <h1 className="title m-0 d-flex align-items-center">About me</h1>
      <div className="about m-0 row align-items-center">
        <div className="col-md-8 p-5">
          <h2 className="mt-2">Hi I'm Remi!</h2>
          <p className="mt-4 bio text-center">
            Thank you for visiting my page! <br />
            <br />I am a classically trained singer, but my go-to genre is
            gospel. I direct the Union Praise Team (gospel and contemporary
            Christian choir) at{" "}
            <a
              href="https://www.tokyounion.org"
              rel="noreferrer"
              target="blank"
            >
              Tokyo Union Church
            </a>{" "}
            and also teach voice lessons. I was born into a teachers' family,
            and I will always be an educator (empowerer!) at heart. I believe
            that <b>everyone</b> can sing, and that everyone has the right to be
            able to express themselves freely through song - and I love helping
            people achieve that. <br />
            <br />
            I'm from Japan and have lived here most of my life, but I've also
            lived in New York City where I performed at{" "}
            <a href="https://54below.org/" rel="noreferrer" target="blank">
              54 Below
            </a>{" "}
            (Off Broadway), with the{" "}
            <a
              href="https://www.youtube.com/channel/UCPoeoRFfO4n1vp2zkodf5Nw"
              rel="noreferrer"
              target="blank"
            >
              Brooklyn Tabernacle Choir
            </a>{" "}
            (gospel choir with 6 Grammy Awards), and at numerous jazz clubs
            around the city. Before that, I attended Princeton University, where
            I received training in French acting and earned a Bachelor's in
            Comparative Literature.
            <br />
            <br /> Aside from singing, directing and teaching, I also have
            experience in voice acting / narration and basic web development.
            <br />
            <br />
            <small>
              For a detailed performance/arts resume, please contact me via the
              form below.
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
