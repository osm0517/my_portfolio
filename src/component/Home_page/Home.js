import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    const typingTxt = "오성민의 프로젝트를 소개합니다";

    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        setBlogTitle((prevTitleValue) => {
          let result = prevTitleValue ? prevTitleValue + typingTxt[count] : typingTxt[0];
          setCount(count + 1);
          return result;
        });
      }, 200);
      if(count >= typingTxt.length) clearInterval(typingInterval);
      return () => {
        clearInterval(typingInterval);
      };
    });

    return (
        <>
            <div className='blog-title-div'><p> {blogTitle} </p></div>
            <Link to='/list'>
                <div className="list-btn"><p>포트폴리오 보러 가기</p></div>
            </Link>
        </>
    )
}

export default Home;