import React, { useState, useEffect } from "react";

import SidebarProfile from "./../partials/sidebar_profile";

export default function Meeting(props) {
  const [email, setEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const emailRef = React.createRef();

  const showEmail = event => {
    event.preventDefault();
    if (!/\S+@\S+\.\S+/.test(emailRef.current.value.trim())) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setEmail(true);
  };

  const submitForm = event => {
    event.preventDefault();

    setEmailError(false);

    if (!/\S+@\S+\.\S+/.test(emailRef.current.value.trim())) {
      setEmailError(true);
      return;
    }

    const formElements = event.target.elements;
    const formValues = [];

    Object.keys(formElements).forEach(key => {
      if (
        formElements[key].type === "text" ||
        formElements[key].type === "select-one" ||
        formElements[key].type === "password"
      ) {
        formValues.push({
          name: formElements[key].name,
          value: formElements[key].value
        });
      }
    });

    var checkInput = true;

    for (let i of formValues) {
      if (i.value.trim() === "") {
        checkInput = false;
      }
    }

    if (checkInput) {
      props.history.push("/");
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);
  return (
    <div className="meet__section">
      <div className="meet__section--container">
        <div className="meet__section--logo">
          <div>
            <img src={require("./../assets/img/logo.png")} alt="logo" />
          </div>
        </div>
        <div className="meet__section--header">
          <span>
            Let's plan your <br />
            convarg
          </span>
          <p>01 of 02</p>
        </div>
        <form onSubmit={submitForm}>
          <div className="meet__section--lenght">
            <p>Requested Meeting Length</p>
            <div>
              <div className="meet__section--lenght-input">
                <div className="auth__container--input-div">
                  <select name="gender">
                    <option value="none">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div>
                    <img
                      src={require("./../assets/img/arrow.png")}
                      alt=""
                      style={{ width: "15px", height: "10px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="meet__section--lenght-text">
                <span>30 Mins</span>
                <br />
                <p>N30,000</p>
              </div>
            </div>
          </div>
          <div className="meet__section--message">
            <p>Write a Message</p>
            <textarea />
          </div>
          <div className="meet__section--email">
            <p>Email</p>
            <div>
              <div className="auth__container--input-div">
                <input
                  type="text"
                  name="email"
                  onBlur={showEmail}
                  ref={emailRef}
                />
                <div>
                  {email ? (
                    <img src={require("./../assets/img/checked.png")} alt="" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="meet__section--meeting">
            <span>Propose Meeting Times</span>
            <p>Suggest 3 convenient meeting times for Muyiwa to pick from.</p>
            <div>
              <div className="meet__section--meeting-left">
                <span>Choose a date</span>
                <div className="auth__container--input-div">
                  <input type="text" name="birth" />
                  <div>
                    <img
                      src={require("./../assets/img/calendar.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="meet__section--meeting-right">
                <span>Choose a time</span>
                <div className="auth__container--input-div">
                  <select name="gender">
                    <option value="none">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div>
                    <img
                      src={require("./../assets/img/arrow.png")}
                      alt=""
                      style={{ width: "15px", height: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="meet__section--meeting-left">
                <span>Choose a date</span>
                <div className="auth__container--input-div">
                  <input type="text" name="birth" />
                  <div>
                    <img
                      src={require("./../assets/img/calendar.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="meet__section--meeting-right">
                <span>Choose a time</span>
                <div className="auth__container--input-div">
                  <select name="gender">
                    <option value="none">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div>
                    <img
                      src={require("./../assets/img/arrow.png")}
                      alt=""
                      style={{ width: "15px", height: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="meet__section--meeting-left">
                <span>Choose a date</span>
                <div className="auth__container--input-div">
                  <input type="text" name="birth" />
                  <div>
                    <img
                      src={require("./../assets/img/calendar.png")}
                      alt=""
                      style={{ width: "17px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="meet__section--meeting-right">
                <span>Choose a time</span>
                <div className="auth__container--input-div">
                  <select name="gender">
                    <option value="none">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div>
                    <img
                      src={require("./../assets/img/arrow.png")}
                      alt=""
                      style={{ width: "15px", height: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="auth__container--error">
              {emailError ? <span>Please enter an email address.</span> : null}
            </div>
            <button className="auth__container--blue-btn">
              Book Meeting Now
            </button>
            <p className="meet__section--terms">
              By booking a meeting you agree to our Terms and Service
            </p>
          </div>
        </form>
      </div>
      <div className="meet__section--profile">
        <SidebarProfile />
      </div>
    </div>
  );
}
