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


export default function TimeBooking(props)  {

  const [ViewTime, setViewTime] = useState([])
    const {id} = useParams();
    const { cid } = useParams();
    useEffect(() => {
      refreshViewTime();
    }, [cid][id]);


  
    function refreshViewTime() {
      const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByMovieID/${id}/${cid}`
      )
        
        .then(res => setViewTime(res.data))
        .catch(err => console.log(err))
    }
    
    
    return (
      <div  className="container" style={{ paddingLeft: '10px' }} > 
       <div >  
        <p>{id} </p>
          <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn khung giờ xem phim</h1>

          <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Ngày chiếu : {cid}</h1>
          <div className="row side-B">
         {  
              ViewTime.listShow?.map((e, i) => (
                <div>
                 <Link to ={`/${id}/${cid}/${e._id}`} className="button_book_times" onClick={() => {localStorage.clear(); localStorage.setItem('hall', e.hall)}}>
              {e.startTime.substr(11, 5)} - {e.endTime.substr(11, 5)}

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
