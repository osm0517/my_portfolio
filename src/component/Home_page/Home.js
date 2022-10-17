import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to='/list'>
                <div><p>포트폴리오 보러 가기</p></div>
            </Link>
        </div>
    )
}

export default Home;