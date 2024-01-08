import React from "react";
import "./index.css";
import singer from "./images/Remi-singer.jpg";
import microphone from "./images/microphone.jpg";
import developer from "./images/Remi-developer.jpg";

export default function App() {
  return (
    <div class="content">
      <div class="hero row">
        <div class="col-lg-6">
          <h3>Hi!</h3>
          <h1>
            I'm <br />
            <span class="name">Remi</span>
          </h1>
        </div>
        <div class="col-lg-6 d-none d-md-block"></div>
      </div>
      <div class="row" id="work">
        <div class="col-md-4 p-0 work-img">
          <img class="img-fluid" src={singer} alt="Remi singer" />
          <div class="overlay">
            <h2>Singer / Actor</h2>
            <p class="p-5 text-center fs-4">See my performance background:</p>
            <button class="btn launch-button">Coming soon</button>
          </div>
        </div>
        <div class="col-md-4 p-0 work-img">
          <img class="img-fluid" src={microphone} alt="microphone" />
          <div class="overlay" id="vocal-overlay">
            <h2>Vocal coach</h2>
            <p class="p-5 text-center fs-4">
              See details and student testimonials here:
            </p>
            <a href="/vocal-coach.html">
              <button class="btn launch-button" id="vocal-button">
                Details
              </button>
            </a>
          </div>
        </div>
        <div class="col-md-4 p-0 work-img">
          <img class="img-fluid" src={developer} alt="Remi profile" />
          <div class="overlay">
            <h2>Web developer</h2>
            <p class="p-4 text-center fs-4">
              Web design and development services for artists and small business
              owners:
            </p>
            <button class="btn launch-button">Coming soon</button>
          </div>
        </div>
      </div>
      <div class="contact row" id="contact">
        <div class="col-md-6 d-none d-md-block">
          <h1 class="mt-4 mb-2 mb-md-5">
            Let's <span class="name">get in touch!</span>
          </h1>
          <div class="d-flex">
            <a
              href="https://www.instagram.com/remi.0.3"
              class="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              class="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github github-logo"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h1 class="d-block d-md-none my-4">
            <span class="name">Contact</span> me
          </h1>
          <div class="d-flex d-block d-md-none mb-3 justify-content-center">
            <a
              href="https://www.instagram.com/remi.0.3"
              class="fs-1 me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram inst-logo"></i>
            </a>
            <a
              href="https://www.youtube.com/@remi03"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-youtube youtube-logo"></i>
            </a>
            <a
              href="https://twitter.com/03_remi"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-x-twitter twitter-logo"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/remi-yamazaki-77580b55/"
              class="fs-1 mx-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/remiyamazaki03"
              class="fs-1 ms-3"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github github-logo"></i>
            </a>
          </div>
          <form class="mt-md-5 me-md-5 pe-md-5">
            <label for="name">name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="name"
            />
            <label for="email" class="mt-3">
              email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email"
            />
            <label for="message" class="mt-3">
              message
            </label>
            <br />
            <textarea
              id="message"
              class="form-control"
              rows="5"
              placeholder="Sorry, my form isn't working yet. Please contact me via social media while I get this up and running!"
            ></textarea>
            <br />
            <button class="btn submit-button mt-md-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
