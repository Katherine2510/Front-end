import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import logo_home from '../images/logo_home.png'


const Header =() => {
  const navigate = useNavigate();
    return (
        <div>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                 <div class="info-block">Hotline: 024.35141791</div>
                 
              </div>
              <div className="col-md-4">
              <div className="social-grid text-right">
                  <ul className="list-unstyled ">
                    <li><a href="https://www.facebook.com/chieuphimquocgiavn/"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://www.twitter.com"><i className="fa fa-twitter" /></a></li>
                    <li><a href="https://www.instagram.com"><i className="fa fa-instagram" /></a></li>
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
                    <img
                    alt="image"
                    
                    src={logo_home}
                  />
                    </a>
                  </div>                       
                </div>
                <div className="col-md-10
                 col-sm-12 col-xs-12 remove-padd">
                  <nav className="navbar navbar-default">
                    <div className="navbar-header page-scroll">
                      <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                      <ul className="list-unstyled nav1 cl-effect-10">
                        <li><a data-hover="TRANG CHỦ" href="/" ><span>TRANG CHỦ</span></a></li>
                        <li><a data-hover="GIỚI THIÊU" href="/intro"><span>GIỚI THIÊU</span></a></li>
                        <li><a data-hover="LỊCH CHIẾU" href="/schedule"><span>LỊCH CHIẾU</span></a></li>
                        {/*<li><a data-hover="LIÊN HOAN PHIM" href="/event"><span>LIÊN HOAN PHIM</span></a></li>*/}
                        <li><a data-hover="TIN TỨC" href="/news"><span>TIN TỨC</span></a></li>
                         {/* <li><a data-hover="GIÁ VÉ" href="/price"><span>GIÁ VÉ</span></a></li>*/}
                        <li><a data-hover="THÀNH VIÊN" href="/member"><span>THÀNH VIÊN</span></a></li>
                        <li><a  data-hover="LOGIN" onClick={() =>navigate('/login')} className="text-center active" style={{marginLeft: '40px',marginRight: '10px'}}><span style={{  width: '100px' }}>LOGIN</span></a></li>
                
                        <li><a  data-hover="REGISTER" onClick={() =>navigate('/register')} className="text-right active"><span>REGISTER</span></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                
              
              </div>
            </div>
          </div>
        </header>
      </div>

    )
}
export default Header

