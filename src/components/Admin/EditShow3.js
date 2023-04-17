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

class EditShow3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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

  render() {
    return (
      <div>
        <Dialog open={this.props.open} >
          <form className="dialog"  style={{width: '480px'}}>
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
                  id="starttime"
                  name="startTime"
                  type="text"
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
                  id="endtime"
                  name="endTime"
                  type="text"
                  className="form-control "
                  onChange={this.setParams}
                />
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <Button
                color="primary"
                onClick={() => {
                  localStorage.setItem(
                    "startTime",
                    document.getElementById('starttime').value
                  );
                  localStorage.setItem(
                    "endTime",
                    document.getElementById('endtime').value
                  );
                  this.props.handleClose();
                  //alert("onclick")
                }}
                className="modal-footer d-flex justify-content-center"
              >
                OK
              </Button>

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
export default EditShow3;
