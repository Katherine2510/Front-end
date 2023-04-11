import React, {useState}   from 'react';
import {useEffect} from 'react';
//import "../css/table.css"

import axios from 'axios';

export default function PersonList(props) {
    const [PersonList, setPersonList] = useState([])

    useEffect(() => {
      refreshPersonList();
    }, [])
  
    function refreshPersonList() {
      const ProjectAPI = axios.get('http://localhost:3001/api/movie')
        .then(res => setPersonList(res.data))
        .catch(err => console.log(err))
    }

  
    return (
        
        <div col-md-9 col-sm-8 col-xs-12>
            <h3>PRODCUT LINES LIST</h3>
    <table id= 'product-table' >
    <thead >
        <tr>
            <th scope='col'>Tên phim</th>
            <th scope='col'>Tóm tắt</th>
            <th scope='col'>Thời lượng</th>
            <th scope='col'>Đạo diễn</th>
            <th scope='col'>Diễn viên</th>    
            <th scope='col'>Chỉnh sửa</th>

       
        </tr>
    </thead>
    
    <tbody >
    {
      PersonList.allMovie?.map((e, i) =>
        <tr key={i}>
        <td>{e.title}</td>
          <td>{e.description}</td>
          <td>{e.durationInMins}</td>
          <td>{e.director}</td>
          <td>{e.actor}</td>

          
        </tr>  
      )
    }
    </tbody> 
    </table>
    </div>
    )
  }