import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './component/Nav';
import Document from './component/Document';
import Write from './component/Write_page/Write';
import Home from './component/Home_page/Home'
import $ from 'jquery';
import { Router, Routes, Route, BrowserRouter} from 'react-router-dom';

let value = 0;

function App() {

  var typingIdx=0; 
  var typingTxt = "오성민의 프로젝트를 소개합니다"; 
  typingTxt=typingTxt.split("");
  function typing(){ 
    if(typingIdx<typingTxt.length){ 
      // 타이핑될 텍스트 길이만큼 반복 
      $(".typing").append(typingTxt[typingIdx]);
      // 한글자씩 이어준다. 
      typingIdx++; 
    } 
  }  

  useEffect(() => {
    setInterval(typing,300);
  }, []);

  const testAnime = (val) => {
    $(document).ready(() => {
      console.log(val);
      var clickPosition = $(`.${val}`).offset();
      console.log(clickPosition);
      $('html').animate({scrollTop : clickPosition.top}, 400);
    })
  }
  

  useEffect(() => {
    console.log("ready");
  },[])

  return (
    <BrowserRouter>
      <div className='body'>
        <Nav/>
        <div id='b'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/list/*' element={<Document/>}></Route>
            <Route path='/write' element={<Write/>}></Route>
          </Routes>
          
        </div>
        
        {/* <div className="App"> */}
        {/* <div className='nav-div'>
          <Nav testAnime = { testAnime } value = { value }/>
        </div> */}
          {/* <div >
            <p className='typing'></p>
          </div> */}
        {/* </div> */}
        {/* <div className='document-div'>
          <Document />
        </div> */}
        {/* <div className='blog' />
        <div className='github' /> */}
      </div>
    </BrowserRouter>
    
  );
};

export default App;