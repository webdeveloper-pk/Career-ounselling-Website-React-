import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto pt-3" href="/">
              <img
                src="assets/images/logo.png"
                height="55"
                width="50"
                alt="Logo"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto " navbar > 
                <NavItem className="text-dark">
                  <NavLink className="nav-link " to="/home">
                    <span></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link " to="/aboutus">
                    <span></span> About Us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link " to="/awareness">
                    <span></span> Awareness Journey
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    <span></span> Student Portal
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span></span> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="mt-2 ml-3" navbar>
                <NavItem>
                  <button
                    class="btn btn-outline-light ml-2 px-3"
                    onClick={this.toggleModal}
                  >
                    <span></span> Login
                  </button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Modal
          class="border-primary modal fade"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <ModalHeader toggle={this.toggleModal}></ModalHeader>
          <ModalBody>
            <h3 className="text-dark text-center">Login</h3>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">User Name</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <hr />

              <button type="button" className="btn btn-dark btn-block btn-round">
                Login
              </button>

              <div className="text-center text-muted delimiter">
                or use a social network
              </div>
              <div className="d-flex justify-content-center social-buttons">
                <button
                  type="button"
                  className="btn btn-dark btn-round "
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </button>
                <button
                  type="button"
                  classNmae="btn btn-dark btn-round"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <i class="fa fa-facebook"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-dark btn-round"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </button>
              </div>

              <div className="modal-footer d-flex justify-content-center">
                <div className="signup-section">
                  Not a member yet?{" "}
                  <a href="#a" className="text-info">
                    {" "}
                    Sign Up
                  </a>
                  .
                </div>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Header;
