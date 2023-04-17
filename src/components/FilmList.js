import React, {useState}   from 'react';
import {useEffect} from 'react';
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'


import { Link } from "react-router-dom";
import axios from 'axios';
import ViewFilmDetail from '../components/View/ViewFilmDetail'
import Popup from "reactjs-popup";
import ScheduleAFilm from './Booking/ScheduleAFilm';


export default function FilmList(){
  
        const [FilmList, setFilmList] = useState([])

          useEffect(() => {
            refreshFilmList();
          }, [])
        
          function refreshFilmList() {
            const ProjectAPI = axios.get('http://localhost:3001/api/movie')
              .then(res => setFilmList(res.data))
              .catch(err => console.log(err))
              .then((result) => {
                console.log(result);
                //localStorage.setItem("status", result.status);
                //thêm token vào local storage
                // các màn khác phải xét nếu chưa có token thì ra màn login
                // chị nghĩ các em làm bấm vào logout nó ra màn login là đc, dành thời gian sửa cái khác
                // alert("Thanh cong"); //ko cần dòng này
                
              
                
              }
              )
          }
          
       
          
         
    return (
        <>
        <section className="gallery-block gallery-front">
          <div className="container">
          <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
              <ul className="list-unstyled nav1 cl-effect-10">
              <li>
              <Link data-hover="PHIM ĐANG CHIẾU" to="/phimdangchieu" className="active" ><span>PHIM ĐANG CHIẾU</span></Link>
                </li>
              
                <li>
                <Link data-hover="PHIM SẮP CHIẾU" to="/phimsapchieu" ><span>PHIM SẮP CHIẾU</span></Link>
                </li>
                 </ul>
            </div>
          <div className='grid-container'>
            {
              
              FilmList.allMovie?.map((e, i) =>
             
              <div className=" grid-item" key={i} style={{ height: '100%' }}>
              
                <div className="gallery-image" >
                  <img className="img-responsive" src={`${e.image_url}`} style={{objectFit: 'contain'}} />
                  <div className="overlay">
                      <p> <h4 style={{ color: 'white' }}> 
                    {e.title} 
                     </h4>
                     </p>
                     
                    <Link className="button_book_tickets" aria-hidden="true" to={`/thisfilm/${e._id}`} style={{ color:"white" }}> 
                    Đặt vé
                     </Link>
                 

              </div>

              </div>
              </div>
             
              
              )
              
            }
          </div>
           
            </div>
            </section>
      </>
      
    )
}
