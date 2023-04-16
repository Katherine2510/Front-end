import { Component } from "react";
import "../../css/table.css";

import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

//import DeleteIcon from "@mui/icons-material/Delete";
//import EditIcon from "@mui/icons-material/Edit";
import DialogAddNew from "./DialogAddNew";
import DialogAlertRemove from "./DialogAlertRemove";
import DialogEditItem from "./DialogEditItem ";
import axios from "axios";

class NowShowing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      openEditItem: false,
      openAlertRemove: false,
      openAddNew: false,
      selectedItem: null,
    };
  }
  refresh = () => {
    window.location.reload();
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

  handleOpenAddNew = () => {
    this.setState({
      openAddNew: true,
    });
  };

  handleClickOpen = (item) => {
    this.setState({
      openEditItem: true,
      selectedItem: item,
    });
  };
  checkName = (name) => {
    if (this.state.rows.movie?.find((item) => item.name === name)) {
      return true;
    } else if (name === "") {
      return 1;
    } else return false;
  };
  handleDeleteItem = (item) => {
    this.setState({
      openAlertRemove: true,
      selectedItem: item,
    });
  };

  handleClose = () => {
    this.setState({
      openEditItem: false,
      openAlertRemove: false,
      openAddNew: false,
      selectedItem: null,
    });
  };

  handleChange = (event, target) => {
    this.setState({
      selectedItem: {
        ...this.state.selectedItem,
        [target]: event.target.value,
      },
    });
  };

  handleChangeDate = (newValue) => {
    this.setState({
      selectedItem: {
        ...this.state.selectedItem,
        date: newValue,
      },
    });
  };

  callApiDeleteAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("_id", this.state.selectedItem._id);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      `http://localhost:3001/api/movie/${this.state.selectedItem._id}`,
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
        this.state.firstName("");
        this.state.lastName("");
        alert("thanh cong");
      })
      .catch((error) => {
        console.log("error", error);
        alert("wrong");
      });
  };

  loadfilm = async () => {
    const result = await axios.get(
      `http://localhost:3001/api/movie/${this.state.selectedItem._id}`
    );
    this.state.rows(result.data);
  };

  //Xác nhận tương ứng với các hoạt động openEditItem và openAlertRemove
  handleSubmit = (newOne) => {
    let rows = this.state.rows;
    // Edit
    if (this.state.openEditItem) {
      this.callApiEditAccount();
      {
        this.refresh();
      }
    }
    // Delete
    if (this.state.openAlertRemove) {
      this.callApiDeleteAccount();
      {
        this.refresh();
      }
    }
    console.log(newOne);
    // Add new
    if (this.state.openAddNew) {
      rows.push(newOne);
    }
    //Cập nhật rows
    this.setState({
      rows: rows,
    });

    this.handleClose();
  };

  actionsBlock = (item) => {
    return (
      <div className="actionsBlock">
        <Button onClick={() => this.handleClickOpen(item)}>Edit</Button>
        <Button onClick={() => this.handleDeleteItem(item)}>Delete</Button>
      </div>
    );
  };

  render() {
    return (
      <div col-md-9 col-sm-8 col-xs-12>
        <div id="product-table">
          <ButtonGroup>
            <Button color="primary" onClick={() => this.handleOpenAddNew()}>
              Thêm phim mới
            </Button>
          </ButtonGroup>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  className="detail"
                  style={{ fontSize: "20px !important" }}
                >
                  <TableCell style={{ width: "3%" }}>STT</TableCell>
                  <TableCell style={{ width: "15%" }}>Tên phim</TableCell>
                  <TableCell style={{ width: "40%" }}>Tóm tắt</TableCell>
                  <TableCell>Thời lượng</TableCell>
                  <TableCell>Đạo diễn</TableCell>
                  <TableCell>Diễn viên</TableCell>
                  <TableCell style={{ width: "5%" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="detail">
                {this.state.rows.allMovie?.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.durationInMins}</TableCell>
                    <TableCell>{row.director}</TableCell>
                    <TableCell>{row.actor}</TableCell>
                    <TableCell>{this.actionsBlock(row)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {this.state.openEditItem ? (
            <DialogEditItem
              open={this.state.openEditItem}
              selectedItem={this.state.selectedItem}
              checkName={this.checkName}
              handleClose={this.handleClose}
              handleChange={this.handleChange}
              //handleChangeDate={this.handleChangeDate}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          {this.state.openAlertRemove ? (
            <DialogAlertRemove
              open={this.state.openAlertRemove}
              selectedItem={this.state.selectedItem}
              handleClose={this.handleClose}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          {this.state.openAddNew ? (
            <DialogAddNew
              rows={this.state.rows}
              open={this.state.openAddNew}
              handleClose={this.handleClose}
              handleChange={this.handleChange}
              handleChangeDate={this.handleChangeDate}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default NowShowing;
