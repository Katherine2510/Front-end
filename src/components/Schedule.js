import React from "react";
import "../css/style-login.css";
import {Button, ButtonGroup} from "react-bootstrap";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {Routes, Route} from 'react-router-dom';
import  axios from "axios";
import { useRef } from "react";

import { Link } from "react-router-dom";
const roleType = {
  S: '2023-04-20',
  M:'2023-04-21',
  L:'2023-04-22',
  B:'2023-04-23',
  //thêm các role vào đây,
}

export default function Schedule(props)  {
    const current = new Date("2023-04-20");
    const  navigate  = useNavigate();
    const [ViewDate, setViewDate] = useState([])
    const buttonRef = useRef(null);

   
    const getInitialState = () => {
        const value = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}` ;
        return value;
      };
    
    return (
        <div className="container" style={{ paddingLeft: '10px' }}>
        
        <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn ngày xem phim</h1>
        <div className="row side-B">
        <div >
      
          <Link ref={buttonRef} to={`${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()).padStart(2, '0')}</Link>
          <Link ref={buttonRef} to={`${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+1).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+1).padStart(2, '0')}</Link>
          <Link ref={buttonRef} to={`${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+2).padStart(2, '0')}`}   className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+2).padStart(2, '0')}</Link>
          <Link ref={buttonRef} to={`${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+3).padStart(2, '0')}`}  className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+3).padStart(2, '0')}</Link>
         
          </div>  
          </div>
           
             
           
       
         </div>
        
       
   

    );
  
}
