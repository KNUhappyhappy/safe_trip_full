import React, {useState} from "react";
import "../css/NationalSecurity.css"

const Searchbar = () => {
    //ADD :: Start
    const [searchWord, setSearchWord] = useState("");
    const onClickSearch = (e) =>{
        console.log("버튼 눌림!");
        console.log(searchWord)
    }

    const onChangeSearch = (e) => {
        setSearchWord(e.target.value);
    }

    return (
        <div className="searchbar_div">
            <p>안전행을 위해 입력하세요!</p>
            <input className="searchbar_input" type="text" placeholder="국가이름을 검색하세요." onChange={onChangeSearch}></input>
            <button className="searchbar_button" onClick={onClickSearch}>검색</button>
            <button className="searchbar_bookmark">즐겨찾기 저장</button>
        </div>
    )
}
export default Searchbar;