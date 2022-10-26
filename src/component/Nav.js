import React, { useState } from "react";
import "./Nav.css"
import { BrowserRouter, Link } from 'react-router-dom';
import $ from 'jquery';

function Nav({testAnime, value}){
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);
    
    const basicPath = `/my_portfolio`;   

    const navClickEvent = () => {
        setIsOpen(isOpen => !isOpen)
    }

    const titleClickEvent = (childId, triangleId) => {
        setIsClick(isClick => !isClick);
        $(`#${childId}`).slideToggle();
        $(`#${triangleId}`).slideToggle();
        
    }

    //클릭 이벤트를 정리해놓은 곳
    $('.up').on("click", () => {
        $('html').animate({scrollTop : 0}, 400);
    });

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
        }
    ]


    const sideRender = testLists.map(list => {
        return(
            <div className="render-div">
                <div className="side-title-div">
                    {/* 토글 버튼 -> 타이틀 */}
                    <div id='side-title' ><a href={`${basicPath}/list/${list.listName.toLowerCase()}`}>{list.listName}</a></div>
                </div>
                {/* 본문 */}
                <div className="side-text-div" id={list.listText[0]}>
                    <div>
                        {list.listText.map(text => {
                            return(
                                <div className="text-div"><a href={`${basicPath}/list/${list.listName.toLowerCase()}/${text}`}>{text}</a></div>
                            ) 
                        })}
                    </div>
                </div>
            </div>
        )
    })
 

    //렌더링 하는 곳
    return(
        <>
            <div id='nav'>
                <div>
                    <Link to={`${basicPath}`}>
                        <h1>SUNGMIN</h1>
                    </Link>
                </div>
                <div id='nav-btn' onClick={navClickEvent}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className={`side-div ${isOpen? 'side-div-open' : 'side-div-close'}`}>
                {sideRender}
                <Link to={`${basicPath}/write`}>
                    <div><p>create Project</p></div>
                </Link>
            </div>
        </>
    );
}

export default Nav;