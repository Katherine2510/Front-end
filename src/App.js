
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

import HeaderFilm from './components/HeaderFim';
import FilmList from './components/FilmList';
import UpComingFilm from './components/UpComingFilm';
import Banner from './components/Banner';
import Comment from './components/Comment';
import Intro from './components/Intro';
import Event from './components/Event';
import News from './components/News';
import FoodBooking from './components/Booking/FoodBooking';
import ViewFilmDetail from './components/View/ViewFilmDetail'
import SeatBooking from './components/Booking/SeatBooking';
import Login from './components/User/Login';
import Register from './components/User/Register';
import TimeBooking from './components/Booking/TimeBooking';
import DateBooking from './components/Booking/DateBooking';
import ViewNameFilm from './components/View/ViewNameFilm';

import SeatBooking2 from './components/Booking/SeatBooking2';
import SeatBooking3 from './components/Booking/SeatBooking3';
import TimeBooking2 from './components/Booking/TimeBooking2';
import Bill from './components/Booking/Bill';
import Comments from './components/Comment/Comments';
import CheckAvailableseat from './components/Booking/CheckAvailableSeat';
import StarRatting from './components/Comment/StarRatting';
import CommentList from './components/Comment/CommentList';
import Schedule from './components/Schedule';
import ScheduleADay from './components/ScheduleADay';
const App = () => {
  return (
    
  <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeaderFilm/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={
            <div>
              <Register/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
      <Route
          path="/"
          element={
            <div>
              <FilmList/>
              
            </div>
          }
        >
        
        
          </Route>
            
            <Route path="phimdangchieu" element=
            {<div>
              <HeaderFilm/>
              <FilmList />
            </div>}>
            </Route>
            <Route path="phimsapchieu" element={<div>
              <HeaderFilm/>
              <UpComingFilm />
               </div>}>

            </Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner/>
              <Comment />
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/intro"
          element={
            <div>
              <Intro/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/news"
          element={
            <div>
              <News/>
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/thisfilm/:id"
          element={
            <div>
             
             <ViewFilmDetail/>
             <CommentList />
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
      <Route
          path="/seatbooking"
          element={
            <div>
             <SeatBooking/>
            
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/datebooking/:id"
          element={
            <div>
              
              <ViewNameFilm/>
              <DateBooking/>
             
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/schedule"
          element={
            <div>
             <Schedule />
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/schedule/:id"
          element={
            <div>
             <ScheduleADay />
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid"
                    element={
                        <div>   
                          
                          <ViewNameFilm/>  
                          <DateBooking/>
                        <TimeBooking2/>
                     
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/S"
                    element={
                        <div> 
                          <ViewNameFilm/>  
                          <DateBooking/>
                          <TimeBooking2/>
                          <SeatBooking/>
                       
                      
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/S/bill"
                    element={
                        <div> 
                          <ViewNameFilm />
                          <Bill/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/comment1"
                    element={
                        <div> 
                          <CommentList/>
                     
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/L/bill"
                    element={
                        <div> 
                          <ViewNameFilm />
                          <Bill/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/M/bill"
                    element={
                        <div> 
                          <ViewNameFilm />
                          <Bill/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                

                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/M"
                    element={
                        <div> 
                          <ViewNameFilm/>  
                          <DateBooking/>
                        <TimeBooking2/>
                        <SeatBooking2/>
                     
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/datebooking/:id/timebooking/:cid/L"
                    element={
                        <div> 
                          <ViewNameFilm/>  
                          <DateBooking/>
                        <TimeBooking2/>
                        <SeatBooking3/>
                      
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/comments"
                    element={
                        <div> 
                         <Comments/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
                    <Route
                    path="/ghedachon"
                    element={
                        <div> 
                         <CheckAvailableseat/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                
    
    
      <Footer />
      
      
    
  </>


  )
    
}


export default App;