import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'

const Footer =() => {
    return (
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 width-set-50">
              <div className="footer-details">
                <h4>Liên hệ</h4>
                <ul className="list-unstyled footer-contact-list">
                  <li>
                    <i className="fa fa-map-marker fa-lg" />
                    <p>87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội</p>
                  </li>
                  <li>
                    <i className="fa fa-phone fa-lg" />
                    <p>
                      <a href="tel: 024.35141791"> 024.35141791</a>
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o fa-lg" />
                    <p>
                      <a href="mailto:ncc@gmail.com">ncc.uet@gmail.com</a>
                    </p>
                  </li>
                </ul>
                
               
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 width-50 width-set-50">
              <div className="footer-details">
                <h4>Khám phá</h4>
                <ul className="list-unstyled footer-links">
                  
                    <li><a href="/" ><span>TRANG CHỦ</span></a></li>
                        <li><a href="/intro"><span>GIỚI THIÊU</span></a></li>
                        <li><a href="/schedule"><span>LỊCH CHIẾU</span></a></li>
                        <li><a  href="/event"><span>LIÊN HOAN PHIM</span></a></li>
                        <li><a  href="/news"><span>TIN TỨC</span></a></li>
                        <li><a href="/price"><span>GIÁ VÉ</span></a></li>
                        <li><a href="/member"><span>THÀNH VIÊN</span></a></li>
              
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="footer-details">
                <h4>Thông tin</h4>
                <ul className="list-unstyled footer-links">
                  
                    <li><p><span>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</span></p></li>
                        <li><p ><span>Bản quyền thuộc Trung tâm Chiếu phim Quốc gia.</span></p></li>
                        <li><p><span>Giấy phép số: 224/GP- TTĐT ngày 31/8/2010</span></p></li>
                        <li><p><span>Chịu trách nhiệm: Vũ Đức Tùng – Quyền Giám đốc.</span></p></li>
                  
                </ul>
                <div className="row">
                  <div className="instagram-images">
                    <div id="instafeed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
      
    )
}
export default Footer