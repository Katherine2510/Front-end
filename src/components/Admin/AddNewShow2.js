import React, { Component, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "../../css/table.css";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import AddNewShow3 from "./AddNewShow3";

//import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

class AddNewShow2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      _id: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/movie")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          rows: data,
        });
      });
  }
  handleOpenAddNew3 = () => {
    this.setState({
      openAddNew3: true,
    });
  };
  handleClose3 = () => {
    this.setState({
      openAddNew3: false,
    });
  };
  actionsBlock = (item) => {
    return (
      <button
        type="button"
        onClick={() => {
          this.handleOpenAddNew3(item);
          localStorage.setItem("Movie_id", item._id);
        }}
      >
        Chon
      </button>
    );
  };

  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  className="detail"
                  style={{ fontSize: "20px !important" }}
                >
                  <TableCell style={{ width: "5%" }}>STT</TableCell>
                  <TableCell>Tên Phim</TableCell>
                  <TableCell style={{ width: "5%" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="detail">
                {this.state.rows.allMovie?.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{this.actionsBlock(row)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            color="primary"
            onClick={this.props.handleClose2}
            className="modal-footer d-flex justify-content-center"
          >
            Cancel
          </Button>
        </Dialog>
        {this.state.openAddNew3 ? (
          <AddNewShow2
            rows={this.state.rows}
            open={this.state.openAddNew3}
            handleClose2={this.handleClose2}
          />
        ) : null}
      </div>
    );
  }
}
export default AddNewShow2;
