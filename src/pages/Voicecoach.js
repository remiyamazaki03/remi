export default function Voicecoach() {
  return (
    <div>
      <div className="title">
        <h1>What students are saying...</h1>
      </div>
      <div className="content ">
        <div className="container">
          <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
              <img
                src="images/weather-remi.png"
                alt="weather app"
                class="img-fluid"
              />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column">
                <div>
                  <p> I really need to split css files.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex flex-column">
                <div>
                  <p>
                    {" "}
                    And adjust the mic image on this page so that the pop guard
                    isn't cut off but it's not too big either.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
              <img src="images/yoga.png" alt="yoga app" class="img-fluid" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3 mb-md-0">
              <img src="images/yogurt.png" alt="yogurt app" class="img-fluid" />
            </div>
            <div class="col-md-6 d-flex flex-column">
              <div>
                <p> This is a paragraph about my yogurt app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
