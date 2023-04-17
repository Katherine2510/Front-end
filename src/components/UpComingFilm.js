import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import film1 from '../images/u_c_film2.png'
import film2 from '../images/u_c_film1.png'
import film3 from '../images/u_c_film3.png'
import film4 from '../images/u_c_film4.png'
import {Link} from "react-router-dom"



const UpComingFilm =() => {
    return (
        <>
        <section className="gallery-block gallery-front">
          <div className="container">
            <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
              <ul className="list-unstyled nav1 cl-effect-10">
              <li>
              <Link data-hover="PHIM ĐANG CHIẾU" to="/phimdangchieu" ><span>PHIM ĐANG CHIẾU</span></Link>
                </li>
              
                <li>
                <Link data-hover="PHIM SẮP CHIẾU" to="/phimsapchieu" className="active" ><span>PHIM SẮP CHIẾU</span></Link>
                </li>
            
                
                
              </ul>
            </div>
            <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="gallery-image" style={{width: '100%', height: '100%'}}>
                  <img className="img-responsive" src={film2} style={{width: '100%', height: '100%'} } />
                  <div className="overlay">
                    <a
                      className="info pop example-image-link img-responsive"
                      href={film1}
                      data-lightbox="example-1"
                    >
                 
                      
                    </a>
                    <i className="button_book_tickets" aria-hidden="true">ĐẶT VÉ</i>
                    <p>
                      <a href="">CHUYỆN XÓM TUI: CON NHÓT MÓT CHỒNG</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                
                <div className="gallery-image" style={{width: '100%', height: '100%'}}>
                  <img className="img-responsive" src={film1}style={{width: '100%', height: '100%'} }/>
                  <div className="overlay">
                    <a
                      className="info pop example-image-link img-responsive"
                      href={film2}
                      data-lightbox="example-1"
                    >
                 
                      
                    </a>
                    <i className="button_book_tickets" aria-hidden="true">ĐẶT VÉ</i>
                    <p>
                      <a href="">NGƯỜI NHỆN: DU HÀNH VŨ TRỤ NHỆN</a>
                    </p>
                  </div>
                </div>
              </div>
             
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="gallery-image" style={{width: '100%', height: '100%'}}>
                  <img className="img-responsive" src={film3} style={{width: '100%', height: '100%'} }/>
                  <div className="overlay">
                    <a
                      className="info pop example-image-link img-responsive"
                      href={film3}
                      data-lightbox="example-1"
                    >
                 
                     
                    </a>
                    <i className="button_book_tickets" aria-hidden="true">ĐẶT VÉ</i>
                    <p>
                      <a href="">QUỲNH HOA NHẤT DẠ</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="gallery-image" style={{width: '100%', height: '100%'}}>
                  <img className="img-responsive" src={film4} style={{width: '100%', height: '100%'}}/>
                  <div className="overlay">
                    <a
                      className="info pop example-image-link img-responsive"
                      href={film4}
                      data-lightbox="example-1"
                    >
                 
                     
                    </a>
                    <i className="button_book_tickets" aria-hidden="true">ĐẶT VÉ</i>
                    <p>
                      <a href="">MÓNG VUỐT</a>
                    </p>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>
      </>
      
    )
}
export default UpComingFilm