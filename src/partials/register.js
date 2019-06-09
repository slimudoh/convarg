import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function RegisterContent(props) {
  const [email, setEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const dateRef = React.createRef();

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
    setInputError(false);
    setDateError(false);

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

    if (
      !/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(
        dateRef.current.value.trim()
      )
    ) {
      setDateError(true);
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
    } else {
      setInputError(true);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">Firstname</div>
          </div>
          <div className="auth__container--input-div">
            <input type="text" name="firstname" />
          </div>
        </div>

        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">Lastname</div>
          </div>
          <div className="auth__container--input-div">
            <input type="text" name="lastname" />
          </div>
        </div>

        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">Email</div>
          </div>
          <div className="auth__container--input-div">
            <input type="text" name="email" onBlur={showEmail} ref={emailRef} />
            <div>
              {email ? (
                <img src={require("./../assets/img/checked.png")} alt="" />
              ) : null}
            </div>
          </div>
        </div>

        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">Password</div>
            <div className="auth__container--name-right" onClick={showPassword}>
              {password ? (
                <img src={require("./../assets/img/eye.png")} alt="view" />
              ) : (
                <img
                  src={require("./../assets/img/eye-close.png")}
                  alt="view"
                />
              )}
            </div>
          </div>
          <div className="auth__container--input-div">
            <input type="password" name="password" ref={passwordRef} />
          </div>
        </div>

        <div className="auth__container--inputs-container">
          <div style={{ paddingRight: "5px" }}>
            <div className="auth__container--input-container">
              <div className="auth__container--name">
                <div className="auth__container--name-left">Gender</div>
              </div>
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
          <div style={{ paddingLeft: "5px" }}>
            <div className="auth__container--input-container">
              <div className="auth__container--name">
                <div className="auth__container--name-left">Date of Birth</div>
              </div>
              <div className="auth__container--input-div">
                <input type="text" name="birth" ref={dateRef} />
                <div>
                  <img
                    src={require("./../assets/img/calendar.png")}
                    alt=""
                    style={{ width: "17px", height: "19px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">Occupation</div>
          </div>
          <div className="auth__container--input-div">
            <input type="text" name="occupation" />
          </div>
        </div>

        <div className="auth__container--input-container">
          <div className="auth__container--name">
            <div className="auth__container--name-left">LinkedIn Profile</div>
          </div>
          <div className="auth__container--input-div">
            <input type="text" name="linkedin" />
          </div>
        </div>
        <div className="auth__container--error">
          {emailError ? <span>Please enter a valid email address.</span> : null}
          {dateError ? (
            <span>Please enter a valid date with is format (mm/dd/yyyy).</span>
          ) : null}
          {passwordError ? (
            <span>Your password must be up to 8 characters.</span>
          ) : null}
          {inputError ? <span>All fields are required.</span> : null}
        </div>

        <button className="auth__container--blue-btn">Create My Account</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterContent);
