
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
import Profile from './components/User/Profile';
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
import ScheduleAFilm from './components/Booking/ScheduleAFilm';
import Admin from './components/Admin/Admin';
import Seats from './components/SeatBooking/Seats';
import SuccessBooking from './components/Booking/SuccessBooking';
import NowShowing from "./components/Admin/NowShowing";
import Comingsoon from "./components/Admin/Comingsoon";
import Show from "./components/Admin/Show";

import UpdateUser from "./components/User/UpdateUser";
import UpdatePassword from "./components/User/UpdatePassword";
import UserBooking from "./components/User/UserBooking";
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
          path="/booking/:id"
          element={
            <div>
              <Seats/>
           
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
        path='/success'
        element={
          <div>
            <SuccessBooking/>
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
            <ScheduleAFilm />
            <CommentList />
           
            </div>
          }
        >
          </Route>
       
      </Routes>
      <Routes>
        <Route
          path="/comment/:id"
          element={
            <div>
             
              <Comments/>  </div>
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
                    path="/ghedachon"
                    element={
                        <div> 
                         <CheckAvailableseat/>
                        </div>
                    }
                    >
                    </Route>
                
                </Routes>
                <Routes>
        <Route
          path="/profile"
          element={
            <div>
              <Profile />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin"
          element={
            <div>
              <Admin />
              <Show/>
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/admin/nowshowing"
          element={
            <div>
              <Admin />
              <NowShowing />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/admin/comingsoon"
          element={
            <div>
              <Admin />
              <Comingsoon />
            </div>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route
          path="/admin/show"
          element={
            <div>
              <Admin />
              <Show />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/profile/updateuser"
          element={
            <div>
              <UpdateUser />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/profile/updatepassword"
          element={
            <div>
              <UpdatePassword />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/profile/userbooking"
          element={
            <div>
              <UserBooking />
            </div>
          }
        ></Route>
      </Routes>

                
    
    
      <Footer />
      
      
    
  </>


  )
    
}


export default App;