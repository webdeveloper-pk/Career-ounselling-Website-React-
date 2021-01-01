import React, { Component } from "react";

class login extends Component {
  state = {
    email: "",
    pwd: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="flex">
          <div className="row">
            <div className="col-12">
              <img className="bgimg" src="assets/images/home3.jpg" alt="home" />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="title mt-4 mb-5 p-2 ">
              Our <span className="text-primary">Packges</span>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row text-center  ">
            <div className="col-lg-4 col-md-4  mt-4 ">
              <div className="card hcbg text-white p-4">
                <i className="fa fa-paint-brush text-primary mb-3"></i>
                <h4 className="text mb-3">Student Portal</h4>
                <p className="lead">
                  The process of assisting and guiding clients to resolve
                  especially psychological problems.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4  mt-4">
              <div className="card border-primary text-black p-4">
                <i className="fa fa-child text-primary mb-3"></i>
                <h4 className="text mb-3">Student Journey </h4>
                <p className="lead">
                  Learning about various occupations and their fit with your
                  unique career preferences in career
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4  mt-4">
              <div className="card hcbg text-white p-4">
                <i className="fa fa-paint-brush text-primary mb-3"></i>
                <h4 className="text mb-3">Student Counseler</h4>
                <p className="lead">
                  The process of exploration and guiding students to explore
                  especially their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="title mt-4 mb-5 p-2 ">
              Get <span className="text-primary">SignUp</span>
            </h1>
          </div>
        </div>
        <div className=" rbody rmain-bg">
          <div className="rlogin-container rtext-c animated flipInX">
            <div>
              <h1 className="rlogo-badge text-whitesmoke">
                <span className="fa fa-user-circle"></span>
              </h1>
            </div>
            <h3 className="text-white mt-3 mb-4 text-center">Sign Up </h3>

            <div className="rcontainer-content">
              <form className="rmargin-t mt-4">
                <div className="form-group">
                  <label for="rname"></label>
                  <input
                    id="rname"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label for="remail"></label>
                  <input
                    id="remail"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label for="rpassword"></label>
                  <input
                    id="rpassword"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label for="rconpassword"></label>
                  <input
                    id="rconpassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required=""
                  />
                </div>
                <button type="submit" className="rform-button rbutton-l rmargin-b">
                  Sign Up
                </button>

                <p className="text-white text-center mt-3">
                  <small>Already have an account?</small>
                  <span>
                    {" "}
                    <a href="#" className="ra">
                      Sign In
                    </a>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default login;
