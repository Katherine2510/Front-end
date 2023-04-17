import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import "../css/responsive.css";
import "../css/lightbox.min.css";
import "../css/bootstrap.min.css";
import logo_home from "../images/logo_home.png";

const Header = () => {
  const id = localStorage.getItem("success");
  const ad = localStorage.getItem("email");
  const navigate = useNavigate();
  return (
    <div>
      <div className="top-header">
        <div className="container">
          <div className="row" >
            <div  style={{ float: 'left', width: '70%'}}>
              
            </div>
            <div style={{ float: 'right', width: '30%' }}>
              <div className="social-grid text-right">
                <ul style={{ lineHeight: '0px' }}>
                  <li>
                    <a href="https://www.facebook.com/chieuphimquocgiavn/">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*header-*/}
      <header className="header-container">
        <div className="container">
          <div className="top-row">
            <div className="row">
              <div className="col-md-2 col-sm-4 col-xs-6">
                <div id="logo">
                  {/*<a href="index.html"><img src="images/logo.png" alt="logo"></a>*/}
                  <a href="/">
                    <img alt="image" src={logo_home} />
                  </a>
                </div>
              </div>
              <div
                className="col-md-10
                 col-sm-12 col-xs-12 remove-padd"
              >
                <nav className="navbar navbar-default">
                  <div className="navbar-header page-scroll">
                    <button
                      data-target=".navbar-ex1-collapse"
                      data-toggle="collapse"
                      className="navbar-toggle"
                      type="button"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                    <ul className="list-unstyled nav1 cl-effect-10">
                      <li>
                        <a data-hover="TRANG CHỦ" href="/">
                          <span>TRANG CHỦ</span>
                        </a>
                      </li>
                      <li>
                        <a data-hover="GIỚI THIÊU" href="/intro">
                          <span>GIỚI THIÊU</span>
                        </a>
                      </li>
                      <li>
                        <a data-hover="LỊCH CHIẾU" href="/schedule">
                          <span>LỊCH CHIẾU</span>
                        </a>
                      </li>
                      {/*<li><a data-hover="LIÊN HOAN PHIM" href="/event"><span>LIÊN HOAN PHIM</span></a></li>*/}
                      <li>
                        <a data-hover="TIN TỨC" href="/news">
                          <span>TIN TỨC</span>
                        </a>
                      </li>
                      {/* <li><a data-hover="GIÁ VÉ" href="/price"><span>GIÁ VÉ</span></a></li>*/}
                      

                      {!id ?  (
                        <>
                          <li>
                            <a
                              data-hover="ĐĂNG NHẬP"
                              onClick={() => navigate("/login")}
                              className="active"
                            >
                              <span>ĐĂNG NHẬP</span>
                            </a>
                          </li>
                          <li>
                            <a
                              style={{ marginLeft: "5px" }}
                              data-hover="ĐĂNG KÍ"
                              onClick={() => navigate("/register")}
                              className="text-right active"
                            >
                              <span>ĐĂNG KÝ</span>
                            </a>
                          </li>
                        </>
                      ) :( id && ad ? (
                        /*thêm*/
                        <li>
                           <a
                            data-hover="ADMIN"
                            onClick={() => {
                              navigate("/admin");
                            }}
                          >
                            <span>ADMIN</span>
                          </a>
                          <a
                            data-hover="CÁ NHÂN"
                            onClick={() => {
                              navigate("/profile");
                            }}
                          >
                            <span>CÁ NHÂN</span>
                          </a>
                          <a
                            className=" text-right active"
                            data-hover="ĐĂNG XUẤT"
                            onClick={() => {
                              navigate("/login");
                              localStorage.removeItem("success");
                              localStorage.removeItem("email");
                            }}
                          >
                            <span>ĐĂNG XUẤT</span>
                          </a>
                        </li>
                      ):
                      (<li>
                       
                        <a
                          data-hover="CÁ NHÂN"
                          onClick={() => {
                            navigate("/profile");
                          }}
                        >
                          <span>CÁ NHÂN</span>
                        </a>
                        <a
                          className=" text-right active"
                          data-hover="ĐĂNG XUẤT"
                          onClick={() => {
                            navigate("/login");
                            localStorage.removeItem("success");
                            localStorage.removeItem("email");
                          }}
                        >
                          <span>ĐĂNG XUẤT</span>
                        </a>
                      </li>)
                      )
                      }
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;