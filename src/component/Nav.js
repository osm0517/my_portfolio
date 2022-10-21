import React, { useState } from "react";
import "./Nav.css"
import { BrowserRouter, Link } from 'react-router-dom';
import $ from 'jquery';

function Nav({testAnime, value}){
    const [isOpen, setIsOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

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
                    <div onClick={() => {
                    titleClickEvent(list.listText[0], list.listName);}} 
                    id={list.listName}className={`triangle ${isClick? 'click-triangle' : 'non-click-triangle'}`}/>
                    <div id='side-title'><a href={`/list/${list.listName.toLowerCase()}`}>{list.listName}</a></div>
                </div>
                {/* 본문 */}
                <div className="side-text-div" id={list.listText[0]}>
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
    

    //렌더링 하는 곳
    return(
        <>
            <div id='nav'>
                <div>
                    <Link to='/my_portfolio'>
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
                <div>
                    <div id="side-title-div" onClick={() => {
                        titleClickEvent('1');
                    }}>
                        <div className={`triangle ${isClick? 'click-triangle' : 'non-click-triangle'}`}/>
                        <div id='side-title'><p>dfas</p></div>
                    </div>
                    <div className="side-text-div" id="1">
                        <div>
                            <div id="text-div"><a href="https://github.com/osm0517">https://github.com/osm0517</a></div>
                        </div>
                    </div>
                </div>
                <Link to='/write'>
                    <div><p>create Project</p></div>
                </Link>
            </div>
        </>
    );
}

export default Nav;