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
import AddNewShow4 from "./AddNewShow4";
//import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";


class AddNewShow3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddNew4: false,
      hall: localStorage.getItem("Hall_id"),
      movie: localStorage.getItem("Movie_id"),
      startTime: "",
      endTime: "",
    };
  }
  refresh = () => {
    window.location.reload();
  };
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

    //this.refresh();
  };
  handleOpenAddNew4 = () => {
    this.setState({
      openAddNew4: true,
    });
  };
  handleClose = () => {
    this.setState({
      openAddNew4: false,
    });
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <form className="dialog" style={{ width: '480px'}}> 
            <div className="modal-body mx-3">
              <div className="">
                <i className="prefix grey-text" />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Phòng
                </label>

                <input
                  style={{ width: '100%' }}
                  value={localStorage.getItem("Hall_id")}
                  name="hall"
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
                  Phim
                </label>

                <input
                style={{ width: '100%' }}
                  value={localStorage.getItem("Movie_id")}
                  name="movie"
                  type="text"
                  id="defaultForm-pass"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Thời gian chiếu
              </h4>
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
                </label>
                <input
                style={{ width: '100%' }}
                  id="start"
                  name="startTime"
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
                  Thời gian kết thúc
                </label>

                <input
                style={{ width: '100%' }}
                  id="end"
                  name="endTime"
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
        {this.state.openAddNew4 ? (
          <AddNewShow4
            rows={this.state.rows}
            open={this.state.openAddNew4}
            handleClose={this.handleClose}
          />
        ) : null}
      </div>
    );
  }
}
export default AddNewShow3;
