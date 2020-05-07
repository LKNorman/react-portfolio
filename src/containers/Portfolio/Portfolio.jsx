import React from "react";
import "./Portfolio.css";
import project1 from "../../imgs/project1.PNG";
import weatherapp from "../../imgs/weatherapp.PNG";
import schedule from "../../imgs/schedule.png";
import notes from "../../imgs/notes.png";

const Portfolio = () => {
  return (
    <div className="container">
      <main className="row">
        <div className="col-md-8">
          <article className="block">
            <h1 className="block-header">Portfolio</h1>
            <hr />
            <div id="border1" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://lknorman.github.io/GTWeatherDashboard/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={weatherapp}
                    alt="weather app"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/LKNorman/GTWeatherDashboard"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
            <div id="border2" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://lknorman.github.io/springBreakers/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={project1}
                    alt="spring breakers"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/LKNorman/springBreakers"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
            <div id="border3" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://frozen-badlands-49992.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={notes}
                    alt="note taker"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/LKNorman/GTNoteTaker"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
            <div id="border4" className="project row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <a
                  href="https://lknorman.github.io/GTDayPlanner/"
                  target="_blank"
                >
                  <img
                    className="img-fluid port-image"
                    src={schedule}
                    alt="scheduler"
                  />
                </a>
                <a
                  className="btn btn-dark text-center"
                  href="https://github.com/LKNorman/GTDayPlanner"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
