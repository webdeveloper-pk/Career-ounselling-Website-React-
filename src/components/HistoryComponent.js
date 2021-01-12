import React, { Component } from 'react';
import { Card, CardBody, CardHeader } from "reactstrap";

class History extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row text-center">
          <div class="col-12">
            <h1 class="title mt-5 mb-5 p-2">
              Our <span class="text-primary">History</span>
            </h1>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-4 col-md-4 card bg-dark text-white">
            <p class="lead pt-4  ml-2 mr-2">
              Career planning is an ongoing process of choosing a Career that
              fits with your own unique set of interests, abilities, personal
              attributes and values. The need of career awareness leads students
              to know the different possibilities and different Careers.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-lg-7 col-md-6 ">
            <Card border-primary>
              <CardHeader className="bg-primary text-white">
                Facts At a Glance
              </CardHeader>
              <CardBody>
                <dl className="row p-1">
                  <dt className="col-6">Started</dt>
                  <dd className="col-6">3 Feb. 2020</dd>
                  <dt className="col-6">University</dt>
                  <dd className="col-6">Air University,Islamabad</dd>
                  <dt className="col-6">Students Name</dt>
                                        <dd className="col-6">Abdullah</dd>
                                        <dt className="col-6">Students Name</dt>
                                        <dd className="col-6">Owais Hassan</dd>
                                        <dt className="col-6">Students Id</dt>
                  <dd className="col-6">160574,160574</dd>
                </dl>
              </CardBody>
            </Card>
          </div>

          <div className="col-12">
            <br />
            <Card>
              <CardBody className="bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-0  text-center">
                    " There are no shortcuts to any place worth going !"
                  </p>
                  <footer className="blockquote-footer text-center text-primary">
                    Beverly Sills
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </div>
        </div>
                </div>
            </div>
        );
    }
}

export default History;