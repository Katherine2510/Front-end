import React, { useRef } from "react";
import '../../css/style.css'
import '../../css/responsive.css'
import '../../css/lightbox.min.css'
import '../../css/bootstrap.min.css'
import banner0 from '../../images/banner.png'






const ThisFilm=() => {

    
    return (
        <div>
            
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner0 + ")" }}
            >
                <div className="inner-wrapper">
                

                </div>
            </section>
            <section style={{ marginLeft: '8%' }}>
                <h1> THÔNG TIN CHI TIẾT </h1>
                <h4> Tên phim</h4>
            </section>
            <section className="resort-overview-block">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 remove-padd-right">
                <div className="side-A">
                    <div className="product-thumb">
                    <div className="image">
                        <a href="">
                        <img
                            alt="image"
                            className="img-responsive"
                            
                        />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="side-B">
                    <div className=""  style={{ marginLeft: '40px' }}>
                    <h3>
                        <a href="">TÊN PHIM</a>
                    </h3>
                        <p> Loại phim: </p>
                        <p> Thời lượng: </p>
                        <p> Diễn viên: </p>
                        <p> Đạo diễn: </p>
                        <p> Xuất xứ: </p>
                        <p> Khởi chiếu: </p>
                        <p> Khuyễn cáo:</p>
                    <div className="links">
                        <a href="">ĐẶT VÉ</a>
                        <a href=""style={{ marginLeft: '10px' }}>XEM TRAILER</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="clearfix" />
            </div>
    </div>
  </section>
           

        </div>
    )
}

export default ThisFilm
