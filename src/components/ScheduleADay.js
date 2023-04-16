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
    const navigate = useNavigate();
   
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
    function ClickToSeat(param){
            
      fetch(
      `http://localhost:3001/api/show/getShowByShowID/${param}`,
      
      )
      .then((response) => {
          console.log(response);
          if (response.ok) {
          return response.json();
          }
          throw Error(response.status);
      })
      .then((result) => {

          localStorage.removeItem("hallseat")
          localStorage.setItem("hallseat", result?.show?.hall.numberRow);
          navigate(`/booking/${localStorage.getItem('showID')}`)
          
          //em thêm swith case vào đây theo từng role
          // dùng useNavigate để chuyển trang
      })
      .catch((error) => {
          console.log("error", error);
          alert("cant do it ");
      });
  };
    
    
    return (
        <div className="container" style={{ paddingLeft: '10px' }}>
        
        <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn </h1>
        <div className="container">
        <div className=" ">
          {  
               ViewShow.listShow?.map((e, i) => (
                 <div>
                  <Link  onClick={() => {ClickToSeat(e._id); localStorage.setItem("showID", e._id) }}  className="button_book_times"style={{  width: '100%' }} > <h1 style={{ marginLeft: '0px',textAlign: 'left', fontSize: '20px'}}>Phim Đang chiếu: {e.movie.title} </h1>
                  <h4 style={{ textAlign: 'left', fontSize: '20px'}}>Khung giờ chiếu: {e.startTime.substr(11, 5)} - {e.endTime.substr(11, 5)}</h4>
                  <h4 style={{ textAlign: 'left' }}>Thời Lượng: {e.movie.durationInMins}</h4>
                  <h4 style={{ textAlign: 'left' }}>Đạo diễn: {e.movie.director}</h4>
                  <h4 style={{ textAlign: 'left' }}>Đạo diễn: {e.movie.director}</h4>
                  </Link>

 
             </div>
             )
               )    
 
               }
         
          </div>  
          </div>
          </div>
           
        
       
   

    );
  
}
