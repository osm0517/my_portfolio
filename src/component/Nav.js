import React, { useState } from "react";
import "./Nav.css"
import { BrowserRouter, Link } from 'react-router-dom';
import $ from 'jquery';

function Nav({testAnime, value}){
    
    //스크롤을 함으로써 생기는 액션을 정의한 곳
    // const [opacityValue, setOpacityValue] = useState(value);
    // $(window).scroll(() => {
    //     setOpacityValue(($(document).scrollTop())/600);
    // })
    // $('.nav-div').css("opacity", 1-opacityValue);
    // if($('.nav-div').css("opacity") == 0){
    //     $('.menu-bar').css("display", "block");
    //     $('.up').css("opacity", "1");
    //     $('.nav').css("position", "fixed");
    // }else{
    //     $('.menu-bar').css("display", "none");
    //     $('.up').css("opacity", "0");
    //     $('.nav').css("position", "static");
    // }

    //클릭 이벤트를 정리해놓은 곳
    $('.up').on("click", () => {
        $('html').animate({scrollTop : 0}, 400);
    });

    const navDivToggle = () => {
        let currentWidth = $(window).width();
        if(currentWidth <= 500){
            //스마트폰 환경에서 볼 때를 가정
            $('.nav-div').css('display', 'block');
            // $('.menu-div').css('position', 'absolute');
            
        }
    };

    const testClickEvent = (tagName) => {
        let clickTagId = tagName.target.id
        testAnime(clickTagId);
    }

    const navClickEvent = () => {
        const sideState = $('#d').css('display');
        if(sideState === "none") return $('#d').css('display', 'block');
        $('#d').css('display', 'none');
    }

    //렌더링 하는 곳
    return(
        <BrowserRouter>
            <div id='nav'>
                <div>
                    <h1><a id='title' href="/">SUNGMIN</a></h1>
                </div>
                <div id='nav-btn' onClick={navClickEvent}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div id="d">

            </div>
            {/* <div className="menu-div" onClick={navDivToggle}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div> */}
            {/* <div className="nav-div" >
                <p onClick={ testClickEvent } id="blog"> 개인 블로그 제작 </p>
                <a href="https://github.com/osm0517" id="gitHub"> <p>Github</p> </a>
            </div> */}
            {/* <img className = "up" src={process.env.PUBLIC_URL + `/img/up.png`}/> */}
        </BrowserRouter>
    );
}

export default Nav;