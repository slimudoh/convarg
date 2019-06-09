import React, { useState, useEffect } from "react";

import SidebarProfile from "./../partials/sidebar_profile";

export default function Payment(props) {
  const [payment, setPayment] = useState(false);

  const paymentRef = React.createRef();

  const showPayment = event => {
    if (isNaN(event.target.value)) {
      event.target.value = event.target.value.slice(
        0,
        event.target.value.length - 1
      );
      return;
    }

    if (event.target.value.length > 20) {
      event.target.value = event.target.value.slice(
        0,
        event.target.value.length - 1
      );
      return;
    }

    if (event.target.value.length > 3) {
      setPayment(true);
    } else {
      setPayment(false);
    }
  };

  const submitForm = event => {
    event.preventDefault();

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
        <div className="meet__section--back-arrow">
          <div className="meet__section--back-arrow-left">
            <img
              src={require("./../assets/img/back.png")}
              alt=""
              style={{ width: "20px" }}
            />
          </div>
          <div className="meet__section--back-arrow-right">Back to booking</div>
        </div>
        <form onSubmit={submitForm}>
          <div className="meet__section--header">
            <span>
              Finalize your <br />
              convarg
            </span>
            <p>02 of 02</p>
          </div>
          <div className="meet__section--lenght">
            <p>Payment Method</p>
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
            </div>
          </div>

          <div className="meet__section--email">
            <p>Card Number</p>
            <div>
              <div className="auth__container--input-div">
                <input
                  type="text"
                  name="payment"
                  onChange={showPayment}
                  ref={paymentRef}
                />
                <div style={{ paddingTop: "10px" }}>
                  {payment ? (
                    <img
                      style={{ width: "48px" }}
                      src={require("./../assets/img/card.png")}
                      alt=""
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="meet__section--meeting">
            <div>
              <div className="meet__section--meeting-left">
                <span>Expiry Date</span>
                <div
                  className="auth__container--input-div"
                  style={{ marginTop: "15px" }}
                >
                  <input type="text" />
                </div>
              </div>
              <div className="meet__section--meeting-right">
                <span>CVV</span>
                <div
                  className="auth__container--input-div"
                  style={{ marginTop: "15px" }}
                >
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="meet__section--summary">
              <div className="meet__section--summary-left">Breakdown</div>
              <div className="meet__section--summary-middle">
                <span>Call Duration</span>
                <p>30 Minutes</p>
              </div>
              <div className="meet__section--summary-right">
                <span>Cost</span>
                <p>N30,000</p>
              </div>
            </div>

            <button className="auth__container--blue-btn">
              PAY N30,000 Now
            </button>

            <div
              className="cards__image"
              style={{ width: "196px", margin: "10px auto" }}
            >
              <img src={require("./../assets/img/cards.png")} alt="" />
            </div>
          </div>
        </form>
      </div>
      <div className="meet__section--profile">
        <SidebarProfile />
      </div>
    </div>
  );
}
