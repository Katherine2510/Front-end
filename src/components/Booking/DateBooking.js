import React from "react";
import "../../css/style-login.css";
import {Button, ButtonGroup} from "react-bootstrap";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import TimeBooking from "./TimeBooking";
import { useRef } from "react";

import { Link } from "react-router-dom";

export default function DateBooking(props)  {
    const current = new Date("2023-04-20");
    const [ViewDate, setViewDate] = useState([])
    const buttonRef = useRef(null);

    const handleClick = event => {
      buttonRef.current.disabled = true;
  
      console.log('button clicked');
    };
    const getInitialState = () => {
        const value = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}` ;
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = e => {
        
      };
  
    const { id } = useParams();
    useEffect(() => {
      refreshViewDate();
    }, [id]);
  
    function refreshViewDate() {
      const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByMovieID/${id}`
      )
        .then(res => setViewDate(res.data))
        .catch(err => console.log(err))
    }
    
    
    return (
        <div className="container" style={{ paddingLeft: '10px' }}>
        
        <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn ngày xem phim</h1>
        <div className="row side-B">
        <div >
      
          <Link ref={buttonRef} onClick={handleClick} to ={`/datebooking/${id}/timebooking/${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()).padStart(2, '0')}</Link>
          <Link ref={buttonRef} onClick={handleClick} to ={`/datebooking/${id}/timebooking/${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+1).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+1).padStart(2, '0')}</Link>
          <Link ref={buttonRef} onClick={handleClick} to ={`/datebooking/${id}/timebooking/${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+2).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+2).padStart(2, '0')}</Link>
          <Link ref={buttonRef} onClick={handleClick} to ={`/datebooking/${id}/timebooking/${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()+3).padStart(2, '0')}`} className="button_book_times" >{current.getFullYear()}-{String(current.getMonth() + 1).padStart(2, '0')}-{String(current.getDate()+3).padStart(2, '0')}</Link>
         
          </div>  
          </div>
           
             
           
       
         </div>
        
       
   

    );
  
}
