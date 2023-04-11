import React, { Component } from "react";

// Call API them san pham cua nha may
class AddNewShow3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      hall: "",
      startTime: "",
      endTime: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  callApiAdd = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("movie", this.state.movie);
    urlencoded.append("hall", this.state.hall);

    urlencoded.append("movie", this.state.startTime);
    urlencoded.append("hall", this.state.endTime);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/show", requestOptions)
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
        this.state.movie("");
        this.state.hall("");
        this.state.startTime("");
        this.state.endTime("");
        alert("thanh cong");
      })
      .catch((error) => {
        console.log("error", error);
        alert("wrong");
      });
  };
  handleOpenAddNew3 = () => {
    this.setState({
      openAddNew3: true,
    });
  };
  handleClose3 = () => {
    this.setState({
      openAddNew3: false,
    });
    {
      localStorage.removeItem("Movie_id");
    }
  };

  render() {
    return (
      <form>
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">CHỌN GIỜ CHIẾU</h4>
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
              Giờ bắt đầu chiếu
            </label>
            <input
              name="startTime"
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
              Giờ kết thúc
            </label>

            <input
              name="endTime"
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
            onClick={this.callApiAdd}
          >
            OK
          </button>
        </div>
      </form>
    );
  }
}

export default AddNewShow3;
