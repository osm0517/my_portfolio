import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './component/Nav';
import Document from './component/Document';
import Write from './component/Write_page/Write';
import Home from './component/Home_page/Home'
import Detail from './component/Document_page/Detail';
import $ from 'jquery';
import { Router, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  const [email, setEmail] = useState("");
  const serverTest = async () => {
    fetch(`http://localhost:8080/user/test`, {
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body : 
        "email"
      
    })
    .then(v =>v.json())
    .then(v=> console.log(v))
    // // .then(v => alert(v))
    // .catch(err => alert(`error가 발생함 =>` + err));
  }

  const basicPath = `/my_portfolio`;

  return (
    <BrowserRouter>
      <div className='body'>
        <Nav/>
        <div id='b'>
          <Routes>
            <Route path={`${basicPath}`} element={<Home/>}></Route>
            <Route path={`${basicPath}/list/:id/*`} element={<Detail/>}></Route>
            <Route path={`${basicPath}/list/*`} element={<Document/>}></Route>
            <Route path={`${basicPath}/write`} element={<Write/>}></Route>
          </Routes>
          {/* <input placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
          <button onClick={() => {
            serverTest()
          }}> 전송 </button> */}
        </div>
      </div>
    </BrowserRouter>
    
  );
};

export default App;