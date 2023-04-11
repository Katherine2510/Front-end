import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'




const Comment =() => {
    return (
        <section className="blog-block-slider">
            <h3 style={{textAlign: 'center',}} >BÌNH LUẬN</h3>
    
  <div className="blog-block-slider-fix-image">
    <div id="myCarousel2" className="carousel slide" data-ride="carousel">
      <div className="container">
        {/* Wrapper for slides */}
        <ol className="carousel-indicators">
                <li data-target="#myCarousel2" data-slide-to={0} className="active" />
                <li data-target="#myCarousel2" data-slide-to={1} />
                <li data-target="#myCarousel2 " data-slide-to={2} />
            </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="blog-box">
              <p>
                Bộ phim hay, diễn biến tốt, nên xem
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                 
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Nguyễn Văn A - 17 tuổi</h3>
                  <h5 className="blog-rev">About: Thor tình yêu và sấm sét </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="blog-box">
              <p>
                Cháu rất thích mấy bạn Minions ạ.
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                 
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Lê Thị B - 7 tuổi</h3>
                  <h5 className="blog-rev">About Minions Sự trỗi dậy của Gru (lồng tiếng)</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="blog-box">
              <p>
                Phim rất hay, nên xem dành cho các bạn thích xem thể loại này
              </p>
            </div>
            <div className="blog-view-box">
              <div className="media">
                <div className="media-left">
                  
                </div>
                <div className="media-body">
                  <h3 className="media-heading blog-title">Đoàn Văn C - 25 tuổi</h3>
                  <h5 className="blog-rev">About Hung thần trắng</h5>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="clearfix" />
</section>

       
    )
}
export default Comment