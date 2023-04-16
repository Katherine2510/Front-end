
import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import "../../css/style.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const roleType = {
    S: 'S',
    M:'M',
    L:'L',
    //thêm các role vào đây,
}

const ScheduleAFilm = () => {
        const navigate = useNavigate();
        const {cid} = useParams();
        const [ViewTime, setViewTime] = useState([])
        const {id} = useParams();
    
        useEffect(() => {
        refreshViewTime();
        }, [cid]);

        function refreshViewTime() {
        const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByMovieID/${id}`
        )
            .then(result => setViewTime(result.data))
            .catch(err => console.log(err))
        };
    
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
                console.log(result);
               
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
        <div  className="container" style={{ paddingLeft: '10px' }} > 
        <div >  
           <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn khung giờ xem phim</h1>
 
           <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Ngày chiếu : {cid}</h1>
           <div className="row side-B">
          {     
               ViewTime.listShow?.map((e, i) => (
                 <div>
                    <h1 style={{  fontSize: '30px', marginLeft: '0px' }}>{e.startTime.substr(0,10)}</h1>
                  <Link  className="button_book_times" onClick={() => {ClickToSeat(e._id); localStorage.setItem("showID", e._id) ; localStorage.setItem("date", e.startTime.substr(0,11)); localStorage.setItem("title", e.movie.title); localStorage.setItem("start", e.startTime.substr(11,8));localStorage.setItem("end", e.endTime.substr(11,8))}} >
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

  export default ScheduleAFilm;