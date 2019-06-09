import React from "react";
import { Link } from "react-router-dom";

export default function SidebarProfile() {
  return (
    <div className="sidebar__profile">
      <div>
        <div className="sidebar__profile--close">
          <Link to="/">
            <div className="sidebar__profile--close-left">
              <img src={require("./../assets/img/close.png")} alt="view" />
            </div>
            <div className="sidebar__profile--close-right">close</div>
          </Link>
        </div>
      </div>
      <div>
        <div className="sidebar__profile--avatar">
          <img src={require("./../assets/img/profile.png")} alt="avatar" />
        </div>
        <div className="sidebar__profile--review">
          <div className="sidebar__profile--review-left">
            <div>
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
              <div>12 Reviews</div>
            </div>
          </div>
          <div className="sidebar__profile--review-right">
            <div className="sidebar__profile--review-right-left">
              <img
                style={{ width: "16px" }}
                src={require("./../assets/img/review.png")}
                alt=""
              />
            </div>
            <div className="sidebar__profile--review-right-right">
              Lagos, Nigeria
            </div>
          </div>
        </div>
        <div className="sidebar__profile--name">
          <div className="sidebar__profile--name-left">
            Muyiwa Afolabi
            <div>
              <img
                style={{ width: "23px" }}
                src={require("./../assets/img/marker.png")}
                alt=""
              />
            </div>
          </div>
          <div className="sidebar__profile--name-right" />
        </div>
        <div className="sidebar__profile--company">
          Founder, Frontiers International LTD
        </div>
        <div className="sidebar__profile--amount">
          <div className="sidebar__profile--amount-icon">
            <img
              style={{ width: "20px" }}
              src={require("./../assets/img/wallet.png")}
              alt=""
            />
          </div>
          <div className="sidebar__profile--amount-figure">
            N15,000/15 minutes
          </div>
        </div>
      </div>
    </div>
  );
}
