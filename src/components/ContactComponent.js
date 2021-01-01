import React, { Component } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <div className="flex">
        <div className="flex">
          <div className="row">
            <div className="col-12">
              <img
                className="bgimg"
                src="assets/images/home11.png"
                alt="home"
              />
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="title mt-4 mb-5 p-2 ">
              Our <span className="text-primary">Offices</span>
            </h1>
          </div>
        </div>
        <section className="products">
          <div className="section-center clearfix">
            {/* <article className="products-info ">
              <div>
                <h2 className="section-title "></h2>
              </div>

              <p className="product-text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                quae vitae! Natus sed fugiat id laudantium nemo, asperiores
                corporis amet!
              </p>
            </article> */}

            <article className="products-inventory  clearfix">
              <div className="product">
                <img
                  src="assets/images/office1.jpg"
                  height="175"
                  width="80"
                  alt="office"
                  className="product-img"
                />
                {/* <h4 className="product-title">product title</h4> */}
                <p className="lead bold text-center">Ali Arcade , F-10 Markaz</p>

                <h5 className="text-center text-uppercase">Islamabad</h5>
              </div>
              <div className="product">
                <img
                  src="assets/images/office2.jpg"
                  height="175"
                  width="80"
                  alt="office"
                  className="product-img"
                />
                <p className="lead bold text-center">Main Road , Model Town</p>
                <h5 className="text-center text-uppercase">Lahore</h5>
              </div>
              <div className="product">
                <img
                  src="assets/images/office3.jpg"
                  height="175"
                  width="80"
                  alt="office"
                  className="product-img"
                />
                <p className="lead bold text-center">Hayat Arcade , Korangi Town</p>
                <h5 className="text-center text-uppercase">Karachi</h5>
              </div>
              <div className="product">
                <img
                  src="assets/images/office4.jpg"
                  height="175"
                  width="80"
                  alt="office"
                  className="product-img"
                />
                <p className="lead bold text-center">C4U House ,Iqbal Town</p>

                <h5 className="text-center text-uppercase">Multan</h5>
              </div>
            </article>
          </div>
        </section>

        <div className="row text-center">
          <div className="col-1"></div>
          <div className="col-10">
            <h1 className="mt-5 mb-5 p-1 text-center  cu ">
              Contact <span className="text-primary"> Us</span>
            </h1>
            <p cNameName="lead  text-center pt-2">
              Our team is dedicated to providing answers and solutions to an
              give us your feedback and we’ll be happy to look into how we can
              innovate our system to better serve you!
            </p>

            <address cNameName=" text-center">
              <b>Office :</b> Ahmad Arcade , F10 Markaz , Islamabad Pakistan.
              <br />
              <i className="fa fa-phone mr-2"></i> Tel : +852 1234 5678
              <br />
              <i className="fa fa-envelope mr-2 mb-3"></i>
              <a href="mailto:confusion@food.net">Email : confusion@food.net</a>
            </address>
            <a
              role="button"
              className="btn btn-secondary mr-2 px-3"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone "></i> Call
            </a>

            <a
              role="button"
              className="btn btn-primary "
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
          <div className="col-1"></div>
        </div>
        <hr />
        <div className="row row-content">
          <div className="col-12 text-center mb-5 ">
            <h1>
              Give <span className="text-primary">Feedback</span>
            </h1>
          </div>

          <div className="col-12 col-md-9 mt-2">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid Email Address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 5, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
