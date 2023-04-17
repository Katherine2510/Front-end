import React from "react";
import "../../css/style-login.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import SeatItem from "./SeatItem";
import { Row, Form, Container } from "react-bootstrap";
import ja from "date-fns/locale/ja";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import ReactDOM from "react-dom";
import { render } from "react-dom"
import { Link } from "react-router-dom";

// /const UpdateSeats = Seats();
export default function Seats(props) {
    var selectingSeats = [];
    const { id } = useParams();
    const navigate = useNavigate();

    function choiceSeat(seat, row, col) {


        if (row == (Number(localStorage.getItem("hallseat")) - 1) && col % 2 == 0 && selectingSeats.includes(`${row}-${col + 1}`) == false && selectingSeats.includes(seat) == false) {
            selectingSeats.push(seat)
            selectingSeats.push(`${row}-${col + 1}`)

            document.getElementById(`${row}-${Number(col) + 1}`).checked = true;

        } else if (row == (Number(localStorage.getItem("hallseat")) - 1) && col % 2 !== 0 && selectingSeats.includes(`${row}-${col - 1}`) == false && selectingSeats.includes(seat) == false) {
            selectingSeats.push(seat)
            selectingSeats.push(`${row}-${col - 1}`)

            document.getElementById(`${row}-${Number(col) - 1}`).checked = true;

        } else if (selectingSeats.includes(seat) == false) {
            selectingSeats.push(seat)
        } else if (row !== (Number(localStorage.getItem("hallseat")) - 1) && selectingSeats.includes(seat) == true) {
            for (var i = 0; i < selectingSeats.length; i++) {

                if (selectingSeats[i] === seat) {

                    selectingSeats.splice(i, 1);
                }

            }
        } else if (row == (Number(localStorage.getItem("hallseat")) - 1) && selectingSeats.includes(seat) == true && selectingSeats.includes(`${row}-${col + 1}`) == true && col % 2 == 0) {
            document.getElementById(`${row}-${Number(col) + 1}`).checked = false;
            for (var i = 0; i < selectingSeats.length; i++) {

                if (selectingSeats[i] === seat) {

                    selectingSeats.splice(i, 1);
                }
                if (selectingSeats[i] === `${row}-${col + 1}`) {

                    selectingSeats.splice(i, 1);
                }

            }
        }
        else if (row == (Number(localStorage.getItem("hallseat")) - 1) && selectingSeats.includes(seat) == true && selectingSeats.includes(`${row}-${col - 1}`) == true && col % 2 !== 0) {
            document.getElementById(`${row}-${Number(col) - 1}`).checked = false;
            for (var i = 0; i < selectingSeats.length; i++) {

                if (selectingSeats[i] === seat) {

                    selectingSeats.splice(i, 1);
                }
                if (selectingSeats[i] === `${row}-${col - 1}`) {

                    selectingSeats.splice(i, 1);
                }

            }
        }


    };



    function CostOfTicket() {
        { localStorage.setItem("seats", selectingSeats) }

        const Selected = selectingSeats;
        var res = [];
        for (var i = 0; i < selectingSeats.length; i++) {
            var charSeatcheck = selectingSeats[i].split("-");
            res.push(`${Number(charSeatcheck[0])+1}-${String.fromCharCode(65 +Number(charSeatcheck[1]))}`)
        }

        localStorage.setItem('charSeat', res)

        axios.get(`http://localhost:3001/api/show/getShowByShowID/${id}`).then(res => {
            // console.log(res.data)
            let cost = 0;
            var array_seats = [];
            res.data?.show?.seats.map((e, i) => {
                let seatNumber = `${String(e.row - 1)}-${String(e.column - 1)}`
                for (var j = 0; j < selectingSeats.length; j++) {

                    if (seatNumber == selectingSeats[j]) {
                        array_seats.push(e._id)
                        if (e.type === 1) {
                            cost += 60000;
                        } else if (e.type == 2) {
                            cost += 80000;
                        } else {
                            cost += 85000;
                        }
                    } else {
                        cost += 0;
                    }



                }
            })
            { localStorage.setItem("cost", cost) }
            const someElement = document.getElementById("element")

            if (someElement) {
                ReactDOM.render(<p>{localStorage.getItem('cost')}</p>, someElement)
            }
            const someSeat = document.getElementById("someSeat")

            if (someSeat) {
                ReactDOM.render(<p>{localStorage.getItem('charSeat')}</p>, someSeat)
            }
            { localStorage.setItem("seats_array", array_seats) }

        })



    }



    function checkAvailableseat() {
        ViewDate.show?.seats.map((e, i) => {
            let seatNumber = `${String(e.row - 1)}-${String(e.column - 1)}`
            if (e.state === true) {

                document.getElementById(seatNumber).setAttribute("disabled", true)
            }

        })



    }
    function checkTypeseat() {
        ViewDate.show?.seats.map((e, i) => {
            let seatNumber = `${String(e.row - 1)}-${String(e.column - 1)}`
            if (e.type === 1) {
                document.getElementById(seatNumber).className = "input";
            }
            else if (e.type === 2) {

                document.getElementById(seatNumber).className = "input1";

            }
            else if (e.type === 3) {

                document.getElementById(seatNumber).className = "input2";



            }

        })



    }

    const [ViewDate, setViewDate] = useState([])

    useEffect(() => {
        refreshViewDate();
    }, []);

    function refreshViewDate() {
        const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByShowID/${id}`
        )
            .then(res => setViewDate(res.data))
            .catch(err => console.log(err))
            .then((res) => {
                localStorage.setItem("hallseat", res.data?.show?.hall?.numberColumn)
            })
    }
    function toPayment() {


        fetch("http://localhost:3001/api/payment/create_payment_url/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: Number(localStorage.getItem('cost')),
                showID: localStorage.getItem("showID"),
                seats: localStorage.getItem("seats_array").split(","),
                userID: localStorage.getItem("user")
            })
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }

            })
            .then((result) => {
                console.log(result.success);
                window.open(result.vnpUrl);

            })
            .catch((error) => {
                console.log("error", error);
                alert("Oh! Something wrong");
            });
    }


    return (

        <>

            {checkAvailableseat()}
            {checkTypeseat()}

            <div className="container">
                <div className="side-A4" >
                    <div className="w3ls-reg" style={{ paddingTop: '0px', textAlign: 'center' }}>
                        <ul className="seat_w3ls">

                            <li className="smallBox greenBox">Ghế đang chọn</li>

                            <li className="smallBox redBox">Ghế đã đặt trước</li>

                            <li className="smallBox emptyBox">Ghế thường</li>
                            <li className="smallBox emptyBox1" style={{ borderColor: 'pink' }}>Ghế Vip</li>
                            <li className="smallBox emptyBox2" style={{ borderColor: 'pink' }}>Hàng ghế đôi</li>
                        </ul>
                        <div className="screen">
                            <h2 className="wthree">Màn hình</h2>
                        </div>
                        <table className="table-seat" style={{ width: '500px' }}>
                            <div className="row1">
                                {[...new Array(Number(localStorage.getItem("hallseat")) + 1)].map((col, colIndex) => {
                                    return (
                                        colIndex === 0
                                            ? <tr style={{ width: '15px', marginRight: '7px', cursor: 'pointer' }} ></tr>

                                            :
                                            <tr style={{ width: '15px', marginRight: '7px', cursor: 'pointer', marginLeft: '7px' }} >{String.fromCharCode(64 + colIndex)}</tr>
                                    )
                                })}
                            </div>


                            {[...new Array(Number(localStorage.getItem("hallseat")))].map((row, rowIndex) => {
                                return (
                                    <div className="row1"  >
                                        <tr style={{ width: '20px' }} key={rowIndex}>{Number(rowIndex) + 1}</tr>
                                        <div
                                            key="Klassis-Section"
                                            className=""

                                        >

                                            {[...new Array(Number(localStorage.getItem("hallseat")))].map((col, colIndex) => {

                                                return (

                                                    <>  <input
                                                    key={colIndex}
                                                        type="checkbox"
                                                        id={`${rowIndex}-${colIndex}`}
                                                        onClick={() => { choiceSeat(`${rowIndex}-${colIndex}`, rowIndex, colIndex) }} />
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </table>



                        <button style={{ marginTop: '30px', height: '50px' }} onClick={() => { CostOfTicket() }}>Chấp nhận</button>
                    </div>



                </div>
                <div className="side-B4 bill" style={{}}>
                    <h1 style={{ fontSize: '30px', color: 'white' }}>Hoá đơn của bạn</h1>
                    <p style={{ fontSize: '15px' }}>Phim: <div>{localStorage.getItem("title")}</div></p>
                    <p style={{ fontSize: '15px' }}>Ngày chiếu phim: <div>{localStorage.getItem('date')}</div></p>
                    <p style={{ fontSize: '15px' }}>Thời gian:<div>{localStorage.getItem("start")} - {localStorage.getItem("end")}</div></p>
                    <p style={{ fontSize: '15px' }}> Các vị trí đã chọn:<div id="someSeat"></div> </p>
                    <p style={{ fontSize: '15px' }}>Số tiền phải trả là :<div id="element"></div></p>

                    <div className="row"  >
                        <button onClick={() => { toPayment() }} style={{ height: '50px', width: '80%', paddingRight: '0px', paddingLeft: '0px' }}>
                            THANH TOÁN
                        </button>


                    </div>
                </div>
            </div>











        </>



    );

}
