import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

// Call API them san pham cua nha may
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  yourFunctionHere() {
    this.props.navigate("/profile");
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  callApiUpdateAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("firstName", this.state.firstName);
    urlencoded.append("lastName", this.state.lastName);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/user", requestOptions)
      .then((response) => {
        console.log(response);
        
        if (response.ok) {
          return response.json();
          
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        
        this.props.navigate("/profile")
        this.state.lastName("");
        this.state.firstName("");
        alert("Đổi thông tin thành công");
        
      })
      .catch((error) => {
        console.log("error", error);
       
      });
      
  };

  render() {
    return (
      
      <form style={{ marginLeft: '25%', marginRight: '25%', width: '50%', marginTop: '100px' }}>
        <div className="modal-header text-center">
          <h1 className="modal-title w-100 font-weight-bold">
            CẬP NHẬT THÔNG TIN TÀI KHOẢN
          </h1>
        
        </div>
        <div className="modal-body mx-3">
          <div className="">
            <i className="prefix grey-text" />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-email"
            >
              Họ 
            </label>
            <input style={{ width:'100%' }}
              name="firstName"
              type="text"
              id="defaultForm-email"
              className="form-control validate"
              onChange={this.setParams}
            />

            <i className=" prefix grey-text" />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-pass"
            >
              Tên
            </label>

            <input style={{ width:'100%' }}
              name="lastName"
              type="text"
              id="defaultForm-pass"
              className="form-control validate"
              onChange={this.setParams}
            />
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button
            className="btn btn-default"
            onClick={(this.callApiUpdateAccount)}
          >
            OK
          </button>
        </div>
      </form>
    );
  }
}

export default UpdateUser;
