import React from "react";
import '../css/style.css'
import '../css/responsive.css'
import '../css/lightbox.min.css'
import '../css/bootstrap.min.css'
import banner1 from "../images/banner1.png"
import banner2 from "../images/banner2.png"
import banner3 from "../images/banner3.png"
import left from "../images/icons/left-arrow.png"
import right from "../images/icons/right-arrow.png"
import Header from "./Header";
import { Route, Routes } from "react-router";
import FilmList from "./FilmList";



const HeaderFilm =() => {
    return (
        <div id="demo" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
                <li data-target="#demo " data-slide-to={2} />
            </ol>
            
            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active"style={{width: '100%', height: '500px'}} alt="First slide">
                <img src={banner1} alt="Los Angeles" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className="carousel-item"  style={{width: '100%', height: '500px'}} alt="Second slide">
                <img src={banner2} alt="Chicago" style={{width: '100%', height: '100%'}} />
                </div>
                <div className="carousel-item" style={{width: '100%', height: '500px'}} alt="Third slide" >
                <img src={banner3} alt="New York" style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev" >
                
                <span className="carousel-control-prev-icon" onmouseover="this.src ={left}" onmouseout="this.src ={left}" alt="left" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" onmouseover="this.src = {right}" onmouseout="this.src = {right}" alt="left" />
            </a>
                         
            </div>
            

    )
}
export default HeaderFilm