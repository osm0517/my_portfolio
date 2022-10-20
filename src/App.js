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



  return (
    <BrowserRouter>
      <div className='body'>
        <Nav/>
        <div id='b'>
          <Routes>
            <Route path='/my_portfolio' element={<Home/>}></Route>
            <Route path='/list/*' element={<Document/>}></Route>
            <Route path='/write' element={<Write/>}></Route>
            <Route path='/list/:id' element={<Detail/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
};

export default App;