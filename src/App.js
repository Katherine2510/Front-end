import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import NowShowing from "./components/Admin/NowShowing";
import Comingsoon from "./components/Admin/Comingsoon";
import Show from "./components/Admin/Show";

import HeaderFilm from "./components/HeaderFim";
import FilmList from "./components/FilmList";
import UpComingFilm from "./components/UpComingFilm";
import Banner from "./components/Banner";
import Comment from "./components/Comment";
import Intro from "./components/Intro";
import Event from "./components/Event";
import News from "./components/News";

import ViewFilmDetail from "./components/View/ViewFilmDetail";
import SeatBooking from "./components/Booking/SeatBooking";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Profile from "./components/User/Profile";
import UpdateUser from "./components/User/UpdateUser";
import UpdatePassword from "./components/User/UpdatePassword";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeaderFilm />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/register"
          element={
            <div>
              <Register />
            </div>
          }
        ></Route>
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
          path="/"
          element={
            <div>
              <FilmList />
            </div>
          }
        ></Route>

        <Route
          path="phimdangchieu"
          element={
            <div>
              <HeaderFilm />
              <FilmList />
            </div>
          }
        ></Route>
        <Route
          path="phimsapchieu"
          element={
            <div>
              <HeaderFilm />
              <UpComingFilm />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <Comment />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/intro"
          element={
            <div>
              <Intro />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/news"
          element={
            <div>
              <News />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/thisfilm/:id"
          element={
            <div>
              <ViewFilmDetail />
            </div>
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/seatbooking"
          element={
            <div>
              <SeatBooking />
            </div>
          }
        ></Route>
      </Routes>

      <Footer />
    </>
  );
};


export default App;
