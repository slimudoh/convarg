import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MainNav() {
  const [mobile, setMobile] = useState(false);

  const showMobile = () => {
    if (mobile) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  return (
    <React.Fragment>
      <div className="main__nav--container main__container">
        <div className="main__nav--logo">
          <div>
            <Link to="/">
              <img src={require("./../assets/img/convarg.png")} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="main__nav--nav">
          <div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/about">How it Works</Link>
            </div>
            <div>
              <Link to="/about">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="main__nav--auth">
          <div>
            <div className="main__nav--auth-login">
              <Link to="/login">Login</Link>
            </div>
            <div className="main__nav--auth-start">
              <Link to="/register">
                <div className="main__nav--auth-link">Get Started</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main__nav--container-mobile main__container">
        <div className="main__nav--mobile-logo">
          <Link to="/">
            <img src={require("./../assets/img/convarg.png")} alt="logo" />
          </Link>
        </div>
        <div className="main__nav--mobile-menu" onClick={showMobile}>
          <div style={{ width: "90%" }} />
          <div style={{ width: "70%" }} />
          <div style={{ width: "90%" }} />
        </div>
        {mobile ? (
          <div className="main__mobilemenu--fixed">
            <div>
              <div>
                <div className="auth__container--close">
                  <div onClick={showMobile}>
                    <img src={require("./../assets/img/cancel.png")} alt="x" />
                  </div>
                </div>
                <div className="main__mobilemenu--logo">
                  <div>
                    <img src={require("./../assets/img/logo.png")} alt="logo" />
                  </div>
                </div>
                <div className="main__mobilemenu--item">
                  <div>
                    <Link to="/about">About</Link>
                  </div>
                  <div>
                    <Link to="/about">How it Works</Link>
                  </div>
                  <div>
                    <Link to="/about">Contact Us</Link>
                  </div>
                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                  <div
                    style={{
                      background: "#D20B8C",
                      borderRadius: "5px 0px",
                      color: "#ffffff"
                    }}
                  >
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}
