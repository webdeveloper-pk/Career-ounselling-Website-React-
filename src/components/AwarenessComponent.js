import React, { Component } from "react";

class Awareness extends Component {
  render() {
    return (
      <>
        <div className="flex">
          <div className="row">
            <div className="col-12">
              <img className="bgimg" src="assets/images/home7.jpg" alt="home" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <hr />
              <h1 className="title mt-5  p-2">
                Our <span className="text-primary">Journey</span>
              </h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mt-5">
              <ul className="list-unstyled px-5">
                <li>Introduction</li>
                <li>
                  <a href="#intfac">Internal Factors</a>
                </li>
                <li>
                  <a href="#exfac">External Factors</a>
                </li>
                <li>
                  <a href="#urjour">Your Journey</a>
                </li>
              </ul>
            </div>
            <div className="col-md-9 mt-5">
              <h2 className="mb-4">Introduction</h2>
              <p>
                Awareness Journey is a step by step process that will include
                all the internal and external factors that influence in the
                career decision making process. This Journey will teach you
                about how these factors are effecting in decision making and
                what alternatives you can take to overcome the obstacles you
                face whilst exploring about your skills and abilities. These
                factors are all that you need to know in order to make a well
                searched career path. There are two types of factors that effect
                the career decision process and they are
              </p>
              <ul className="my-5 list-unstyled">
                <li>
                  <span className="fa fa-user mr-4"></span>Internal Factors
                </li>

                <li>
                  <span className="fa fa-users mr-3"></span>External Factors
                </li>
              </ul>
              <hr />
              <h2 className="mb-4 mt-5">Internal Factors</h2>
              <ul className=" my-5">
                <p>
                  Inner strengths and weaknesses that a person exhibits.
                  Internal factors can strongly affect how well a student meets
                  their objectives, and they might be seen as strengths if they
                  have a favorable impact on the problem, but as weaknesses if
                  they have a deleterious effect.
                </p>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Interests
                  Apptitude
                </li>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Values
                  Preference
                </li>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Academic
                  Background
                </li>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Physical
                  Limitations
                </li>
                <a id="exfac">
                  <li>
                    <span className="ion-ios-arrow-forward mr-2"></span>Financial
                    Constraints
                  </li>
                </a>
              </ul>
              <hr />
              <h2 className="mb-4 mt-5">External Factors</h2>
              <ul className="ministry-list my-5">
                <p>
                  Outside influences that can impact in decision making. Various
                  external factors can impact the ability of a student to
                  achieve its strategic goals and objectives. These external
                  factors might include competition; social, legal and
                  technological changes, and the economic and political
                  environment.
                </p>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Social
                  Constraints
                </li>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Job Market
                </li>
                <li>
                  <span className="ion-ios-arrow-forward mr-2"></span>Career choices
                  of peer family members
                </li>
                <a id="urjour">
                  <li>
                    <span className="ion-ios-arrow-forward mr-2"></span>Technology
                    Media
                  </li>
                </a>
              </ul>

              <hr />
              <h2 className="mb-4 mt-5">Your Journey</h2>
              <p>
                Join us and start your very own career awareness journey as we
                guide you all the by simply becoming our member
              </p>
              <button className="btn btn-outline-primary">
                <a href="/login" target="_parent">
                  SIGN UP
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Awareness;
