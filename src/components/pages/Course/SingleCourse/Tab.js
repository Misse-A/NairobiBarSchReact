import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { HiStar } from "react-icons/hi";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

export const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div>
        <div className="Single-Course-tabs ">
          <ul className="list-unstyled Stab-menu flex-wrap  active">
            <li>
              <button
                className={toggleState === 1 ? "Stabs active-Stabs" : "Stabs"}
                onClick={() => toggleTab(1)}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                className={toggleState === 2 ? "Stabs active-Stabs" : "Stabs"}
                onClick={() => toggleTab(2)}
              >
                Curriculum
              </button>
            </li>
            <li>
              <button
                className={toggleState === 3 ? "Stabs active-Stabs" : "Stabs"}
                onClick={() => toggleTab(3)}
              >
                Instructor
              </button>
            </li>
            <li>
              <button
                className={toggleState === 4 ? "Stabs active-Stabs" : "Stabs"}
                onClick={() => toggleTab(4)}
              >
                Reviews
              </button>
            </li>
          </ul>
        </div>
        <div className="Scontent-tabs">
          <div
            className={
              toggleState === 1 ? "Scontent  Sactive-content" : "Scontent"
            }
          >
            <div className="Overview">
              <h3>Course Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h3>Certification</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <h3>Who This Course is for</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
        <div className="Scontent-tabs">
          <div
            className={
              toggleState === 2 ? "Scontent  Sactive-content" : "Scontent"
            }
          >
            <div className="Curriculum">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How can I contact a school directly?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Where should I study abroad?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How do I find a study abroad program on widecademy.com?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How do I find a study abroad program on widecademy.com?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How do I find a school where I want to study?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Am I eligible for admission?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="Scontent-tabs">
          <div
            className={
              toggleState === 3 ? "Scontent  Sactive-content" : "Scontent"
            }
          >
            <div className="Instructor">
              <div className="Instructor-person">
                <i>
                  <BsPersonCircle />
                </i>
              </div>

              <div className="Instructor-text">
                <span>Jone Smit</span>
                <p>
                  Jone Smit is a celebrated photographer, author, and writer who
                  brings passion to everything he does.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Scontent-tabs">
          <div
            className={
              toggleState === 4 ? "Scontent  Sactive-content" : "Scontent"
            }
          >
            <div className="Single-Course-Tab-Review">
              <div className="Review-rate">
                <div className="Review-rate-summary">
                  <h2>5.0</h2>
                  <div className="Review-star">
                    <div>
                      <i>
                        <HiStar />
                      </i>
                    </div>
                    <div>
                      <i>
                        <HiStar />
                      </i>
                    </div>
                    <div>
                      <i>
                        <HiStar />
                      </i>
                    </div>
                    <div>
                      <i>
                        <HiStar />
                      </i>
                    </div>
                    <div>
                      <i>
                        <HiStar />
                      </i>
                    </div>
                  </div>
                  <div className="Review-text">
                    <span>1 total</span>
                  </div>
                </div>
                <div className="Review-detail">
                  <div className="Review-detail-row">
                    <span className="Review-detail-row-star">
                      5
                      <i>
                        <HiStar />
                      </i>
                    </span>
                    <div className="Review-detail-row-value">
                      <div className="Review-gray"></div>
                      <div className="Review-rating"></div>
                      <span className="Review-rating-count">1</span>
                    </div>
                  </div>

                  <div className="Review-detail-row">
                    <span className="Review-detail-row-star">
                      4
                      <i>
                        <HiStar />
                      </i>
                    </span>
                    <div className="Review-detail-row-value">
                      <div className="Review-gray"></div>
                      <div className="Review-rating"></div>
                      <span className="Review-rating-count">0</span>
                    </div>
                  </div>

                  <div className="Review-detail-row">
                    <span className="Review-detail-row-star">
                      3
                      <i>
                        <HiStar />
                      </i>
                    </span>
                    <div className="Review-detail-row-value">
                      <div className="Review-gray"></div>
                      <div className="Review-rating"></div>
                      <span className="Review-rating-count">0</span>
                    </div>
                  </div>

                  <div className="Review-detail-row">
                    <span className="Review-detail-row-star">
                      2
                      <i>
                        <HiStar />
                      </i>
                    </span>
                    <div className="Review-detail-row-value">
                      <div className="Review-gray"></div>
                      <div className="Review-rating"></div>
                      <span className="Review-rating-count">0</span>
                    </div>
                  </div>

                  <div className="Review-detail-row">
                    <span className="Review-detail-row-star">
                      1
                      <i>
                        <HiStar />
                      </i>
                    </span>
                    <div className="Review-detail-row-value">
                      <div className="Review-gray"></div>
                      <div className="Review-rating"></div>
                      <span className="Review-rating-count">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Course-review">
              <h3>Reviews</h3>
              <div className="Review-box">
                <i className="Review-icon-person">
                  <BsPersonCircle />
                </i>
                <div className="Review-author">
                  <div>
                    <h6>Jone Smit </h6>
                  </div>
                  <div className="Course-review-star">
                    <HiStar />

                    <HiStar />

                    <HiStar />

                    <HiStar />

                    <HiStar />
                  </div>
                </div>
                <div className="Review-content">
                  <p>
                    The course identify things we want to change and then figure
                    out the things that need to be done to create the desired
                    outcome. The course helped me in clearly define problems and
                    generate a wider variety of quality solutions. Support more
                    structures analysis of options leading to better decisions.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
