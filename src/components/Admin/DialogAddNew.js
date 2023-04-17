import React, { Component, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "../../css/table.css";

//import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

class DialogAddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      durationInMins: "",
      releaseDate: "",
      director: "",
      actor: "",
      url_image: "",
      url_trailer: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  callApiCreateAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("title", this.state.title);
    urlencoded.append("description", this.state.description);
    urlencoded.append("durationInMins", this.state.durationInMins);
    urlencoded.append("releaseDate", this.state.releaseDate);
    urlencoded.append("director", this.state.director);
    urlencoded.append("actor", this.state.actor);
    urlencoded.append("url_image", this.state.url_image);
    urlencoded.append("url_trailer", this.state.url_trailer);

    const Example = () => {
      const [startDate, setStartDate] = useState(new Date());
      return {};
    };
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/movie", requestOptions).then(
      (response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      }
    );
  };
  render() {
    return (
      <div  >
        <Dialog open={this.props.open} >
          <form className="dialog" style={{ width:'700px' }}>
            <div className="modal-header text-center">
              <h1 style={{ fontSize: '30px' }}>THÊM PHIM</h1>
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
                  Tên phim
                </label>
                <input
                  name="title"
                  type="text"
                  id="defaultForm-email"
                  className="form-control "
                  onChange={this.setParams}
                />

                <i className=" prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Mô tả
                </label>

                <input
                  name="description"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />

                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Thời lượng
                </label>

                <input
                  name="durationInMins"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Ngày công chiếu
                </label>

                <input
                  name="releaseDate"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />

                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Đạo diễn
                </label>
                <input
                  name="director"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
              <i className="prefix grey-text" />
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="defaultForm-pass"
              >
                Diễn viên
              </label>
              <input
                name="actor"
                type="text"
                id="defaultForm-pass"
                className="form-control "
                onChange={this.setParams}
              />
              <i className="prefix grey-text" />
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="defaultForm-email"
              >
                Ảnh
              </label>
              <input
                name="url_image"
                type="text"
                id="defaultForm-email"
                className="form-control "
                onChange={this.setParams}
              />
              <i className="prefix grey-text" />
              <label
                data-error="wrong"
                data-success="right"
                htmlFor="defaultForm-email"
              >
                Link Trailer
              </label>
              <input
                name="url_trailer"
                type="text"
                id="defaultForm-email"
                className="form-control "
                onChange={this.setParams}
              />
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                onClick={this.callApiCreateAccount}
              >
                ADD
              </button>

              <Button
                color="primary"
                onClick={this.props.handleClose}
                className="modal-footer d-flex justify-content-center"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}
export default DialogAddNew;