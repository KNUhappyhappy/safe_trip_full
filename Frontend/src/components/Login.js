import React, { useEffect, useState } from "react";
import "../css/Login.css"
import "../css/common.css"
import GoogleAuthLogin from "./GoogleAuthLogin"
import { Link } from "react-router-dom";

//사용자 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
//불변성 관리 패키지
import { produce } from 'immer';
import axios from 'axios';

//id 기억하기
import { useCookies } from 'react-cookie';


function Login(){

    const [userid, setUserid] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [isRemember, setIsRemember] = useState(false);
// fetch("/account/register", {
//     method: "POST",
//     headers: {
//         "Content_Type" : "application/json",
//     },
//     body: JSON.stringify({
//         username: "id",
//
//     })
// })
    useEffect(() => {
        if(cookies.rememberUserId !== undefined){
            setUserid(cookies.rememberUserId);
            setIsRemember(true);
        }
    }, []);

    const handleOnChange = (e) =>{
        setIsRemember(e.target.checked);
        if(!e.target.checked){
            removeCookie("rememberUserId");
        }
    }

    return(
        <div className="login_main">
            <div className="loginBox">
            <div className="login_intro">
                <p>환영합니다!</p>
                <p><span>안전한 여행준비, 안전행으로</span></p>
                
            </div>
            <div className="accountLogin_biv">
                    <GoogleAuthLogin />
            </div>
            
            <div>
                <p>OR</p>
            </div>
            <div className="login_input-div">
                <input className="login_input" defaultValue={userid} onChange={(e) => {setUserid(e.target.value);}} />
                <input className="login_input" type="text" />
            </div>
            <div className="div_checkbox">
                <div><input  className="checkbox_id-remember" type="checkbox" onChange={(e) => {handleOnChange(e); console.log("아이디기억")}} checked={isRemember}/><p>아이디 기억하기</p></div>
                <span>비밀번호를 잊으셨나요?</span>
            </div>
            <div className="login_div">
                <button onClick={Login}>로그인</button>
            </div>
            <div className="login_div-newAccount">
                <p>계정이 없으신가요?</p>
                <Link to={"/join"}><span>&nbsp;&nbsp;&nbsp;회원가입하기</span></Link>
            </div>
            </div>
        </div>
    );
}

export default Login;