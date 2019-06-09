import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterContent from "./../partials/register";

export default function Register(props) {
  const [level, setLevel] = useState(true);

  const selectLevel = () => {
    if (level) {
      setLevel(false);
    } else {
      setLevel(true);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);

  return (
    <div className="auth__container">
      <div className="auth__container--background">
        <div className="auth__container--auth-box">
          <div>
            <div className="auth__container--close">
              <div>
                <Link to="/">
                  <img src={require("./../assets/img/cancel.png")} alt="x" />
                </Link>
              </div>
            </div>
            <div className="auth__container--logo">
              <div>
                <img src={require("./../assets/img/logo.png")} alt="logo" />
              </div>
            </div>
            <div className="auth__container--text"> Create a new account</div>
            <div className="auth__container--select"> I am an</div>
            <div className="auth__container--sections">
              <div>
                <div
                  onClick={selectLevel}
                  style={
                    level
                      ? { color: "#1365c6", borderBottom: "5px solid #1365c6" }
                      : { color: "#b3b6b8", borderBottom: "5px solid #b3b6b8" }
                  }
                >
                  Individual
                </div>
              </div>
              <div>
                <div
                  onClick={selectLevel}
                  style={
                    !level
                      ? { color: "#1365c6", borderBottom: "5px solid #1365c6" }
                      : { color: "#b3b6b8", borderBottom: "5px solid #b3b6b8" }
                  }
                >
                  Expert
                </div>
              </div>
            </div>
            {/* {level ? <RegisterContent /> : <RegisterContent />} */}
            <RegisterContent />
            <div className="auth__container--forgot-password">
              <span>Already have an account? </span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
