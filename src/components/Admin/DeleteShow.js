import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

class DeleteShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
        _id: ""
    };
  }
  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChange = event => {
    this.setState({ id: event.target.value });
  }
  handleOnClick = () => {
    alert('clicked')
  }
  render() {
    return (
      <div>
        <Dialog open={this.props.open}>
          <DialogTitle>
            Xác nhận xoá:
            {" " +
              this.props.selectedItem.movie?.title +
              " - " +
              this.props.selectedItem._id}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Chắc chắn xóa ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Không đồng ý
            </Button>
            <Button onClick={this.props.handleSubmit} color="primary">
              Đồng ý
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default DeleteShow;
