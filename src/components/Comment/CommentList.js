
import { Link, useParams } from "react-router-dom";
import './style.css'
import axios from 'axios';
import Popup from "reactjs-popup";
import { useEffect } from "react";
import { useState } from "react";
import CommentItem from "./CommentItem";

export default function CommentList(){
  
        const [CommentList, setCommentList] = useState([])
        const {id} = useParams();
          useEffect(() => {
            refreshCommentList();
          }, [id])
       
          function refreshCommentList() {
            const ProjectAPI = axios.get(`http://localhost:3001/api/rating/getRatingByMovieID/${id}`)
              .then(res => setCommentList(res.data)
              .catch(err => console.log(err))
              .then((result) => {
                console.log(result);
                if (result.success == true) {
                  alert("Thanh cong");
                } else {
                  alert("khong thanh cong");
                }
              })
              )
          }
          
       
          
         
    return (
       <>
       <h1 style={{ fontSize: '20px', marginTop:'50px' }}>BÌNH LUẬN VỀ PHIM</h1>
       <p className="comments-count">
          
   
          {CommentList.listRating?.map((e, i) => (
            
           <div className="container" >
           <h1 className='username' style={{ fontSize:  '15px',float:'left' }}>Người dùng ẩn danh {i + 1} </h1>
           <p style={{ float: 'right',fontSize: '15px' }}>(Đã đánh giá {e.rating_score} sao)</p>
           <p className='comment-line comment-item'style={{ fontSize: '15px', float:'left' }}>{e.comment}</p> </div>

          
            
          ))
            }
          
        </p>
       </>
            
      
    )
}
