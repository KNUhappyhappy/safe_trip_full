import React from "react";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../app";

const Searchbar = () => {
    //ADD :: Start
    const [keyword, setKeyword] = useRecoilState(searchKeyword);

    const search = () => {
        const searchKeyword = document.querySelector('#keyword').value;
        setKeyword(searchKeyword);
    };
    //ADD :: End

    return (
        <div className="header">
            <input type="text" className="iptSearch" id="keyword" />
            {/* onClick 추가 */}
            <button type="button" className="search" onClick={search}>
                <span>검색</span>
            </button>
        </div>
    )
};

export default Searchbar;