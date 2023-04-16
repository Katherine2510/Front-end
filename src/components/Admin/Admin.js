import React, { Component } from "react";
//import Records from '../json/thisstore.json';
//import banner from "../images/banner7.jpg";
import '../../font-awesome/css/font-awesome.min.css'
import Popup from "reactjs-popup";
//import banner2 from "../images/banner2.png"
import { Outlet, Link } from "react-router-dom";
const Admin = () => {
  return (
    <>
      {/*end*/}
      <section
        className="image-head-wrapper"
        //style={{ backgroundImage: "url(" + banner +")" }}
      >
        <div className="inner-wrapper">
          <h1>ADMIN PAGE</h1>
        </div>
      </section>
      <div className="clearfix" />
      {/*dinning*/}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 col-xs-12">
              <h2 className="blog-title-head">Trung tâm chiếu phim quốc gia</h2>

              <div className="clearfix" />

              {/*------------------------------------------- */}

              <section className="blog">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-sm-8 col-xs-12">
                     

                      <div className="blog-image-single margin-top-small"></div>
                      
                    </div>
                    <aside className="col-md-3 col-sm-4 col-xs-12">
                      <div className="blog-list">
                        <h4>CÁC THÔNG TIN CHÍNH</h4>
                        <ul>
                          <li>
                            <Link to="/admin/nowshowing">
                              <i className="fa fa-caret-right"> </i>Xem danh
                              sách các bộ phim đang chiếu
                            </Link>
                          </li>
                          
                          <li>
                          <a href="/admin/show">
                              <i className="fa fa-caret-right"> </i>Xem danh
                              sách các show
                            </a>
                          </li>
                        </ul>
                        <div className="clearfix"> </div>
                      </div>
                    
                    </aside>
                  </div>
                </div>
              </section>
            </div>
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
