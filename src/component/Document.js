import React from "react";
import "./Document.css";


function Document() {

    //폴더까지는 경로를 설정했고 이름만 설정해주면 됨
    const publicPath = process.env.PUBLIC_URL

    return (
        <div className="d-body">
            <img src={publicPath+"/img/blog.jpg"} className="img-div" alt="프로젝트 사진"/>
            <div className="text-div">
                개발기간 : 2022/09/07 ~ <br /><br />
                사용 스택 : HTML,CSS,JS,jquery,react<br /><br />
                왜? 프로젝트를 수행할 때에 필요한 스택을 배우고, 흥미를 얻으며,
                응용하기 위해서 시작하였습니다. 또한 반응형 웹에 대한 이해와 개발
                경험과 응용을 위해서 해당 프로젝트를 시작하였습니다.
                다른 프로젝트를 시작하고 완료하면 내용을 더 추가하고 있습니다.<br /><br />
                부족한 점 : 웹 표준에 대한 지식, 코드 최적화, 디자인<br /><br />
                발생하였던 버그 및 해결 방법 : bugIssue.txt에 정리해놓음<br /><br />
                github 경로 - 추가하기
            </div>
            <img src={"public/img/blog.jpg"} className="img-div" alt="프로젝트 사진"/>
            <div className="text-div">
                개발기간 : 2022/09/11 ~ <br /><br />
                사용 스택 : node.js, mySQL<br /><br />
                {/* 왜? 프로젝트를 수행할 때에 필요한 스택을 배우고, 흥미를 얻으며,
                응용하기 위해서 시작하였습니다. 또한 반응형 웹에 대한 이해와 개발
                경험과 응용을 위해서 해당 프로젝트를 시작하였습니다.
                다른 프로젝트를 시작하고 완료하면 내용을 더 추가하고 있습니다.<br /><br />
                부족한 점 : 웹 표준에 대한 지식, 코드 최적화, 디자인<br /><br />
                발생하였던 버그 및 해결 방법 : bugIssue.txt에 정리해놓음<br /><br />
                github 경로 - 추가하기 */}
            </div>
        </div>
    );
}

export default Document;