import React, {useState}from "react";
import { Link } from "react-router-dom";
import "./Document.css";


function Document() {

    const basicPath = `/my_portfolio`

    //서버 주소
    const serverPath = "http://localhost:8080/api";

    //비동기로 서버로부터 데이터를 setBoard를 통해서 받기
    const [board, setBoard] = useState([]);
    //서버 구축 전까지 테스트를 위한 데이터
    const testBoardData = [
        {
            boardTitle : "testTitle1",
            boardText : "testTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestText",
            boardId : 1
        },
        {
            boardTitle : "testTitle2",
            boardText : "testTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestText",
            boardId : 2
        }
    ]
    //받아온 데이터를 그려줌
    const boardRender = testBoardData.map(data => {
        return (
            //데이터 베이스 구축하면 받은 데이터에서
            // to={`/list/${data.part}/${data.stack}/${data.id}`}
            
            <Link to={`${basicPath}/list/`+data.boardId}>
                <div id="document-div">
                    <div id="document-image">
                        <div className="image1"></div>
                        <div className="image2"></div>
                        <div className="image3"></div>
                        <div className="image4"></div>
                    </div>
                    <div id="document-title"><p>{data.boardTitle}</p></div>
                    <div id="document-text"><p>{data.boardText}</p></div>
                </div>
            </Link>
            
        )
    })

    //폴더까지는 경로를 설정했고 이름만 설정해주면 됨
    const publicPath = process.env.PUBLIC_URL

    return (
        <>
            {boardRender}
        </>
    );
}

export default Document;