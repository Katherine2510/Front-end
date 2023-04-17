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
import AddNewShow from "./AddNewShow";
import AddNewShow2 from "./AddNewShow2";
import DeleteShow from "./DeleteShow";
import EditShow from "./EditShow";
import axios from "axios";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      openEditItem: false,
      openDeleteShow: false,
      openAddNew: false,
      selectedItem: null,
    };
  }
  refresh = () => {
    window.location.reload();
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/show")
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

  handleClickOpens = (item) => {
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
  handleDeleteItems = (item) => {
    this.setState({
      openDeleteShow: true,
      selectedItem: item,
    });
  };

  handleClose = () => {
    this.setState({
      openEditItem: false,
      openDeleteShow: false,
      openAddNew: false,
      selectedItem: null,
    });
    {
      localStorage.removeItem("Hall_id");
    }
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

  callApiDeleteShow = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    var urlencoded = new URLSearchParams();
    urlencoded.append("_id", this.state._id);
    urlencoded.append("title", this.state.title);

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
`http://localhost:3001/api/show/${this.state.selectedItem._id}`,
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

  callApiEditAccount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", this.state.title);
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
      `http://localhost:3001/api/movie/${this.state.selectedItem._id}`,
      requestOptions
    ).then((response) => {
      console.log(response);
      this.setState({ rows: response.data.rows });
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    });
  };

  //Xác nhận tương ứng với các hoạt động openEditItem và openDeleteShow
  handleSubmit = (newOne) => {
    let rows = this.state.rows;
    // Edit
    if (this.state.openEditItem) {
      newOne.preventDefault();

      let key = this.state._id;
      this.setState((prevState) => ({
        news: prevState.news.map((elm) =>
          elm._id === key
            ? {
                ...elm,
                title: this.state.title,
                description: this.state.description,
                //content: this.state.content,
              }
            : elm
        ),
      }));
    }
    // Delete
    if (this.state.openDeleteShow) {
      this.callApiDeleteShow();
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
        <Button
          onClick={() => {
            this.handleClickOpens(item);
            localStorage.setItem("Movie_id", item.movie?._id);
            localStorage.setItem("Hall_id", item.hall?._id);
            localStorage.setItem("startTime", item.startTime);
            localStorage.setItem("endTime", item.endTime);
            localStorage.setItem("Movie_id_name", item.movie?.title);
            localStorage.setItem("Hall_id_name", item.hall?.name);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => this.handleDeleteItems(item)}>Delete</Button>
      </div>
    );
  };

  render() {
    return (
      <div col-md-9 col-sm-8 col-xs-12>
        <div id="product-table">
          <ButtonGroup>
<button className="button3" onClick={() => this.handleOpenAddNew()} style={{ width: '240px', backgroundColor: ' #2b2b2b', borderRadius: '0px' }}>
              Thêm Show mới
            </button>
          </ButtonGroup>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  className="detail"
                  style={{ fontSize: "20px !important" }}
                >
                  <TableCell style={{ width: "5%" }}><p className="table-cell">STT</p></TableCell>
                  <TableCell><p className="table-cell">Tên phim</p></TableCell>
                  <TableCell><p className="table-cell">Ngày chiếu</p></TableCell>
                  <TableCell><p className="table-cell">Thời gian bắt đầu</p></TableCell>
                  <TableCell><p className="table-cell">Thời gian kết thúc</p></TableCell>
                  <TableCell><p className="table-cell">Sảnh</p></TableCell>

                  <TableCell style={{ width: "5%" }}><p className="table-cell">Actions</p></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="detail">
                {this.state.rows.listShow?.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell><p className="table-cell">{i + 1}</p></TableCell>
                    <TableCell><p className="table-cell">{row.movie.title}</p></TableCell>
                    <TableCell><p className="table-cell">{row.endTime.substr(0,10)}</p></TableCell>
                    <TableCell><p className="table-cell">{row.startTime.substr(11,8)}</p></TableCell>
                    <TableCell><p className="table-cell">{row.endTime.substr(11,8)}</p></TableCell>
                    <TableCell><p className="table-cell">{row.hall.name}</p></TableCell>
                    <TableCell><p className="table-cell">{this.actionsBlock(row)}</p></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {this.state.openEditItem ? (
            <EditShow
              open={this.state.openEditItem}
              selectedItem={this.state.selectedItem}
              checkName={this.checkName}
              handleClose={this.handleClose}
              handleChange={this.handleChange}
              //handleChangeDate={this.handleChangeDate}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          {this.state.openDeleteShow ? (
            <DeleteShow
              open={this.state.openDeleteShow}
              selectedItem={this.state.selectedItem}
              handleClose={this.handleClose}
              handleSubmit={this.handleSubmit}
            />
          ) : null}
          {this.state.openAddNew ? (
            <AddNewShow
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

export default Show;