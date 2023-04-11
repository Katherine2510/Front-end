import React from "react";
import "../../css/style-login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", this.state.email);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/auth/login", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.success);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("success", result.success);
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", result.user._id);
        if (result.success == true) {
          alert("Thanh cong");
        } else {
          alert("email, password are wrong");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("email, password are wrong");
      });
  };

  render() {
    return (
    
        <div>
          <h1>Sign in</h1>
       {/*} <div className = 'span-login'>
        <div class="social-container">
            <a href="#" class="social">
              <i className="fa fa-facebook" ></i>
            </a>
            <a href="#" class="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>or use your account</div> 
        </div>*/}
          
          
          <div className="user-box">
            <label>Email:</label>
            <input type="text" name="email" onChange={this.setParams} />
          </div>
          <div className="user-box">
            <label>Password:</label>
            <input type="password" name="password" onChange={this.setParams} />
          </div>

          <br></br>
          <br></br>
          <br></br>
          <div>
            <button type="button" name="email" onClick={this.login}>
              Login
            </button>
          </div>
          <div className="span-login"> Bạn chưa có tài khoản? </div>
          <div>
            <button type="button" name="email">
              Register
            </button>
          </div>
        </div>
        
      
    );
  }
}
