import React from "react";
import "../css/style-login.css";
import {Button, ButtonGroup} from "react-bootstrap";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';

import { useRef } from "react";

import { Link } from "react-router-dom";
import Schedule from "./Schedule";

export default function ScheduleADay(props)  {
   
    const [ViewShow, setViewShow] = useState([])
    const buttonRef = useRef(null);

    const handleClick = event => {
      buttonRef.current.disabled = true;
  
      console.log('button clicked');
    };
   
  
    const { id } = useParams();
    useEffect(() => {
      refreshViewShow();
    }, [id]);
  
    function refreshViewShow() {
      const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByDate/${id}`
      )
        .then(res => setViewShow(res.data))
        .catch(err => console.log(err))
    }
    
    
    return (
        <div className="container" style={{ paddingLeft: '10px' }}>
        
        <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn ngày xem phim</h1>
        <div className="row side-B">
        <div >
            {ViewShow.msg}
            {
                 ViewShow.listShow._id
            }
         
          </div>  
          </div>
           
             
           
       
         </div>
        
       
   

    );
  
}
