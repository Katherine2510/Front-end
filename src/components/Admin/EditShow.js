import React, { Component, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "../../css/table.css";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";

import EditShow1 from "./EditShow1";
import EditShow2 from "./EditShow2";
import EditShow3 from "./EditShow3";

//import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

class EditShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEdit1: false,
      openEdit2: false,
      openEdit3: false,
      hall: "",
      movie: "",
      startTime: "",
      endTime: "",
      _id: "",
      rows: [],
    };
  }
  refresh = () => {
    window.location.reload();
  };
  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  callApiEditShow = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("hall", localStorage.getItem("Hall_id"));
    urlencoded.append("movie", localStorage.getItem("Movie_id"));
    urlencoded.append("startTime", localStorage.getItem("startTime"));
    urlencoded.append("endTime", localStorage.getItem("endTime"));

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      `http://localhost:3001/api/show/${this.props.selectedItem._id}`,
      requestOptions
    ).then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      
      }
      throw Error(response.status);
    
    });


  };
  handleOpenEdit1 = () => {
    this.setState({
      openEdit1: true,
    });
  };
  handleOpenEdit2 = () => {
    this.setState({
      openEdit2: true,
    });
  };
  handleOpenEdit3 = () => {
    this.setState({
      openEdit3: true,
    });
  };

  handleClose = () => {
    this.setState({
      openEdit1: false,
      openEdit2: false,
      openEdit3: false,
    });
  };

  handleClickOpen = (item) => {
    this.setState({
      openEditItem: true,
      selectedItem: item,
    });
  };
  actionsBlock1 = (item) => {
    return (
      <button
      className="btn btn-default"
        type="button"
        onClick={() => {
          this.handleOpenEdit1(item);
        }}
      >
        Chọn
      </button>
    );
  };
  actionsBlock2 = (item) => {
    return (
      <button
      className="btn btn-default"
        type="button"
        onClick={() => {
          this.handleOpenEdit2(item);
        }}
      >
        Chọn
      </button>
    );
  };
  actionsBlock3 = (item) => {
    return (
      <button
      className="btn btn-default"
        type="button"
        onClick={() => {
          this.handleOpenEdit3(item);
        }}
      >
        Chọn
      </button>
    );
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <form className="dialog" style={{ width: "480px" }}>
            <div className="modal-body mx-3">
              <p style={{ fontSize: "30px" }}>Show</p>
              <div className="">
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  ID
                </label>

                <input
                  style={{ width: "100%" }}
                  value={this.props.selectedItem._id}
                  name="_id"
                  type="text"
                  id="defaultForm-email"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-body mx-3">
              <div className="">
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Phòng
                  {this.actionsBlock1(this.props.selectedItem)}
                </label>

                <input
                  style={{ width: "100%" }}
                  value={localStorage.getItem("Hall_id_name")}
                  name="hall"
                  type="text"
                  id="defaultForm-email"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-body mx-3">
              <div className="">
                <i className="prefix grey-text" />
                <i className=" prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Phim
                  {this.actionsBlock2(this.props.selectedItem)}
                </label>

                <input
                  style={{ width: "100%" }}
                  value={localStorage.getItem("Movie_id_name")}
                  name="movie"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-body mx-3">
              <div className="">
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Thời gian bắt đầu
                  {this.actionsBlock3(this.props.selectedItem)}
                </label>
                <input
                  style={{ width: "100%" }}
                  id="start"
                  name="startTime"
                  type="text"
                  value={localStorage.getItem("startTime")}
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-body mx-3">
              <div className="">
                <i className=" prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Thời gian kết thúc
                </label>

                <input
                  style={{ width: "100%" }}
                  id="end"
                  name="endTime"
                  type="text"
                  className="form-control "
                  value={localStorage.getItem("endTime")}
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-default"
                onClick={this.callApiEditShow}
              >
                EDIT
              </button>
              <button className="btn btn-default" onClick={this.props.handleClose}>CANCEL</button>
            </div>
          </form>
        </Dialog>
        {this.state.openEdit1 ? (
          <EditShow1
            rows={this.state.rows}
            open={this.state.openEdit1}
            handleClose={this.handleClose}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        {this.state.openEdit2 ? (
          <EditShow2
            rows={this.state.rows}
            open={this.state.openEdit2}
            handleClose={this.handleClose}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        {this.state.openEdit3 ? (
          <EditShow3
            rows={this.state.rows}
            open={this.state.openEdit3}
            handleClose={this.handleClose}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}
export default EditShow;
