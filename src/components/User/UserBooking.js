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
import DeleteBooking from "./DeleteBooking";
import axios from "axios";

class UserBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            cols: [],
            openEditItem: false,
            openDeleteBooking: false,
            openAddNew: false,
            selectedItem: null,
        };
    }
    refresh = () => {
        window.location.reload();
    };

    componentDidMount() {
        fetch("http://localhost:3001/api/booking", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    rows: data,
                    //sItem: this.state.rows.listBooking.show.movie,
                });
            });
        fetch(`http://localhost:3001/api/movie/${this.state.rows.listBooking?.show.movie}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    rows: data,
                    //sItem: this.state.rows.listBooking.show.movie,
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

    handleDeleteItems = (item) => {
        this.setState({
            openDeleteBooking: true,
            selectedItem: item,
        });
    };

    handleClose = () => {
        this.setState({
            openEditItem: false,
            openDeleteBooking: false,
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

    callApiDeleteBooking = () => {
     
        const json = JSON.stringify({
            vnp_TxnRef: String(this.state.selectedItem.payment.vnp_TxnRef),
            vnp_TransactionDate: String(this.state.selectedItem.payment.vnp_TransactionDate),
            vnp_Amount: String(this.state.selectedItem.amount),
            vnp_CreateBy: "NGUYEN VAN A",
            bookingID: this.state.selectedItem._id
        });
        const res = axios.post('http://localhost:3001/api/payment/refund', json, {
            headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        });
        alert("Khong thanh cong");

    }


    //Xác nhận tương ứng với các hoạt động openEditItem và openDeleteShow
    handleSubmit = (newOne) => {
        let rows = this.state.rows;
        // Edit
        // Delete
        if (this.state.openDeleteBooking) {
            this.callApiDeleteBooking();
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
                <Button onClick={() => this.handleDeleteItems(item)}>Hủy vé</Button>
            </div>
        );
    };

    render() {
        return (
            <div col-md-9 col-sm-8 col-xs-12>
                <div id="product-table">
                    <h2>Vé đã đặt</h2>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow
                                    className="detail"
                                    style={{ fontSize: "20px !important" }}
                                >
                                    <TableCell style={{ width: "5%" }}>STT</TableCell>
                                    <TableCell style={{ width: "10%" }}>ID vé</TableCell>
                                    <TableCell style={{ width: "25%" }}>Tên phim</TableCell>
                                    <TableCell>Phòng chiếu</TableCell>
                                    <TableCell style={{ width: "6%" }}>Ghế ngồi</TableCell>
                                    <TableCell>Thời gian bắt đầu</TableCell>
                                    <TableCell>Thời gian kết thúc</TableCell>
                                    <TableCell>Thanh toán</TableCell>

                                    <TableCell style={{ width: "5%" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="detail">
                                {this.state.rows.listBooking?.map((row, i) => (

                                    <>

                                        <TableRow key={row.id}>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{row._id}</TableCell>
                                            <TableCell>{row.show?.movie.title}</TableCell>
                                            <TableCell>{row.show?.hall.name}</TableCell>
                                            <TableCell>{row.seats?.map((col) => (
                                                `Ghế(${col.row}-${String.fromCharCode(65 + Number(col.column))}) `

                                            ))}</TableCell>
                                            <TableCell>{row.show?.startTime}</TableCell>
                                            <TableCell>{row.show?.endTime}</TableCell>
                                            <TableCell>{row.amount}</TableCell>
                                            <TableCell>{this.actionsBlock(row)}</TableCell>
                                        </TableRow>
                                    </>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {this.state.openDeleteBooking ? (
                        <DeleteBooking
                            open={this.state.openDeleteBooking}
                            selectedItem={this.state.selectedItem}
                            handleClose={this.handleClose}
                            handleSubmit={this.handleSubmit}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export default UserBooking;
