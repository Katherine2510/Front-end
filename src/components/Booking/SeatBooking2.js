import React, { Component } from 'react'
import axios from 'axios'
import { useNavigate, withRouter } from "react-router-dom"
import '../../css/booking.css'
import { Route, Router, Routes } from 'react-router-dom'
import ViewNameFilm from '../View/ViewNameFilm'
import { Link } from 'react-router-dom'

class SeatBooking2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectingSeats: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/show/getShowByShowID/6435306d0b4c07197500771a').then(res => {
            // console.log(res.data)
            res.data?.show?.seats.map ((e,i) =>{
                let seatNumber = `${String.fromCharCode(e.row + 64)}${String(e.column)}`
                if (e.state === true) {
                
                    document.getElementById(seatNumber).setAttribute("disabled", true)
                }
                
            })
          
           
        })
     
    }
    
    choiceSeat = (seat) => {
        if (this.state.selectingSeats.includes(seat) == false) {
            const newBookedSeats = [ ...this.state.selectingSeats, seat ];
            this.setState({
            selectingSeats: newBookedSeats
 
        })
        } else {
            for( var i = 0; i < this.state.selectingSeats.length; i++){ 
    
                if ( this.state.selectingSeats[i] === seat) { 
            
                    this.state.selectingSeats.splice(i, 1); 
                }
            
            }
        } 

      
       
        
 
    };
 
    SelectSeats = () => {
      
        const Selected = this.state.selectingSeats;
        if(Selected.length !== 0)
        {
            localStorage.setItem('seats', this.state.selectingSeats)  
            const Selected = this.state.selectingSeats;     
            
        }
        else {
            localStorage.setItem('success', false)
            alert('Please Select Seats')
        }
        localStorage.setItem('numberofseats', Selected.length) 
        
       
      
    
    };
    

    render() {
        const renderAuthButton = () => {
            if (localStorage.getItem('success') == 'true') {
                return (<Link to = 'bill'> <button onClick={() => { this.SelectSeats()}}>Confirm Selection</button> </Link>) ;
            } else {
                return   <button onClick={() => { this.SelectSeats()}}>Confirm Selection</button>;
            }
            }

        const seatsColumnsOfM1 = ['1', '2', '3', '4', '', '5',  '6', '7', '8', '9', '10','', '11','12'];
        const seatsRowsOfM1 = ['L','K', 'J','I', 'H', '', 'G', 'F', 'E', 'D','C', '', 'B','A'];
        const seatsGeneratorM1 = () => {
            return (
                <table id="seatsBlock" >
                    <tbody>
                    <tr>
                        <td></td>
                        {seatsColumnsOfM1
            .map((column, index) => <td key={index}>{column}</td>)}
                    </tr>
                    {
                        seatsRowsOfM1.map((row, index) =>{
                         return row ==''
                                ?
                                <tr key={index} className="seatVGap"></tr>
                                : row == 'L'
                                ? 
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfM1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} ></td>
                                                :
                                                <td key={index}>
                                                    {column % 2 != 0 ? <input onClick={() => this.choiceSeat(`${row}${column}${(Number(column)+1).toString()}`)} type="checkbox" className="seats input2" id={`${row}${column}`} value={`${row}${column}`} />
                                                    : <></>}
                                                    
                                                </td>
                                                
                                        )
                                    })}
                                </tr>
                                :
                                row < 'H' && row > 'B'
                                ?
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfM1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap"></td>
                                                : column > 3 && column <10
                                                ?
                                                <td key={index} >
                                                    <input style={{ borderColor:'blue' }}onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats input1" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                                :
                                                <td key={index}>
                                                    <input onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                                
                                        )
                                    })}
                                </tr>
                                :
                                <tr key={index}>
                                    <td>
                                        {row}
                                    </td>
                                    {seatsColumnsOfM1
                        .map((column, index) => {
                                        return (
                                            column === ''
                                                ?
                                                <td key={index} className="seatGap"></td>
                                                :
                                                <td key={index}>
                                                    <input onClick={() => this.choiceSeat(`${row}${column}`)} type="checkbox" className="seats" id={`${row}${column}`} value={`${row}${column}`} />
                                                </td>
                                                
                                        )
                                    })}
                                </tr>
                                
                            })
                    }
                    </tbody>
                </table>
            );
        };
        

       
        return (
            <div>
                <div >
                    <h1 style={{ color: "black" }}>Lựa chọn chỗ ngồi</h1>
                    <h4></h4>
                    <div className='container'>
                    <div className="containerbooking">
                        <div className="w3ls-reg" style={{paddingTop: '0px'}}>
                            <ul className="seat_w3ls">
                                <li className="smallBox greenBox">Ghế đang chọn</li>

                                <li className="smallBox redBox">Ghế đã đặt trước</li>

                                <li className="smallBox emptyBox">Ghế thường</li>
                                <li className="smallBox emptyBox1" style={{ borderColor: 'pink' }}>Ghế Vip</li>
                                <li className="smallBox emptyBox2" style={{ borderColor: 'pink' }}>Hàng ghế đôi</li>
                            </ul>
                            <div className="seatStructure txt-center" style={{overflowX:'auto'}} >
                                {seatsGeneratorM1()}
                                <div className="screen">
                                    <h2 className="wthree">Đây là màn hình</h2>
                                </div>
                                {renderAuthButton()}
                            </div>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
            </div>
        );
    }
}

export default SeatBooking2;