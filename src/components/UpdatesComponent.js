import React, { Component } from 'react';

export default class updates extends Component {
    render() {
        return (
            <div>
             <div className="flex">
                 
                     <div className="row text-center">
          <div className="col-12">
            <h1 className="title mt-1 mb-4 p-2 ">
              Get <span className="text-primary">Updates</span>
            </h1>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-5 col-md-4  mt-5 mb-2 text-center">
            <h4 className="text-. display-4 mb-4"> Career Updates</h4>
            <p className="lead mt-3">
              Send us email to get Recent Updates regarding Career Counseling
              and Workshopps
            </p>
            <a href="" className="btn btn-outline-primary text-center mt-2">
              Read More
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-lg-4 col-md-4 text-center">
            <div className="showcase-form card border-dark">
              <h2 className="text-primary text-center ">Request a News</h2>

              <form>
                <div className="form-control">
                  <input type="text" name="name" placeholder="Name" required />
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-outline-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
                 
                 
                 </div>   
            </div>
        );
    }
}

