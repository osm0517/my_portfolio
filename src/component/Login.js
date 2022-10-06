import React from "react";
import "./Login.css";

function login() {
    const title = "Beenheur"
    return(
        <div>
            <h1> { title } </h1>
            <div id = "login_box">
                <div id = "login">
                    <input class = "signin" id = "top_box" type="text" placeholder="아이디" />
                    <input class = "signin" type="password" placeholder="비밀번호" />
                </div>
                <div id = "password_search">
                    <div id = "auto_login_div">
                        <input id = "auto_login" type="radio" />
                        <label for="auto_login">
                            자동 로그인
                        </label>
                    </div>
                    <div id = "search_div">
                        <input class = "search" type="button" value="아이디 찾기" />
                        <input class = "search" type="button" value="비밀번호 찾기" />
                    </div>
                </div>
                    <input class = "buttons" id = "login_button" type="button" value="로그인" />
                    <input class = "buttons" id = "signup_button" type="button" value="회원가입" />
                </div>
        </div>
    );
};

export default login;