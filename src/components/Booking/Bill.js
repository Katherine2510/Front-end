import React from "react";
import "../../css/style-login.css";
import {Button, ButtonGroup} from "react-bootstrap";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import { useRef } from "react";


export default function Bill(props)  {
  
  const {navigate} = useNavigate();
    const { id} = useParams();
    const {cid} = useParams();
    const {did} = useParams();
    var arr =  localStorage.getItem('seats').split(",");
    function return_ID (arr) {
      var seats_id = [];
      for (var  i = 0 ; i < arr.length; i++) { 
      var myHeaders = new Headers();
      myHeaders.append( "Content-Type", "application/x-www-form-urlencoded/json");
     
      var urlencoded = new URLSearchParams();
      urlencoded.append("showID",String(localStorage.getItem('showID')));
      urlencoded.append("row", Number(5));
      urlencoded.append ("colunm", Number(5))
      
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };
  
      fetch("http://localhost:3001/api/show/findSeatID", requestOptions)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw Error(response.success);
        })
        .then((result) => {
          
        })
        .catch((error) => {
          
        });
      }
      localStorage.setItem('seatsArray', seats_id)
      return seats_id;
    }
    function total_payment(arr) {
      let cost = 0;
      if (localStorage.getItem('kindofhall') == 'S')
     {
      for (var  i = 0 ; i < arr.length; i++) {
          if (arr[i] == "F3"|| arr[i] == 'F4'||arr[i] == 'F5' ||arr[i] == 'F6' || arr[i] == 'E3' || arr[i] == 'E4'||arr[i] == 'E5' || arr[i] == 'E6'||
          arr[i] == 'D3' || arr[i] == 'D4'||arr[i] == 'D5' || arr[i] == 'D6'||arr[i] == 'C3' || arr[i] == 'C4'||arr[i] == "C5" || arr[i] == 'C6')
          {

            cost += 80000;
          }
          else if (arr[i].substr(0,1) == 'H') {
            cost += 170000;
        } else {
            cost += 60000;
        }
      }}
      else if (localStorage.getItem('kindofhall') == 'M') {
          for (var  i = 0 ; i < arr.length; i++) {
            if (arr[i].substr(0,1) > 'C' && arr[i].substr(0,1) < 'J' && arr[i].substr(1,1) > 3 && arr[i].substr(1,1) < 12)
            {
  
              cost += 80000;
            }
            else if (arr[i].substr(0,1) == 'L') {
              cost += 170000;
          } else {
              cost += 60000;
          }
        }
      }  
      else if(localStorage.getItem('kindofhall') == 'L') {
          for (var  i = 0 ; i < arr.length; i++) {
            if (arr[i].substr(0,1) > 'B' && arr[i].substr(0,1) < 'H' && arr[i].substr(1,1) > 3 && arr[i].substr(1,1) < 10)
            {
  
              cost += 80000;
            }
            else if (arr[i].substr(0,1) == 'N') {
              cost += 170000;
          } else {
              cost += 60000;
          }
        }
      }
        localStorage.setItem("cost", cost);
        return cost;
       
      }
      

    function toPayment() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append(  'Authorization',`Bearer ${localStorage.getItem('token')}` )
      var urlencoded = new URLSearchParams();
      urlencoded.append("amount", String(localStorage.getItem('cost')));
      urlencoded.append("showID", String(localStorage.getItem("showID")))
      urlencoded.append("seats", "643530650b4c071975007592" )
      urlencoded.append("userID", String(localStorage.getItem("user")))

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };
  
      fetch("http://localhost:3001/api/payment/create_payment_url/", requestOptions)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw Error(response.success);
        })
        .then((result) => {
          console.log(result.success);
          window.open(`${result.vnpUrl}`).focus();
          
        })
        .catch((error) => {
          console.log("error", error);
          alert("email, password are wrong");
        });
    }
    return (
     <>
      <div className="containerbooking" style={{paddingTop: '0px'}} >
        <div className="bill" >
                        <h1 style={{ fontSize: '30px'}}>Hoá đơn của bạn</h1>
                        <p>Phim: {localStorage.getItem("movie_title")}</p>
                       <p>Ngày chiếu phim: {localStorage.getItem('date')}</p>
                       <p>Thời gian: {localStorage.getItem("startime")} - {localStorage.getItem("endtime")}</p>
                        <p>Các vị trí đã chọn: {localStorage.getItem('seats')} </p>
                       <p>Số tiền phải trả là :{total_payment(arr)}</p> 
                       <p>{return_ID(arr)}</p>
                       <div className="row" style={{ marginLeft: '0px' }}>
                       <Link onClick={()=>{return_ID(arr); toPayment()}} style={{ paddingLeft:'20%' }}>
                          THANH TOÁN
                        </Link>
                        <Link to ={`/datebooking/${id}`} >
                          QUAY LẠI
                        </Link>
                       </div>
                       
                       

                       
        </div>
                       
      </div> 
     </>

    );
  
}
