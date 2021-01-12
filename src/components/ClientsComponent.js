import React, { Component } from 'react';

class Clients extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <section className="about-area mt-5">
          <div className="container">
            <div className="row text-center mt-5 mb-5">
              <div className="col-12">
                <div className="about-title">
                  <h1 className=" title-h1">
                    Our <span className="text-primary">Clients</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="container carousel card border-primary  ">
            <div className="owl-carousel owl-theme">
              <div className="client row mt-5 mb-5  ">
                <div className="col-lg-2 client-img ">
                  <img
                    src="assets/images/person1.jpg"
                    alt="img1"
                    className="img-fluid"
                    height="100px"
                    width="100"
                  />
                </div>
                <div className="col-lg-4 about-client ">
                  <h4 className="text-primary">John Martin</h4>
                  <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione,
                  </p>
                </div>

                <div className="col-lg-2 ">
                  <img
                    src="assets/images/person1.jpg"
                    alt="img2"
                    className="img-fluid"
                    height="100px"
                    width="100"
                  />
                </div>
                <div className="col-lg-4">
                  <h4 className="text-primary">Mac Hill</h4>
                  <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem architecto consequuntur ratione,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
                 </div>   
            </div>
        );
    }
}

export default Clients;