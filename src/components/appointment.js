import React, { useState, useEffect } from "react";
import SearchNav from "./../partials/search_nav";
import Footer from "./../partials/footer";

export default function Appointment() {
  const [pending, setPending] = useState(true);
  const [upcoming, setUpcoming] = useState(false);
  const [past, setPast] = useState(false);

  const getPending = () => {
    setPending(true);
    setUpcoming(false);
    setPast(false);
  };

  const getUpcoming = () => {
    setPending(false);
    setUpcoming(true);
    setPast(false);
  };

  const getPast = () => {
    setPending(false);
    setUpcoming(false);
    setPast(true);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="appoint__bg">
      <SearchNav />
      <div className="appoint__container main__container">
        <div className="appoint__container--header">
          <span>My Appointments</span>
          <p>You have 1 convarg meeting(s) coming up this week</p>
        </div>
        <div className="appoint__container--nav">
          <div
            onClick={getPending}
            style={
              pending
                ? {
                    backgroundColor: "blue",
                    Border: "1px solid blue",
                    color: "#fff"
                  }
                : {
                    backgroundColor: "#fff",
                    Border: "1px solid rgba(0, 0, 0, 0.1)",
                    color: "#2c2e30"
                  }
            }
          >
            Pending
            {pending ? (
              <div>
                <div />
              </div>
            ) : null}
          </div>
          <div
            onClick={getUpcoming}
            style={
              upcoming
                ? {
                    backgroundColor: "blue",
                    Border: "1px solid blue",
                    color: "#fff"
                  }
                : null
            }
          >
            Upcoming
            {upcoming ? (
              <div>
                <div />
              </div>
            ) : null}
          </div>
          <div
            onClick={getPast}
            style={
              past
                ? {
                    backgroundColor: "blue",
                    Border: "1px solid blue",
                    color: "#fff"
                  }
                : {
                    backgroundColor: "#fff",
                    Border: "1px solid rgba(0, 0, 0, 0.1)",
                    color: "#2c2e30"
                  }
            }
          >
            Past
            {past ? (
              <div>
                <div />
              </div>
            ) : null}
          </div>
        </div>
        <div className="appoint__container--box">
          <div className="appoint__container--box-left">
            <div className="appoint__container--box-left-up">
              <span>Convarg with</span>
              <div>
                <div className="appoint__container--box-left-upleft">
                  Muyiwa Afolabi
                  <div>
                    <img src={require("./../assets/img/image1.png")} alt="" />
                  </div>
                </div>
                <div className="appoint__container--box-left-upright">
                  <img
                    src={require("./../assets/img/marker.png")}
                    alt=""
                    style={{ width: "23px" }}
                  />
                </div>
              </div>
            </div>
            <div className="appoint__container--box-left-down">
              <div>
                <span>Call Duration</span>
                <p>30 Minutes</p>
              </div>
              <div>
                <span>Cost</span>
                <p>N30,000</p>
              </div>
            </div>
          </div>
          <div className="appoint__container--box-right">
            <div className="appoint__container--box-right-up">
              Propose Meeting Times
            </div>
            <div className="appoint__container--box-right-down">
              <div>Option One</div>
              <div>
                <span>Date</span>
                <p>Jul 25th, 2019</p>
              </div>
              <div style={{ maxWidth: "100px" }}>
                <div className="appoint__container--box-right-downtime">
                  <span>Time</span>
                  <p>9:00PM</p>
                </div>
                <div className="appoint__container--box-right-downicon">
                  <div>
                    <img
                      src={require("./../assets/img/down.png")}
                      alt=""
                      style={{ width: "9px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="appoint__container--box"
          style={{
            background: "#F9FAFB",
            borderTop: "1px solid rgba(0, 0, 0, .1)"
          }}
        >
          <div className="appoint__container--box-left">
            <div className="appoint__container--box-left-up">
              <span>Convarg with</span>
              <div>
                <div className="appoint__container--box-left-upleft">
                  Wale Olajumoke
                  <div>
                    <img
                      src={require("./../assets/img/image2.png")}
                      style={{ width: "38px" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="appoint__container--box-left-upright" />
              </div>
            </div>
            <div className="appoint__container--box-left-down">
              <div>
                <span>Call Duration</span>
                <p>30 Minutes</p>
              </div>
              <div>
                <span>Cost</span>
                <p>N30,000</p>
              </div>
            </div>
          </div>
          <div className="appoint__container--box-right">
            <div className="appoint__container--box-right-up">
              Propose Meeting Times
            </div>
            <div className="appoint__container--box-right-down">
              <div>Option One</div>
              <div>
                <span>Date</span>
                <p>Jul 25th, 2019</p>
              </div>
              <div style={{ maxWidth: "100px" }}>
                <div className="appoint__container--box-right-downtime">
                  <span>Time</span>
                  <p>9:00PM</p>
                </div>
                <div className="appoint__container--box-right-downicon">
                  <div>
                    <img
                      src={require("./../assets/img/down.png")}
                      alt=""
                      style={{ width: "9px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} />
      <Footer />
    </div>
  );
}
