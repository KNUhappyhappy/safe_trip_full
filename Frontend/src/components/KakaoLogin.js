import "../css/common.css"
import "../css/Login.css"
import React, {useEffect, useState} from "react";
import axios from 'axios';

function KakaoLogin(){
    const [msg, setMsg] = useState('')

    useEffect(()=>{
        axios.get('/account/register')
            .then(response=> setMsg(response.data))
            .catch(error => console.log(error))
    }, [])
    return(
        <div>
            {msg}
        </div>
    )
}

export default KakaoLogin;