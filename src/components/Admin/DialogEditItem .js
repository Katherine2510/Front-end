import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

//import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

class DialogEditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",

      description: "",
      durationInMins: "",
      releaseDate: "",
      director: "",
      actor: "",
      image_url: "",
      trailer_url: "",
    };
  }
  callApiEditAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", this.state._id);
    urlencoded.append("description", this.state.description);
    urlencoded.append("durationInMins", this.state.durationInMins);
    urlencoded.append("releaseDate", this.state.releaseDate);
    urlencoded.append("director", this.state.director);
    urlencoded.append("actor", this.state.actor);
    urlencoded.append("image_url", this.state.image_url);
    urlencoded.append("trailer_url", this.state.trailer_url);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      `http://localhost:3001/api/movie/${this.props.selectedItem._id}`,
      requestOptions
    )
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
        this.state.description("");
        this.state.durationInMins("");
        this.state.director("");
        this.state.actor("");
        this.state.image_url("");
        this.state.trailer_url("");
        alert("thanh cong");
      })
      .catch((error) => {
        console.log("error", error);
        alert("wrong");
      });
  };

  openModal = (item) => {
    this.setState({
      modalIsOpen: true,
      description: item.description,
    });
  };

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <form>
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">EDIT</h4>
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
                  Tóm tắt
                </label>
                <input
                  value={this.state.description}
                  name="description"
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
                  Thời lượng
                </label>
                <input
                  name="durationInMins"
                  type="text"
                  id="defaultForm-email"
                  value={this.props.selectedItem.durationInMins}
                  className="form-control validate"
                  onChange={this.setParams}
                />
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Đạo diễn
                </label>
                <input
                  name="director"
                  type="text"
                  id="defaultForm-email"
                  value={this.props.selectedItem.director}
                  className="form-control validate"
                  onChange={this.setParams}
                />
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Diễn Viên
                </label>
                <input
                  name="actor"
                  type="text"
                  id="defaultForm-email"
                  value={this.props.selectedItem.actor}
                  className="form-control validate"
                  onChange={this.setParams}
                />
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Link ảnh
                </label>
                <input
                  name="image_url"
                  type="text"
                  id="defaultForm-email"
                  value={this.props.selectedItem.image_url}
                  className="form-control validate"
                  onChange={this.setParams}
                />
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Trailer
                </label>
                <input
                  name="trailer_url"
                  type="text"
                  id="defaultForm-email"
                  value={this.props.selectedItem.trailer_url}
                  className="form-control validate"
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                onClick={this.callApiEditAccount}
              >
                OK
              </button>
              <button
                className="btn btn-default"
                onClick={this.props.handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}
export default DialogEditItem;
