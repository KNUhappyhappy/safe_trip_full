import "../css/common.css"
import "../css/Join.css"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";


function Join(){
    //초기값 세팅 - 아이디, 비밀번호, 비밀번호 확인, 이메일
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //오류메세지 상태 저장
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [pwConfirmMessage, setPwConfirmMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");

    //유효성 검사
    const [isId, setIsId] = useState(false);
    const [isname, setIsName] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isPwConfirm ,setIsPwConfirm] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [IsFirstName, setIsFirstName] = useState(false);
    const [IsLastName, setIsLastName] = useState(false);

    //에러메세지 띄우기
    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
    }

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPw(currentPassword);
    };
    const onChangePasswordConfirm = (e) => {
        const currentPwConfirm = e.target.value;
        setPwConfirm(currentPwConfirm);
    };
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
    };

    const onChangeFirstName = (e) => {
        const currentFirstName = e.target.value;
        setFirstName(currentFirstName);

    }
    const onChangeLastName = (e) => {
        const currentLastName = e.target.value;
        setLastName(currentLastName);

    }

    const onClickButton = (e) => {
        const idRegExp = /^[a-zA-Z0-9]{4,10}$/;

        if(!idRegExp.test(id)){
            setIdMessage("4~10글자 사이 대소문자 또는 숫자를 입력해주세요!");
            setIsId(false);
        } else{
            setIdMessage("사용가능한 아이디 입니다.");
            setIsId(true);
        }


        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(pw)) {
            setPwMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPw(false);
        } else {
            setPwMessage("안전한 비밀번호 입니다.");
            setIsPw(true);
        }

        if (pw !== pwConfirm || pw == 0) {
            setPwConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
            setIsPwConfirm(false);
        } else {
            setPwConfirmMessage("똑같은 비밀번호를 입력했습니다.");
            setIsPwConfirm(true);
        }

        const emailRegExp =
            /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

        if (!emailRegExp.test(email)) {
            setEmailMessage("이메일의 형식이 올바르지 않습니다!");
            setIsEmail(false);
        } else {
            setEmailMessage("사용 가능한 이메일 입니다.");
            setIsEmail(true);
        }

        if (firstName.length == 0){
            setFirstNameMessage("성을 입력해주세요!");
            setIsFirstName(false);
        }else{
            setIsFirstName(true);
        }

        if (lastName.length == 0){
            setLastNameMessage("이름을 입력해주세요!");
            setIsLastName(false);
        }else{
            setIsLastName(true);
        }
    }


    return(
        <div className="join_main">
            <div className="joinBox">
                <div>
                    <p className="join_text">회원가입하기</p>
                    <div className="join_login">
                        <p>계정이 있으신가요?</p>
                        <Link to={"/login"}><p className="join_login-button">로그인</p></Link>
                    </div>
                </div>
                
                <input placeholder="아이디" onChange={onChangeId}></input>
                <p>{idMessage}</p>
                <div>
                    <div className="join_name">
                        <input placeholder="성" onChange={onChangeFirstName} ></input>
                        <input placeholder="이름" onChange={onChangeLastName}></input>
                    </div>

                    <p>{firstNameMessage}{lastNameMessage}</p>
                </div>
                <input placeholder="이메일" onChange={onChangeEmail}></input>
                <p>{emailMessage}</p>
                <input placeholder="비밀번호" onChange={onChangePassword}></input>
                <p>{pwMessage}</p>
                <input placeholder="비밀번호 확인" onChange={onChangePasswordConfirm}></input>
                <p>{pwConfirmMessage}</p>
                <button className="joinConfirm" onClick={onClickButton}>안전과 함께 가입하기</button>
            </div>
        </div>
    )
}

export default Join;