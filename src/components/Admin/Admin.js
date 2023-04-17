import React, { Component } from "react";
//import Records from '../json/thisstore.json';
import banner from "../../images/pictures/admin.png";
import "../../font-awesome/css/font-awesome.min.css";

import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/lightbox.min.css";
import "../../css/bootstrap.min.css";
import Popup from "reactjs-popup";


import film1 from "../../images/u_c_film1.png";
import film2 from "../../images/u_c_film2.png";
import film3 from "../../images/u_c_film1.png";

//import banner2 from "../images/banner2.png"
import { Outlet, Link } from "react-router-dom";
const Admin = () => {
  return (
    <>
    
      <section
        className="image-head-wrapper"
        style={{ backgroundImage: "url(" + banner + ")" }}
      >
       
      </section>
      <section className="gallery-block gallery-front" style={{ marginBottom: '150px' }}>
        <div className="margintrue">
          <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
            <ul className="list-unstyled nav1 cl-effect-10 ">
            <p className="title3">Chào mừng bạn đến với trang Admin</p>
              <li>
                <Link data-hover="CÁC SHOW" to="/admin/show" >
                  <span style={{border:"1px solid"}}>CÁC SHOW</span>
                </Link>
              </li>
              <li>
                <Link data-hover="PHIM ĐANG CHIẾU" to="/admin/nowshowing">
                  <span style={{border:"1px solid"}}>PHIM ĐANG CHIẾU</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );

  /*  
    
    return (
        
    
       Records.map( record => 
        {
            return(
                <div>
                    <p>{record.address}</p>
                </div>
            )
        })
     
    )
  
};*/
};

export default Admin;