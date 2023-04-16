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


class AddNewShow4 extends Component {
  constructor(props) {
    super(props);
    
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  callApiCreateShow = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("hall", this.state.hall);
    urlencoded.append("movie", this.state.movie);
    urlencoded.append("startTime", this.state.startTime);
    urlencoded.append("endTime", this.state.endTime);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/show", requestOptions).then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    });
  };
  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <form className="dialog">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">THÊM SHOW</h4>
            </div>
            <div className="modal-body mx-3">
              <div className="">
                
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Thời gian bắt đầu
                </label>

                <input
                  value={localStorage.getItem("startTime")}
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
                  Thời gian kết thúc
                </label>

                <input
                  value={localStorage.getItem("endTime")}
                  name="releaseDate"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                onClick={this.callApiCreateShow}
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
export default AddNewShow4;
