import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import "../../css/table.css";
import "../../css/style.css";
import "../../css/responsive.css";
import "../../css/lightbox.min.css";
import "../../css/bootstrap.min.css";

import film3 from "../../images/KHÓA CHẶT CỬA NÀO SUZUME.png";

import axios from "axios";

export default function ViewNameFilm(props) {
  const [ViewNameFilm, setViewNameFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    refreshViewNameFilm();
  }, [id]);

  function refreshViewNameFilm() {
    const ProjectAPI = axios
      .get(`http://localhost:3001/api/movie/${id}`)
      .then((res) => setViewNameFilm(res.data))
      .catch((err) => console.log(err));
  }

  return <div>{ViewNameFilm.movie?.title}</div>;
}
