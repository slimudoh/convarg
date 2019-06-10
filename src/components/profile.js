import React, { useEffect } from "react";

import SearchNav from "./../partials/search_nav";
import Footer from "./../partials/footer";

export default function Profile() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <div className="profile__bg">
      <SearchNav />
      <div className="profile__container main__container">
        <div className="profile__container--left">
          <div className="profile__container--left-card">
            <div className="profile__container--left-card-review">
              <div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
              </div>
              <div>12 Reviews</div>
            </div>
            <div className="profile__container--left-card-name">
              Muyiwa Afolabi
              <div>
                <img src={require("./../assets/img/marker.png")} alt="" />
              </div>
            </div>
            <div className="profile__container--left-card-title">
              Founder, Frontiers International LTD
            </div>
            <div className="profile__container--left-card-amount">
              <div className="profile__container--left-card-amount-left">
                Lagos, Nigeria
                <div>
                  <img src={require("./../assets/img/circle.png")} alt="" />
                </div>
              </div>
              <div className="profile__container--left-card-amount-right">
                N15,000/15 minutes
                <div>
                  <img src={require("./../assets/img/wallet.png")} alt="" />
                </div>
              </div>
            </div>
            <div className="profile__container--left-card-btn">
              <div>
                <div>Brand Design</div>
              </div>
              <div>
                <div>Finance</div>
              </div>
              <div>
                <div>Business Development</div>
              </div>
            </div>
            <div className="book__meeting--mobile">Book A Meeting</div>
          </div>
          <div className="profile__container--left-bio">
            <span>BIOGRAPHY</span>
            <p>
              Muyiwa is the founder and group CEO of Frontiers International
              ltd. For many years, he worked in leading world class businesses
              including MTN Nigeria, Cadbury Nigeria plc and Rosabel Leo Burnet
              Advertising Group. At these companies, he served in various
              capacities including sales, brand management, advertising
              management, innovation, procurement, direct marketing, media
              management, account management and value chain process management.
              <br />
              <br />
              Muyiwa is today, a celebrated professional speaker on subjects of
              business and career success – inspiring millions of daily
              listeners through his radio and TV business and Career talk shows
              on many media stations. <br />
              <br />
              Muyiwa has also trained and coached thousands of employees across
              Africa in various sectors including telecoms, banking, Oil and
              Gas, Manufacturing, Pharmaceuticals, Insurance, hospitality,
              Energy, Logistics, The Military, the public service and several
              government agencies. <br />
              <br />
              As the president of Frontiers Business Academy, Muyiwa continues
              to drive the embrace of real entrepreneurship as the key to
              significant economic transformation in Africa – urging and
              training many to start, grow and professionally manage their own
              businesses in the continent.
              <br />
              <br /> Muyiwa is a certified Marketing consultant, Certified
              Public Relations Consultant, a serial entrepreneur, a social
              reformer and a fellow of the Institute of Management Consulting
              global – licenced to practice in 48 countries of the world
              including the G8.
            </p>
          </div>
          <div className="profile__container--left-help">
            <span>I CAN HELP YOU WITH</span>
            <div>
              <div>
                <div className="profile__container--left-help-name">
                  Brand Development
                </div>
                <div className="profile__container--left-help-btn">
                  Brand Design
                </div>
              </div>
              <p>
                Muyiwa is the founder and group CEO of Frontiers International
                ltd. For many years, he worked in leading world class businesses
                including MTN Nigeria, Cadbury Nigeria plc and Rosabel Leo
                Burnet Advertising Group. At these companies, he served in
                various capacities including sales, brand management,
                advertising management, innovation, procurement, direct
                marketing, media management, account management and value chain
                process management.
              </p>
            </div>
            <div>
              <div>
                <div className="profile__container--left-help-name">
                  Fund Raising
                </div>
                <div className="profile__container--left-help-btn">Finance</div>
              </div>
              <p>
                Muyiwa is the founder and group CEO of Frontiers International
                ltd. For many years, he worked in leading world class businesses
                including MTN Nigeria, Cadbury Nigeria plc and Rosabel Leo
                Burnet Advertising Group. At these companies, he served in
                various capacities including sales, brand management,
                advertising management, innovation, procurement, direct
                marketing, media management, account management and value chain
                process management.
              </p>
            </div>
          </div>
          <div className="profile__container--left-reviews">
            <span>REVIEWS</span>
            <div className="profile__container--left-reviews-box">
              <div className="profile__container--left-reviews-box-left">
                <div className="profile__container--left-reviews-box-left-stars">
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                </div>
                <div className="profile__container--left-reviews-box-left-text">
                  There’s no way we could have hired these many people and
                  gotten so much business had we not had all of those
                  back-office systems figured out. It’s been easier growing our
                  company.
                </div>
                <div className="profile__container--left-reviews-box-left-name">
                  <p>Seun Babalola, Student</p>
                  <div>
                    <img src={require("./../assets/img/oval.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="profile__container--left-reviews-box-right">
                <div className="profile__container--left-reviews-box-right-stars">
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                </div>
                <div className="profile__container--left-reviews-box-right-text">
                  There’s no way we could have hired these many people and
                  gotten so much business had we not had all of those
                  back-office systems figured out.
                </div>
                <div className="profile__container--left-reviews-box-right-name">
                  <p>Seun Babalola, Student</p>
                  <div>
                    <img src={require("./../assets/img/oval.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__container--left-reviews-nav">
              &#8592; 2 0f 14 &#8594;
            </div>
          </div>
        </div>
        <div className="profile__container--right">
          <div className="profile__container--right-box">
            <div className="profile__container--right-avatar">
              <div>
                <img
                  src={require("./../assets/img/profile.png")}
                  alt="Muyowa Afolabi"
                />
              </div>
            </div>
            <div className="profile__container--right-rating">
              <div className="profile__container--right-rating-left">
                <div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                  <div>
                    <img src={require("./../assets/img/star.png")} alt="" />
                  </div>
                </div>
                <div>12 Reviews</div>
              </div>
              <div className="profile__container--right-rating-right">
                Lagos, Nigeria
                <div>
                  <div />
                </div>
              </div>
            </div>
            <div className="profile__container--right-name">
              Muyiwa Afolabi
              <div>
                <img
                  src={require("./../assets/img/marker.png")}
                  style={{ width: "23px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="profile__container--right-position">
              Founder, Frontiers International LTD
            </div>
            <div className="profile__container--right-amount">
              N15,000/15 minutes
              <div>
                <img
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                  style={{ width: "20px" }}
                />
              </div>
            </div>
            <div className="profile__container--right-btn">Book A Meeting</div>
          </div>
        </div>
      </div>
      <div className="profile__container--right-experts main__container">
        <p>SIMILAR EXPERTS</p>
        <div>
          <div>
            <div className="profile__container--right-experts-avatar">
              <img src={require("./../assets/img/img-1.png")} alt="" />
            </div>
            <div className="profile__container--right-experts-review">
              <div className="profile__container--right-experts-star">
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                {/* <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div> */}
              </div>
              <div className="profile__container--right-experts-rev">
                28 Reviews
              </div>
            </div>
            <p>Sam Obafemi</p>
            <span>Founder, SOBCA</span>
          </div>
          <div>
            <div className="profile__container--right-experts-avatar">
              <img src={require("./../assets/img/img-3.png")} alt="" />
            </div>
            <div className="profile__container--right-experts-review">
              <div className="profile__container--right-experts-star">
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                {/* <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div> */}
              </div>
              <div className="profile__container--right-experts-rev">
                28 Reviews
              </div>
            </div>
            <p>Wale Olajumoke</p>
            <span>Founder, Result Acceleration</span>
          </div>
          <div>
            <div className="profile__container--right-experts-avatar">
              <img src={require("./../assets/img/img-4.png")} alt="" />
            </div>
            <div className="profile__container--right-experts-review">
              <div className="profile__container--right-experts-star">
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
              </div>
              <div className="profile__container--right-experts-rev">
                28 Reviews
              </div>
            </div>
            <p>
              Madame Merola{" "}
              <img
                src={require("./../assets/img/marker.png")}
                style={{ width: "17px", paddingBottom: "7px" }}
                alt=""
              />
            </p>
            <span>Founder, Madame Merola Consulting</span>
          </div>
          <div>
            <div className="profile__container--right-experts-avatar">
              <img src={require("./../assets/img/img-5.png")} alt="" />
            </div>
            <div className="profile__container--right-experts-review">
              <div className="profile__container--right-experts-star">
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
                <div>
                  <img src={require("./../assets/img/star.png")} alt="" />
                </div>
              </div>
              <div className="profile__container--right-experts-rev">
                28 Reviews
              </div>
            </div>
            <p>Ebuka Anichebe</p>
            <span>Business Developer, EA Consulting</span>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} />
      <Footer />
    </div>
  );
}
