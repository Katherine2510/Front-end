import React, { Component } from "react";

// Call API them san pham cua nha may
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
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
          alert("thanhcong");
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        this.state.firstName("");
        this.state.lastName("");
        alert("thanh cong");
        
      })
      .catch((error) => {
        console.log("error", error);
        alert("wrong");
      });
  };

  render() {
    return (
      <form>
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">
            CẬP NHẬT THÔNG TIN TÀI KHOẢN
          </h4>
          <button
            type="button"
            className="submit-btn"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">Exit</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          <div className="">
            <i className="prefix grey-text" />
            <label
              data-error="wrong"
              data-success="right"
              htmlFor="defaultForm-email"
            >
              First Name
            </label>
            <input
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
              Last Name
            </label>

            <input
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
            onClick={this.callApiUpdateAccount}
          >
            OK
          </button>
        </div>
      </form>
    );
  }
}

export default UpdateUser;
