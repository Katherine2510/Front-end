import React, { useState } from "react";
import "../../css/style-login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../css/table.css";
import { Link, useParams } from "react-router-dom";

const roleType = {
  admin: "admin11@gmail.com",
  //thêm các role vào đây,
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       username: "",
  //       password: "",
  //     };
  //   }

  // setParams = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  const navigate = useNavigate();
  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

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
        toast.success(true);
        setPassword("");
        setEmail("");
      
        switch (result?.user?.email) {
          case roleType.admin:
            navigate("/admin");
            console.log(result);
            localStorage.setItem("email", result.user.email)
            break;
          //case //viết nốt vào đây là đc nè
          default:
            navigate("/phimdangchieu");
            break;
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Email hoặc mật khẩu sai!");
      });
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <div className="user-box">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              onChange={(event: any) => setEmail(event.target.value)}
            />
          </div>
          <div className="user-box">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(event: any) => setPassword(event.target.value)}
            />
          </div>

          <button type="button" name="email" onClick={login}>
            Login
          </button>
          <p class="message">
            Bạn chưa có tài khoản? <a href="/register">Tạo tài khoản mới</a>
          </p>
        </form>
      </div>
</div>
  );
};

export default Login;