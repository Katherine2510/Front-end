
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

const SuccessBooking = () => {
        
    return (
        <div  className="container" style={{ paddingLeft: '10px' }} > 
        <div >  
           <h1>THANH TOÁN THÀNH CÔNG</h1>
            <button style={{ width: '50%',height:"50px", marginLeft: "25%" }}><Link to= "/profile/userbooking">Xem lại vé của bạn</Link></button>      
         </div>
        </div>
        
      

     
    );
  }

  export default SuccessBooking;