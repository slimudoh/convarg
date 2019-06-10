import React, { useState, useEffect } from "react";

import MainNav from "./../partials/main_nav";
import Footer from "./../partials/footer";
// import Carousel from "react-bootstrap/Carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  const [resp] = useState({ 1024: { items: 3 } });

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <>
      <div className="bg__container">
        <div>
          <MainNav />
          <div className="main__container">
            <div className="bg__container--header">
              <span>
                Book 1-on-1 video meetings
                <br /> with top consultants, <br />
                executives & mentors
              </span>
              <p>
                Book your first 15 minutes for free* and gain
                <br /> access to top minds from
              </p>
            </div>
            <div className="bg__container--btn">
              <div>Get Started</div>
            </div>
            <div className="bg__container--rating">
              <div>
                <div>
                  <div>
                    <img
                      src={require("./../assets/img/star.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/star.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/star.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/star.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/star.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                </div>
                <p>Jimi Tewe</p>
                <span>Career Coach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__container main__container">
        <div className="home__container--expert">
          <div>
            <div>
              <p>Top Experts</p>
              <div>
                <div>
                  <div className="home__container--expert-avatar">
                    <img src={require("./../assets/img/img-2.png")} alt="" />
                  </div>
                  <div className="home__container--expert-name">
                    <span>Lanre Olushola</span>
                    <p>Business Coach</p>
                  </div>
                  <div className="home__container--expert-rating">
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="home__container--expert-avatar">
                    <img src={require("./../assets/img/img-2.png")} alt="" />
                  </div>
                  <div className="home__container--expert-name">
                    <span>Lanre Olushola</span>
                    <p>Business Coach</p>
                  </div>
                  <div className="home__container--expert-rating">
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="home__container--expert-avatar">
                    <img src={require("./../assets/img/img-2.png")} alt="" />
                  </div>
                  <div className="home__container--expert-name">
                    <span>Lanre Olushola</span>
                    <p>Business Coach</p>
                  </div>
                  <div className="home__container--expert-rating">
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="home__container--expert-avatar">
                    <img src={require("./../assets/img/img-2.png")} alt="" />
                  </div>
                  <div className="home__container--expert-name">
                    <span>Lanre Olushola</span>
                    <p>Business Coach</p>
                  </div>
                  <div className="home__container--expert-rating">
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                    <div>
                      <img
                        src={require("./../assets/img/star.png")}
                        alt=""
                        style={{ width: "18px", height: "19px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__container--list">
          <span>
            Convarg is for the complex questions
            <br /> that Google can't answer.
          </span>
          <p>
            Research shows more people are searching for clarity on how to
            approach the
            <br /> most complex challenges in their career - but until now only
            only the select <br />
            few had the network, experience or knowledge to succeed. Here's how
            people
          </p>
          <div>
            <div>
              <div>
                <img src={require("./../assets/img/con1.png")} alt="" />
              </div>
              <p>Your product or strategy needs work</p>
            </div>
            <div>
              <div>
                <img src={require("./../assets/img/con2.png")} alt="" />
              </div>
              <p>You have a business idea, but no idea how to start</p>
            </div>
            <div>
              <div>
                <img src={require("./../assets/img/con3.png")} alt="" />
              </div>
              <p>You need to learn new skills to advance</p>
            </div>
            <div>
              <div>
                <img src={require("./../assets/img/con4.png")} alt="" />
              </div>
              <p>It's time to switch careers or make a change</p>
            </div>
          </div>
        </div>
        <div className="home__container--btn">
          <div>Learn More</div>
        </div>
      </div>
      <div className="home__container--how">
        <div className="main__container">
          <div className="home__container--how-header">
            <span>FIND. MATCH. CONNECT.</span>
            <p>How It Works</p>
          </div>
          <div className="home__container--how-list">
            <div>
              <div>01</div>
              <p>Find the Perfect Expert</p>
              <span>
                Browse thousands of CommonGenius’ consultants, trainers, and
                mentors, and easily find the perfect guide to help you or your
                team overcome the toughest challenges.
              </span>
            </div>
            <div>
              <div>02</div>
              <p>Book A Meeting</p>
              <span>
                Our convenient booking systems allows you to schedule a
                one-on-one meeting in-person or group consultation through our
                video platform.
              </span>
            </div>
            <div>
              <div>03</div>
              <p>Make Faster & Better Decisions</p>
              <span>
                Ask questions, get feedback, learn new skills, and gain insights
                that generally take years to attain. By learning from
                experience, you’ll avoid the stumbling blocks
              </span>
            </div>
            <div>
              <div>04</div>
              <p>Learn. Unlearn.</p>
              <span>
                Ask questions, get feedback, learn new skills, and gain insights
                that generally take years to attain. By learning from
                experience, you’ll avoid the stumbling blocks
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home__container--test">
        <div className="home__container--test-left">
          See what others <br />
          are saying
        </div>
        <div className="home__container--test-right">
          <img src={require("./../assets/img/test.jpg")} alt="" />
        </div>
        <div className="home__container--test-bottom">
          <AliceCarousel responsive={resp} buttonsDisabled={true}>
            <div className="home__container--test-bottom-slider">
              <div style={{ backgroundColor: "#0f295a" }}>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/white-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/white-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p style={{ color: "#fff" }}>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>

                <span
                  className="home__container--test-span-one"
                  style={{ color: "#fff" }}
                >
                  Chidi Ogwu /
                </span>
                <span
                  className="home__container--test-span-two"
                  style={{ color: "#fff" }}
                >
                  CNN News
                </span>
              </div>
            </div>
            <div className="home__container--test-bottom-slider">
              <div>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>
                <span className="home__container--test-span-one">
                  Musa Hammed /
                </span>
                <span className="home__container--test-span-two">
                  TVC Studio
                </span>
              </div>
            </div>
            <div className="home__container--test-bottom-slider">
              <div>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>
                <span className="home__container--test-span-one">
                  Jen Park /
                </span>
                <span className="home__container--test-span-two">
                  NewYork Times
                </span>
              </div>
            </div>
            <div className="home__container--test-bottom-slider">
              <div style={{ backgroundColor: "#0f295a" }}>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/white-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/white-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p style={{ color: "#fff" }}>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>

                <span
                  className="home__container--test-span-one"
                  style={{ color: "#fff" }}
                >
                  Chidi Ogwu /
                </span>
                <span
                  className="home__container--test-span-two"
                  style={{ color: "#fff" }}
                >
                  CNN News
                </span>
              </div>
            </div>
            <div className="home__container--test-bottom-slider">
              <div>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>
                <span className="home__container--test-span-one">
                  Musa Hammed /
                </span>
                <span className="home__container--test-span-two">
                  TVC Studio
                </span>
              </div>
            </div>
            <div className="home__container--test-bottom-slider">
              <div>
                <div className="home__container--test-bottom-quote">
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={require("./../assets/img/blue-quote.png")}
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Working together with our partners, we can help make pregnancy
                  and childbirth a safe, healthy, and joyful experience for
                  women.
                </p>
                <span className="home__container--test-span-one">
                  Jen Park /
                </span>
                <span className="home__container--test-span-two">
                  NewYork Times
                </span>
              </div>
            </div>
          </AliceCarousel>
        </div>
      </div>
      <div className="home__container--partners main__container">
        <p>OUR PARTNERS</p>
        <div>
          <div>
            <img src={require("./../assets/img/part1.png")} alt="" />
          </div>
          <div>
            <img src={require("./../assets/img/part2.png")} alt="" />
          </div>
          <div>
            <img src={require("./../assets/img/part3.png")} alt="" />
          </div>
          <div>
            <img src={require("./../assets/img/part4.png")} alt="" />
          </div>
          <div>
            <img src={require("./../assets/img/part5.png")} alt="" />
          </div>
          <div>
            <img src={require("./../assets/img/part6.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="home__container--signup-box">
        <div>
          <div>
            <div className="about__container--signup">
              <div className="about__container--signup-container">
                <div>
                  <div className="about__container--signup-top-image">
                    <img
                      src={require("./../assets/img/small-dots.png")}
                      alt=""
                    />
                  </div>
                  <div className="about__container--signup-text">
                    <p>
                      Schedule meetings and hold 1-on-1
                      <br /> video consultations on the go.
                    </p>
                    {/* <div>f</div> */}
                  </div>
                </div>
              </div>
              <div className="about__container--signup-btm-image">
                <div>
                  <img src={require("./../assets/img/large-dots.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
