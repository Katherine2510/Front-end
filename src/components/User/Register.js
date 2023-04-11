import React, { Component } from "react";
import "../../css/style-login.css";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  
  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  register = () => {
    console.log("hello");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");


    var urlencoded = new URLSearchParams();
    urlencoded.append("firstName", this.state.firstName);
    urlencoded.append("lastName", this.state.lastName);
    urlencoded.append("email", this.state.email);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
        "http://localhost:3001/api/auth/register",
        requestOptions
    )
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
                alert("thanh cong");
            }
            throw Error(response.status);
            alert ("error")
        });
    console.log(this.state.firstName);
  };
  render() {
    return (
      <form>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                name = "firstName"
                placeholder="First Name"
                onChange={this.setParams}
              />
            </div>
            <div className="lastname">
              <label className="form__label" for="lastName">
                Last Name{" "}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form__input"
                placeholder="LastName"
                onChange={this.setParams}
              />
            </div>
            <div className="email">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                name = "email"
                className="form__input"
                placeholder="Email"
                onChange={this.setParams}
              />
            </div>
            <div className="password">
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.setParams}
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" for="confirmPassword">
                Confirm Password{" "}
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.setParams}
              />
            </div>
          </div>
          <div class="footer">
            <button type="submit" class="btn" onClick={this.register}>
              Register
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Register;