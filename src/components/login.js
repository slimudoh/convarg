import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const showEmail = event => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(emailRef.current.value.trim())) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setEmail(true);
  };

  const showPassword = event => {
    event.preventDefault();
    if (password) {
      setPassword(false);
      passwordRef.current.type = "password";
    } else {
      setPassword(true);
      passwordRef.current.type = "type";
    }
  };

  const submitForm = event => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value.trim())) {
      setEmailError(true);
      return;
    }

    if (
      passwordRef.current.value.trim() === "" ||
      passwordRef.current.value.length < 8
    ) {
      setPasswordError(true);
      return;
    }

    const loginValues = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    console.log(loginValues);
    props.history.push("/");
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
            <div className="auth__container--text">Sign In</div>
            <form onSubmit={submitForm}>
              <div className="auth__container--input-container">
                <div className="auth__container--name">
                  <div className="auth__container--name-left">Email</div>
                </div>
                <div className="auth__container--input-div">
                  <input type="text" onBlur={showEmail} ref={emailRef} />
                  <div>
                    {email ? (
                      <img
                        src={require("./../assets/img/checked.png")}
                        alt=""
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="auth__container--input-container">
                <div className="auth__container--name">
                  <div className="auth__container--name-left">Password</div>
                  <div
                    className="auth__container--name-right"
                    onClick={showPassword}
                  >
                    {password ? (
                      <img
                        src={require("./../assets/img/eye.png")}
                        alt="view"
                      />
                    ) : (
                      <img
                        src={require("./../assets/img/eye-close.png")}
                        alt="view"
                      />
                    )}
                  </div>
                </div>
                <div className="auth__container--input-div">
                  <input type="password" ref={passwordRef} />
                </div>
              </div>
              <div className="auth__container--error">
                {emailError ? (
                  <span>Please enter an email address.</span>
                ) : null}
                {passwordError ? (
                  <span>Your password must be up to 8 characters.</span>
                ) : null}
              </div>
              <button className="auth__container--blue-btn">Continue</button>
              <div className="auth__container--white-btn">
                <Link to="/register">
                  <div className="auth__container--white-btn-inner">
                    Register
                  </div>
                </Link>
              </div>
            </form>
            <div className="auth__container--forgot-password">
              <Link to="/">Forgot your password</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
