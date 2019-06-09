import React, { useEffect } from "react";

import SearchNav from "./../partials/search_nav";
import Footer from "./../partials/footer";

export default function Search() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  });
  return (
    <div className="search__bg">
      <SearchNav />
      <div className="search__container main__container">
        <div className="search__container--header">
          <span>Top Life Coaches</span>
          <p>
            Search hundreds of top executives, consultants, and mentors
            available to help to you move your business or career forward.
          </p>
        </div>
        <div className="search__container--dropdown">
          <div className="search__container--dropdown-left">
            257 Profiles Found
          </div>
          <div className="search__container--dropdown-right">
            Highest Rating
            <div>
              <img
                src={require("./../assets/img/arrow.png")}
                alt=""
                style={{ width: "15px", height: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="search__container--box">
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-1.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Wale Olajumoke
            </div>
            <div className="search__container--box-details-three">
              Founder, Result Acceleration
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="search__container--box"
          style={{ background: "rgba(243, 245, 246, 0.4)" }}
        >
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-4.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Madame Merola
            </div>
            <div className="search__container--box-details-three">
              Founder, Result Acceleration
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search__container--box">
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-3.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Sam Obafemi
            </div>
            <div className="search__container--box-details-three">
              Founder, SOBCA
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="search__container--box"
          style={{ background: "rgba(243, 245, 246, 0.4)" }}
        >
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-5.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Ebuka Anichebe
            </div>
            <div className="search__container--box-details-three">
              Business Developer, EA Consulting
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search__container--box">
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-1.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Wale Olajumoke
            </div>
            <div className="search__container--box-details-three">
              Founder, Result Acceleration
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="search__container--box"
          style={{ background: "rgba(243, 245, 246, 0.4)" }}
        >
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-2.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Muyiwa Afolabi
            </div>
            <div className="search__container--box-details-three">
              Founder, Frontiers International LTD
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search__container--box">
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-3.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Sam Obafemi
            </div>
            <div className="search__container--box-details-three">
              Founder, SOBCA
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="search__container--box"
          style={{ background: "rgba(243, 245, 246, 0.4)" }}
        >
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-4.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Madame Merola
            </div>
            <div className="search__container--box-details-three">
              Founder, Madame Merola Consulting
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search__container--box">
          <div className="search__container--box-image">
            <div>
              <img src={require("./../assets/img/img-5.png")} alt="" />
            </div>
          </div>
          <div className="search__container--box-details">
            <div className="search__container--box-details-one">
              <div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ width: "18px" }}
                    src={require("./../assets/img/star.png")}
                    alt=""
                  />
                </div>
              </div>
              <div>13 Reviews</div>
            </div>
            <div className="search__container--box-details-two">
              Ebuka Anichebe
            </div>
            <div className="search__container--box-details-three">
              Business Developer, EA Consulting
            </div>
            <div className="search__container--box-details-four">
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
          </div>
          <div className="search__container--box-btn">
            <div className="search__container--box-btn-blue">
              Book A Meeting
            </div>
            <div className="search__container--box-btn-amount">
              N15,000/15 minutes
              <div>
                <img
                  style={{ width: "20px" }}
                  src={require("./../assets/img/wallet.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "100px" }} />

      <Footer />
    </div>
  );
}
