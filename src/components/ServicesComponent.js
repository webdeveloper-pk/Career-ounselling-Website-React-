import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <div className="containar">
                     <div className="row text-center">
          <div className="col-12">
            <h1 className="title mt-4 mb-4 p-2 text-.s">
              Our <span className="text-primary">Services</span>
            </h1>
          </div>
        </div>
        <hr />
        <div className="row text-center  ">
          <div className="col-lg-4 col-md-4 mt-4 ">
            <div className="card hcbg text-white p-4">
              <i className="fa fa-paint-brush text-primary mb-3"></i>
              <h4 className="text mb-3">Career Counseling</h4>
              <p className="lead">
                The process of assisting and guiding clients to resolve
                especially psychological problems.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mt-4">
            <div className="card border-primary text-black p-4">
              <i className="fa fa-child text-primary mb-3"></i>
              <h4 className="text mb-3">Career Guidance </h4>
              <p className="lead">
                Learning about various occupations and their fit with your
                unique career preferences in career
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4  mt-4">
            <div className="card hcbg text-white p-4">
              <i className="fa fa-paint-brush text-primary mb-3"></i>
              <h4 className="text mb-3">Career Exploration</h4>
              <p className="lead">
                The process of exploration and guiding students to explore
                especially their careers.
              </p>
            </div>
          </div>
        </div>
                </div>
            </div>
        );
    }
}

export default Services;