
import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'
import { Route, Router } from 'react-router'
import { Routes } from 'react-router'
import CommentItem from './CommentItem'
import './style.css'
import StarRatting from './StarRatting'
import axios from 'axios'
import CommentList from './CommentList'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    arrayList: [],
    count: 0,
  }
 

  inputValue = e => {
    this.setState({name: e.target.value})
  }

  textValue = e => {
    this.setState({comment: e.target.value})
  }

  addComment = e => {
    e.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const object = {
      id: uuidv4(),
      firstNames: firstName,
      names: name,
      comments: comment,
      dates: date,
      newClass: index,
      isFavorite: false,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, object],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
    const binhluan = {
      comment: this.state.comment,
      ratting_score: localStorage.getItem('star'),
      movie_id: `${localStorage.getItem('id_film')}`

    };
    var myHeaders = new Headers();
    
    
    myHeaders.append( "Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(  'Authorization',`Bearer ${localStorage.getItem('token')}` )
    var urlencoded = new URLSearchParams();
    urlencoded.append("movie", `${localStorage.getItem('id_film')}`);
    urlencoded.append("comment", this.state.comment);
    urlencoded.append ("rating_score", String(localStorage.getItem('star')))

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/rating", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.success);
      })
      .then((result) => {
        console.log(result);
        if (result.success == true) {
          alert("Thanh cong");
        } else {
          alert("Không thành công, hãy đăng nhập");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("Không thành công, hãy đăng nhập");
      });
   
  }

  toggleFavorite = id => {
    this.setState(prevState => ({
      arrayList: prevState.arrayList.map(eachData => {
        if (eachData.id === id) {
          return {...eachData, isFavorite: !eachData.isFavorite}
        }
        return eachData
      }),
    }))
  }

  deleteComment = id => {
    const {arrayList} = this.state
    const filteredList = arrayList.filter(eachValue => eachValue.id !== id)
    this.setState(prevState => ({
      arrayList: filteredList,
      count: prevState.count - 1,
    }))
  }
  commentList = () => {
    axios.get(`localhost:3001/api/rating/getRatingByMovieID/64172200687bb7943c62d197`)
    .then (
        
        )
  }
  

  render() {
    const {name, comment, arrayList, count} = this.state
    return (
      <div className="container" >
         
        <h3 className="main-heading">Bình luận</h3><div className="inner-holder">
        
          <div className="element-holder">
          
          <p className="para1"></p> 
            
            <form className="element-holder" onSubmit={this.addComment}>
             
              <input
                type="text"
                className="name-field"
                placeholder="Tên của bạn"
                onChange={this.inputValue}
                value={name}
              />
             
              <textarea
                className="comment-field"
                placeholder="Bình luận"
                onChange={this.textValue}
                value={comment}
              />
               <StarRatting/>
               <br/>
              <button type="submit" className="btn">
                BÌNH LUẬN
              </button>
            </form>
          </div>
          
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="image1"
            alt="comments"
          />
        </div>
        <hr />
        <CommentList />
      </div>
    )
  }
}
export default Comments

