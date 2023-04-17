import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../css/table.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/lightbox.min.css";
import "../../css/bootstrap.min.css";
import UpdateUser from "./UpdateUser";
import "./Profile.css"
import profile from "../../images/profile.png"

import axios from "axios";


export default function Profile(props) {
  const [Profile, setProfile] = useState([]);
  const { token } = useParams();

  useEffect(() => {
    refreshProfile();
  }, [token]);

  function refreshProfile() {
    const ProjectAPI = axios
      .get(`http://localhost:3001/api/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  {" "}
  <div className="card p-4">
    {" "}
    <div className=" image d-flex flex-column justify-content-center align-items-center">
      {" "}
      <button className="btn btn-secondary" style={{ marginBottom: '50px', marginTop: '50px' }}>
        {" "}
        <img src={profile} height={100} width={100}/>
      </button>{" "}
      <span className="name mt-3">{Profile.user?.firstName} {Profile.user?.lastName}</span>{" "}
      <span className="idd">{Profile.user?.email}</span>{" "}
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        {" "}
     
       
      </div>{" "}
      
      <div className=" d-flex mt-2">
        {" "}
        <button className="btn1 btn-dark"><Link to="/profile/updateuser" style={{ color: "white" }}>Chỉnh sửa</Link></button>{" "}
      </div>{" "}
      <div className=" d-flex mt-2">
        {" "}
        <button className="btn1 btn-dark"><Link to="/profile/updatepassword" style={{ color: "white" }}>Cập nhật mật khẩu</Link></button>{" "}
      </div>{" "}
      <div className=" d-flex mt-2">
        {" "}
        <button className="btn1 btn-dark"><Link to="/profile/userbooking" style={{ color: "white" }}>Xem vé đã đặt trước</Link></button>{" "}
      </div>{" "}
      
   </div>
    
  </div>
</div>

  );
}
