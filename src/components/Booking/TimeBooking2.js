
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

const TimeBooking2 = () => {
        const navigate = useNavigate();
        const {cid} = useParams();
        const [ViewTime, setViewTime] = useState([])
        const {id} = useParams();
    
        useEffect(() => {
        refreshViewTime();
        }, [cid]);

        function refreshViewTime() {
        const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByMovieID/${id}/${cid}`
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
                localStorage.removeItem("startime")
                localStorage.setItem("startime", result?.show?.startTime.substr(11,5));
                localStorage.removeItem("endtime")
                localStorage.setItem("endtime", result?.show?.endTime.substr(11,5));
                localStorage.removeItem("hall")
                localStorage.setItem("hall", result?.show?.hall);
             
                switch (result?.show?.hall.type) {
                    case roleType.S:
                    navigate(`/datebooking/${id}/timebooking/${cid}/S`);
                    localStorage.setItem('kindofhall', 'S')
                    break;

                    case roleType.L:
                    navigate(`/datebooking/${id}/timebooking/${cid}/L`);
                    console.log(result)
                    localStorage.setItem('kindofhall', 'L')
                    break;

                    case roleType.M:
                    navigate(`/datebooking/${id}/timebooking/${cid}/M`);
                    console.log(result)
                    localStorage.setItem('kindofhall', 'M')
                    break;
                    //case //viết nốt vào đây là đc nè
                   
                }
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
           <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn lịch xem phim</h1>
 
       
           <div className="row side-B">
          {     
               ViewTime.listShow?.map((e, i) => (
                 <div>
                    
                  <Link to ={""} className="button_book_times" onClick={() => {ClickToSeat(e._id); localStorage.setItem("showID", e._id); localStorage.setItem("date", e.startTime.substr(0,11)); localStorage.setItem("title", e.movie.title); localStorage.setItem("start", e.startTime.substr(11,8));localStorage.setItem("end", e.endTime.substr(11,8)) }} >
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

  export default TimeBooking2;