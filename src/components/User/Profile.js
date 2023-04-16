import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../css/table.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/lightbox.min.css";
import "../../css/bootstrap.min.css";
import UpdateUser from "./UpdateUser";

import axios from "axios";


export default function Profile(props) {
  const [Profile, setProfile] = useState([]);
  const { token } = useParams();

  useEffect(() => {
    refreshProfile();
  }, [token]);

  function refreshProfile() {
    const ProjectAPI = axios
      .get(`http://localhost:3001/api/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {/*<div className="image-head-wrapper"   style={{ backgroundImage: "url(" + banner0 + ")" }} >
            <div className="inner-wrapper">
             </div>
    </div>*/}
      <div
        className="col-md-10
                 col-sm-12 col-xs-12 remove-padd"
      ><div style={{ marginLeft: "10%", fontSize: "100" }}>
          <div style={{ fontSize: 30 }}> THÔNG TIN CÁ NHÂN </div>

        </div>

      </div>

      <div className="resort-overview-block">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-sm-12 col-xs-10 ">
              <div className="side-A">
                <div col-md-9 col-sm-8 col-xs-12 className="film-detail">
                  <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                    <ul className="list-unstyled nav1 cl-effect-10">
                      <li>
                        <a href="/profile/userbooking">
                          <span>Vé đã đặt</span>
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div >
                    <div style={{ fontSize: 20 }}>First Name: {Profile.user?.firstName}</div>
                    <div style={{ fontSize: 20 }}>Last Name: {Profile.user?.lastName}</div>
                    <div style={{ fontSize: 20 }}>Email: {Profile.user?.email}</div>
                    <div style={{ fontSize: 20}}>Password: {Profile.user?.password}</div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="modalUpdateUserForm"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content single-bottom comment-form">
                    <UpdateUser />
                  </div>
                </div>
              </div>
              <div>
                <Link to="/profile/updateuser">
                  <button class="button-39" role="button">
                    Cập nhật thông tin
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/profile/updatepassword">
                  <button class="button-39" role="button">
                    Thay đổi mật khẩu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
}
