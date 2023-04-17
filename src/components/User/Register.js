import React, { Component } from "react";
import "../../css/style-login.css";
import "../../css/table.css";
import "../../css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

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

  matchPassword = ()=> {
    var pw1 = document.getElementById("password");
    var pw2 = document.getElementById("confirmPassword");
    if (pw1 != pw2) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
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
    

    fetch("http://localhost:3001/api/auth/register", requestOptions).then(
      (response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
          alert("thanh cong");
          
        }
        throw Error(response.status);
        
      }
    );
    console.log(this.state.firstName);
    alert("Email đã tồn tại");
  };
  render() {
    return (
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <div className="user-box">
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <input
                className="form__input"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.setParams}
              />
            </div>
            <div className="user-box">
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
            <div className="user-box">
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                placeholder="Email"
onChange={this.setParams}
              />
            </div>
            <div className="user-box">
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
            <div className="user-box">
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

            <button
              type="button"
              name="email"
              onClick={this.register}
              href="/register"
            >
              REGISTER
            </button>
            <p class="message">
              Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;