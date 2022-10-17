import React, { useState } from "react";
import "./Nav.css"
import { BrowserRouter, Link } from 'react-router-dom';
import $ from 'jquery';

function Nav({testAnime, value}){
    const testLists = [
        {
            listName : "Frontend",
            listText : ["react"],
            titlePath : "/Frontend",
            listPath : ["/react"]
        },
        {
            listName : "Backend",
            listText : ["express", "springboot"],
            titlePath : "/Backend",
            listPath : ["/express", "/springboot"]
        },
        {
            listName : "GitHub",
            listText : [""],
            titlePath : ["https://github.com/osm0517"],
            listPath : [""]
        }
    ]

    const sideRender = testLists.map(list => {
        return(
            <div >
                <div id="side-title-div">
                    {/* 토글 버튼 -> 타이틀 */}
                    <div className="triangle"/>
                    <Link to={`/list/${list.listName.toLowerCase()}`}>
                        <div id='side-title'><p>{list.listName}</p></div>
                    </Link>
                </div>
                {/* 본문 */}
                <div id="side-text-div">
                    <div>
                        {list.listText.map(text => {
                            return(
                                <Link to={`/list/${list.listName.toLowerCase()}/${text}`}>
                                    <div id="text-div"><p>{text}</p></div>
                                </Link>
                            ) 
                        })}
                    </div>
                </div>
                
            </div>
        )
    })
    
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
        const sideState = $('#side-div').css('display');
        if(sideState === "none") return $('#side-div').css('display', 'flex');
        $('#side-div').css('display', 'none');
    }

    //렌더링 하는 곳
    return(
        // <BrowserRouter>
        <>
            <div id='nav'>
                <div>
                    <Link to='/'>
                        <h1>SUNGMIN</h1>
                    </Link>
                </div>
                <div id='nav-btn' onClick={navClickEvent}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div id="side-div">
                {sideRender}
                <Link to='/write'>
                    <div><p>create Project</p></div>
                </Link>
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
        </>
    );
}

export default Nav;