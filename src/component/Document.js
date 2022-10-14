import React, {useState}from "react";
import "./Document.css";


function Document() {

    //서버 주소
    const serverPath = "http://localhost:8080/api";

    //비동기로 서버로부터 데이터를 setBoard를 통해서 받기
    const [board, setBoard] = useState([]);
    //서버 구축 전까지 테스트를 위한 데이터
    const testBoardData = [
        {
            boardTitle : "testTitle1",
            boardText : "testTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestText"
        },
        {
            boardTitle : "testTitle2",
            boardText : "testTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestText"
        },
        {
            boardTitle : "testTitle3",
            boardText : "testTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestTexttestText"
        }
    ]
    //받아온 데이터를 그려줌
    const boardRender = testBoardData.map(data => {
        return (
            <div id="document-div">
                <div id="document-title"><h3>{data.boardTitle}</h3></div>
                <div id="document-text"><p>{data.boardText}</p></div>
            </div>
        )
    })

    //폴더까지는 경로를 설정했고 이름만 설정해주면 됨
    const publicPath = process.env.PUBLIC_URL

    return (
        <div className="d-body">
            <img src={publicPath+"/img/blog.jpg"} className="img-div" alt="프로젝트 사진"/>
            <div className="text-div">
                {boardRender}
            </div>
            
        </div>
    );
}

export default Document;