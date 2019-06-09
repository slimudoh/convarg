import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchNav() {
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
        <div className="main__search--container-logo">
          <div>
            <Link to="/">
              <img src={require("./../assets/img/logo.png")} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="main__search--container-search">
          <input type="text" placeholder="Search experts" />
          <div>
            <img src={require("./../assets/img/search.png")} alt="" />
          </div>
        </div>
        <div className="main__search--container-menu">
          <div>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/appointments">Appointments</Link>
            </div>
          </div>
        </div>
        <div className="main__search--container-profile">
          <div className="main__search--profile-left">AD</div>
          <div className="main__search--profile-right">Ayomide Onasanya</div>
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
          <div style={{ width: "40%" }} />
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
                <div className="main__mobilemenu--profile">
                  <div className="main__mobilemenu--profile-left">
                    <div>AD</div>
                  </div>
                  <div className="main__mobilemenu--profile-right">
                    Ayomide Onasanya
                  </div>
                </div>
                <div className="main__mobilemenu--search">
                  <div>
                    <input type="text" placeholder="Search experts" />
                    <div>
                      <img src={require("./../assets/img/search.png")} alt="" />
                    </div>
                  </div>
                </div>
                <div className="main__mobilemenu--item">
                  <div>
                    <Link to="/">Home</Link>
                  </div>
                  <div>
                    <Link to="/appointments">Apointments</Link>
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
