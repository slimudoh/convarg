import React, { useEffect } from "react";

import SearchNav from "./../partials/search_nav";
import Footer from "./../partials/footer";

export default function About() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="about__bg">
      <SearchNav />
      <div className="about__container main__container">
        <div className="about__container--header">
          <div className="about__container--header-left">
            <span>
              Learn from <br /> industry-experts
            </span>
            <p>
              Research shows more people are searching for clarity on how to
              approach the most complex challenges in their career
            </p>
            <div>
              <div>Learn More</div>
            </div>
          </div>
          <div className="about__container--header-right">
            <img src={require("./../assets/img/tab.png")} alt="" />
            <div>
              <div>
                <img src={require("./../assets/img/play.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="about__container--how">
          <div className="about__container--how-top">
            <span>how we do it</span>
            <p>A simple, proven way to fast-track your success.</p>
          </div>
          <div className="about__container--how-bottom">
            <div>
              <div>
                <div className="about__container--how-bottom-left">
                  <img src={require("./../assets/img/why1.png")} alt="" />
                </div>
                <div className="about__container--how-bottom-right">
                  One Platform
                </div>
              </div>
              <p>
                Research shows more people are searching for clarity on how to
                approach the most complex challenges in their career.
              </p>
            </div>
            <div>
              <div>
                <div className="about__container--how-bottom-left">
                  <img src={require("./../assets/img/why2.png")} alt="" />
                </div>
                <div className="about__container--how-bottom-right">
                  Live Sessions
                </div>
              </div>
              <p>
                Research shows more people are searching for clarity on how to
                approach the most complex challenges in their career.
              </p>
            </div>
            <div>
              <div>
                <div className="about__container--how-bottom-left">
                  <img src={require("./../assets/img/why3.png")} alt="" />
                </div>
                <div className="about__container--how-bottom-right">
                  Grow your career
                </div>
              </div>
              <p>
                Research shows more people are searching for clarity on how to
                approach the most complex challenges in their career.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about__container--features main__container">
        <div className="about__container--features-board">
          <div>
            <div>
              <img src={require("./../assets/img/tab.png")} alt="" />
            </div>
          </div>
        </div>
        <p>Packed with amazing features</p>
        <div className="about__container--features-list">
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat1.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                Feature one
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat2.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                Feature two
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat3.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                Conquer new ground
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat4.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                You're in charge
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat5.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                You're an expert
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
          <div>
            <div>
              <div className="about__container--features-list-icon">
                <img src={require("./../assets/img/feat6.png")} alt="" />
              </div>
              <div className="about__container--features-list-text">
                Feature six
              </div>
            </div>
            <p>
              No more Mulitple Platforms. Now it had seen unable uneasy.
              Drawings can followed by improved out sociable not. Earnestly so
              do instantly pretended.
            </p>
          </div>
        </div>
      </div>
      <div className="about__container main__container">
        <div className="about__container--faq">
          <span>Have a question?</span>
          <p>Frequently Asked Questions</p>
          <div>
            <div>
              <span>How to get started?</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
            <div>
              <span>How can I make a payment?</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
            <div>
              <span>Do you have any refund system?</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
            <div>
              <span>How can I download conversations?</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
            <div>
              <span>Can I cancel a call for free?</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
            <div>
              <span>Are my conversations monitored?`</span>
              <p>
                Silent sir say desire fat him letter. Whatever settling goodness
                too and honoured she building answered her. Strongly thoughts
                remember mr to do consider debating. Spirits musical behaved on
                we he farther letters.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about__container--signup">
        <div className="about__container--signup-container">
          <div>
            <div className="about__container--signup-top-image">
              <img src={require("./../assets/img/small-dots.png")} alt="" />
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
          <div style={{ right: "200px" }}>
            <img src={require("./../assets/img/large-dots.png")} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
