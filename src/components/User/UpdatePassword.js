import React, { Component } from "react";

// Call API them san pham cua nha may
class UpdatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  callApiUpdatePassword = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/user/updatePassword", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
          alert("thanhcong");
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        this.state.password("");
        alert("Đổi mật khẩu thành công");
        
      })
      .catch((error) => {
        console.log("error", error);
       
      });
  };

  render() {
    return (
      
      <form style={{ marginLeft: '25%', marginRight: '25%', width: '50%', marginTop: '100px' }}>
        <div className="">
          <h1 className="modal-title w-100 font-weight-bold">
            Thay đổi mật khẩu
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
              Mật khẩu cũ
            </label>
            <input
              style={{ width:'100%' }}
              name="password"
              type="text"
              id="defaultForm-email"
              className="form-control validate"
              onChange={this.setParams}
            />
            <i className="prefix grey-text" />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-email"
            >
              Mật khẩu mới
            </label>
            <input
              style={{ width:'100%' }}
              name="password"
              type="text"
              id="defaultForm-email"
              className="form-control validate"
              onChange={this.setParams}
            />

        
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-center">
          <button
            className="btn btn-default"
            
            onClick={this.callApiUpdatePassword}
          >
            OK
          </button>
        </div>
      </form>
    );
  }
}

export default UpdatePassword;
