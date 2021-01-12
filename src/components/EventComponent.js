import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="section featured-tours" id="featured">
            <div className="title-wrapper">
              <hr />
              <h2 className="title text-center  mt-5 mb-5">
                Upcoming <span className="subtitle text-primary">Events</span>
              </h2>
            </div>
          </div>
          <hr />
          <hr />
        </div>
        <div className="flex">
          <div className="row ibody mb-4">
            <div className="card icard px-4 pt-4  mx-auto mt-5 ">
              <div className="ml-auto iml-auto">
                <span className="text-success itext-success">Seats available</span>
              </div>
              <div>
                <img
                  src="assets/images/c.jpg"
                  alt="Logo"
                  className="iimg2"
                  height="45"
                  width="45"
                />
                <h5 className="d-inline align-middle ml-2">
                  C<span className="text-primary">4</span>U
                </h5>
              </div>

              <p className="mt-3 mb-2 ip">10/06/20 -- Remote</p>
              <h5>Career Counseling Workshop </h5>
              <p className="mt-4 mb-2 ip">Hosted by</p>
              <div className="users mb-4">
                <img src="assets/images/cs1.png" alt="img1" className="iimg" />
                <img src="assets/images/cs2.jpg" alt="img2" className="iimg" />
                <img src="assets/images/cs3.png" alt="img3" className="iimg" />
                <img src="assets/images/cs4.jpg" alt="img4" className="iimg" />
              </div>
              <button className="btn btn-dark mb-2 ibtn ibtn-dark">
                <span>Book a seat</span>
              </button>
              <button className="btn info">
                <span>More information</span>
              </button>
            </div>

            <div className="card icard px-4 pt-4 pb-4 mx-auto mt-5 ">
              <div className="ml-auto iml-auto">
                <span className="text-success itext-success">Seats available</span>
              </div>
              <div>
                <img
                  src="assets/images/c.jpg"
                  alt="Logo"
                  className="iimg2"
                  height="45"
                  width="45"
                />
                <h5 className="d-inline align-middle ml-2">
                  {" "}
                  C<span className="text-primary">4</span>U
                </h5>
              </div>
              <p className="mt-3 mb-2 ip">10/06/20 -- Remote</p>
              <h5>Students Guidance Workshop</h5>
              <p className="mt-4 mb-2 ip">Hosted by</p>
              <div className="users mb-4">
                <img src="assets/images/cs1.png" alt="img1" className="iimg" />

                <img src="assets/images/cs3.png" alt="img3" className="iimg" />
                <img src="assets/images/cs4.jpg" alt="img4" className="iimg" />
                <img src="assets/images/cs2.jpg" alt="img2" className="iimg" />
              </div>
              <button className="btn btn-dark mb-2 ibtn ibtn-dark">
                <span>Book a seat</span>
              </button>
              <button className="btn info">
                <span>More information</span>
              </button>
            </div>

            <div className="card icard px-4 pt-4 pb-4 mx-auto mt-5 ">
              <div className="ml-auto iml-auto">
                <span className="text-success itext-success">Seats available</span>
              </div>
              <div>
                <img
                  src="assets/images/c.jpg"
                  alt="Logo"
                  className="iimg2"
                  height="45"
                  width="45"
                />
                <h5 className="d-inline align-middle ml-2">
                  {" "}
                  C<span className="text-primary">4</span>U
                </h5>
              </div>
              <p className="mt-3 mb-2 ip">10/06/20 -- Remote</p>
              <h5> Career Counseling Workshop</h5>
              <p className="mt-4 mb-2 ip">Hosted by</p>
              <div className="users mb-4">
                <img src="assets/images/cs3.png" alt="img3" className="iimg" />
                <img src="assets/images/cs2.jpg" alt="img2" className="iimg" />
                <img src="assets/images/cs4.jpg" alt="img4" className="iimg" />
                <img src="assets/images/cs1.png" alt="img1" className="iimg" />
              </div>
              <div className="text-center">
                <button className="btn btn-dark mb-2 ibtn ibtn-dark">
                  <span>Book a seat</span>
                </button>
              </div>
              <button className="btn info">
                <span>More information</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
