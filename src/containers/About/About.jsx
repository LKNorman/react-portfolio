import React from "react";
import "./About.css";
import face from "../../imgs/myface.png";
import resume from "../../imgs/myresume.pdf";

const About = () => {
  return (
    <main class="container">
      <section class="row">
        <div class="col-md-8">
          <article class="block rounded">
            <h1 id="about-me" class="block-header">
              About Me
            </h1>
            <hr />
            <img src={face} alt="" id="about-image" />
            <p>
              I'm Landry Norman. I have recently made the move into the tech
              industry after working at golf courses for most of my working
              time. I have prevously worked with SERVPRO Industries in their
              information systems department as well.
            </p>
            <p>
              Contact me at: <br /> <strong>Email: </strong>lknorman30@gmail.com{" "}
              <br /> <strong>Phone: </strong>615-354-3376
            </p>
          </article>
          <a id="resume" class="btn btn-dark" href={resume} download>
            Resume
          </a>
          <a
            id="linkedin"
            type="button"
            class="btn btn-dark"
            href="https://www.linkedin.com/in/landry-norman-89a730164/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            id="github"
            type="button"
            class="btn btn-dark"
            href="https://github.com/LKNorman"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
