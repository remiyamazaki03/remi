import heart from "../images/heart.jpg";
import colors from "../images/colors.jpg";
import stage from "../images/stage.jpg";

export default function Voicecoach() {
  return (
    <div>
      <div className="title d-flex align-items-center">
        <h1>Voice lessons with Remi might be for you if...</h1>
      </div>
      <div className="content">
        <div className="container py-3">
          <div className="row py-4 px-4">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={heart}
                alt="heartbeat"
                className="img-fluid p-4 d-none d-md-block"
              />
            </div>
            <div className="col-md-8">
              <div>
                <img
                  src={heart}
                  alt="heartbeat"
                  className="img-fluid d-block d-md-none w-25"
                />
                <h3 className="text-center">
                  ... you want freedom in singing, both physically AND
                  emotionally:
                </h3>
                <p className="text-center">
                  <br />
                  “I like singing but going to karaoke with friends was
                  embarrassing for me because I thought of myself as bad singer
                  with limited range. During the lessons Remi always encouraged
                  me. One of the exercises was making a pig face. She said
                  “making an ugly face is part of the vocal lesson.{" "}
                  <b>Nothing to be ashamed of!</b>” That's it. I had nothing to
                  be ashamed of.
                  <br />
                  <br />
                  Remi helped me to match pitches accurately and widen my range,
                  and told me how to change from my chest voice to falsetto
                  naturally. After the two-months training,{" "}
                  <b>
                    I could finally sing the song which I never expected to
                    sing.
                  </b>{" "}
                  I had never tried to sing with my falsetto because it was too
                  weak and high, but now I learned to sing strongly with my
                  breath control and forming voice. Now my options for karaoke
                  have increased dramatically.”
                  <br /> - T. K. (online, Brzail)
                </p>
              </div>
            </div>
          </div>
          <div className="row py-4 px-4">
            <div className="col-md-8">
              <div>
                <img
                  src={colors}
                  alt="expand your palette"
                  className="img-fluid d-block d-md-none w-25 pb-3"
                />
                <h3 className="text-center">
                  ... you want to branch out, like singing notes or styles
                  you've never sung before:
                </h3>
                <p className="text-center">
                  <br />
                  “I didn't know I had this side of my voice!!! Given proper
                  instructions [guidance],{" "}
                  <b>
                    it was an amazing feeling to push past the limits I thought
                    I had.
                  </b>
                  ” <br />- J. L. (online, USA)
                  <br />
                  <br />
                  “The result was stunning. At first, both myself and the
                  [musical] actor were quite sure of his upper range limit, but{" "}
                  <b>
                    after Remi's coaching, he sang notes I (thought I) knew he
                    couldn't hit, all with 100% presence and confidence onstage.
                  </b>{" "}
                  Remi encouraged and helped many of us to step up and boosted
                  our production level, and I'm very grateful to have had the
                  opportunity to work with her.” <br />- W. R-L. (Musical
                  director, USA)
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={colors}
                alt="expand your palette"
                className="img-fluid p-5 d-none d-md-block"
              />
            </div>
          </div>
          <div className="row py-4 px-4">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={stage}
                alt="show off your singing"
                className="img-fluid blurry d-none d-md-block"
              />
            </div>
            <div className="col-md-8">
              <div>
                <img
                  src={stage}
                  alt="show off your singing"
                  className="img-fluid blurry d-block d-md-none"
                />
                <h3 className="text-center">
                  ... you want to take your singing to the next level, or even
                  go professional:
                </h3>
                <p className="text-center">
                  <br />
                  “Before these lessons, all I thought about was matching pitch,
                  but{" "}
                  <b>
                    I learned how to breathe, how to do vibrato, dynamics, and
                    other techniques to help me become better at singing - all
                    customized to my level.{" "}
                  </b>
                  And when I didn't understand something, Remi explained it with
                  a lot of care.{" "}
                  <b>I can sing so many more songs now than before!</b>” <br />-
                  C. N. (online, Japan)
                  <br />
                  <br />
                  “I'm an actor and I love musicals, but I couldn't sing. Remi
                  was the first person who not only told me that yes, I could
                  sing but also helped me prepare my singing audition.{" "}
                  <b>
                    She believed in me when I didn't believe in myself, and
                    after that, I'm not afraid of auditioning for musicals
                    anymore!
                  </b>
                  ” <br />- V. H. (in person, USA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
