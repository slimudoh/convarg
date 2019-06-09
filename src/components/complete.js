import React, { useEffect } from "react";

import SidebarProfile from "./../partials/sidebar_profile";

export default function Complete() {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="meet__section">
      <div className="meet__section--container">
        <div className="meet__section--logo" style={{ marginBottom: "50px" }}>
          <div>
            <img src={require("./../assets/img/logo.png")} alt="logo" />
          </div>
        </div>
        <div className="complete__image">
          <div>
            <img src={require("./../assets/img/person.png")} alt="person" />
          </div>
        </div>
        <div className="complete__text">
          <span>Successful!</span>
          <p>
            Your convarg meeting with Muyiwa Afolabi has been booked. The
            details are below.
          </p>
        </div>
        <div className="complete__meetinge">
          <p>Propose Meeting Times</p>
          <div className="complete__meeting--box">
            <div>Option One</div>
            <div>
              <span>Date</span>
              <p>Jul 25th, 2019</p>
            </div>
            <div>
              <span>Time</span> <p>9:00PM</p>
            </div>
          </div>
          <div className="complete__lines" />
          <div className="complete__meeting--box">
            <div>Option Two</div>
            <div>
              <span>Date</span>
              <p>Jul 29th, 2019</p>
            </div>
            <div>
              <span>Time</span> <p>8:00PM</p>
            </div>
          </div>
          <div className="complete__lines" />
          <div className="complete__meeting--box">
            <div>Option Three</div>
            <div>
              <span>Date</span>
              <p>Aug 1st, 2019</p>
            </div>
            <div>
              <span>Time</span> <p>8:00PM</p>
            </div>
          </div>
          <div className="complete__lines" />
          <div className="complete__meeting--box">
            <div>
              Cost
              <br />
              Breakdown
            </div>
            <div>
              <span>Call Duration </span>
              <p>30 Minutes</p>
            </div>
            <div>
              <span>Cost</span> <p>30,000</p>
            </div>
          </div>
        </div>
        <div className="complete__btn">
          <button className="auth__container--blue-btn">My Appointments</button>
        </div>
      </div>

      <div className="meet__section--profile">
        <SidebarProfile />
      </div>
    </div>
  );
}
