// import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import "../css/Community.css";
import { IconName } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

import React, { createContext, useState, useEffect } from "react";

function CommunityExplore() {
  const [postIndex, setPostIndex] = useState(1); // 초기값 1로 설정
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="CommunityExplore">
        <div className="CommunityExploreInner">
          <div className="CommunityExploreLeft">
            <div className="CommunityExploreLeftSearchBar">
              <input placeholder="원하는 게시글을 검색하세요." />
              <button className="CommunitySearchBtn">
                <img />
                <span>검색</span>
              </button>
            </div>
            <div className="CommunityExploreLeftPost">
              <div className="CommunityExploreLeftPostTop">
                <h3>일본에 대한 안전정보</h3>
                <span
                  onClick={handleDropdownClick}
                  className="CommunityExploreSelect"
                >
                  최신순
                  <AiOutlineDown className="AiOutlineDown" />
                  {showDropdown && (
                    <div className="CommunityExploreDropdownMenu">
                      <span className="Popularity">인기순</span>
                      <span className="Latest">최신순</span>
                    </div>
                  )}
                </span>
              </div>
              <div className="CommunityExploreLeftPostList">
                <CommunityExplorePostList postIndex={postIndex} />
                <CommunityExplorePostList postIndex={postIndex + 1} />
                <CommunityExplorePostList postIndex={postIndex + 2} />
                <CommunityExplorePostList postIndex={postIndex + 3} />
                <CommunityExplorePostList postIndex={postIndex + 4} />
                <CommunityExplorePostList postIndex={postIndex + 5} />
              </div>

              <div className="CommunityExplorePagination">
                <span>1 / 10</span>
              </div>
            </div>
          </div>
          <div className="CommunityExploreRight">
            <div className="CommunityCategory">
              <CommunityCategoryBoxes />
            </div>
            <div className="CommunityNotice">
              <h4>공지사항</h4>
              <span>[안내] 안전행 서비스 공지</span>
              <span>[안내] 안전행 커뮤니티 이용 규칙</span>
              <span>[안내] 2차 서비스 오픈</span>
            </div>
            <div className="CommunitySponsor">
              <h4>스폰서</h4>
              <div className="CommunityAdBox"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CommunityExplorePostList({ postIndex }) {
  const articleTitle = [
    "일본에서 일어나는 자연재해 대처 방법",
    "뭐? 일본에서 아무 생각 없이 운전한다고?",
    "혼자서는 어려운 일본어.. 이렇게 공부해보자!",
    "일본 지하철 쉽게 환승하는 방법!",
    "현지인이 추천하는 오사카의 숨겨진 맛집~!",
    "일본 시장에서 기념품 저렴하게 구입하는 흥정 방법!",
  ];

  const [articleIndex, setArticleIndex] = useState(1);

  useEffect(() => {
    // postIndex가 변경될 때마다 articleIndex 업데이트
    setArticleIndex(postIndex);
  }, [postIndex]);

  return (
    <div className="CommunityExploreList">
      <Link to="/CommunityDetailPage">
        <div className="CommunityExplorePostImg">
          <img src={`Images/CommunityPage/articleImg${articleIndex}.png`} />
        </div>
        <span className="CommunityExplorePostIndex">{postIndex}</span>
        <span className="CommunityExplorePostTitle">
          {articleTitle[postIndex - 1]}
        </span>
        <div className="CommunityExplorePostTopic"></div>
      </Link>
    </div>
  );
}

function CommunityCategoryBoxes() {
  return (
    <div className="CommunityCategoryBoxes">
      <div className="CommunityCategoryBox category1">
        <span>자연재해</span>
      </div>
      <div className="CommunityCategoryBox category2">
        <span>운전</span>
      </div>
      <div className="CommunityCategoryBox category3">
        <span>문화</span>
      </div>
      <div className="CommunityCategoryBox category4">
        <span>대중교통</span>
      </div>
      <div className="CommunityCategoryBox category5">
        <span>시장</span>
      </div>
      <div className="CommunityCategoryBox category6">
        <span>여행 꿀팁</span>
      </div>
      <div className="CommunityCategoryBox category7">
        <span>의료</span>
      </div>
      <div className="CommunityCategoryBox category8">
        <span>식품</span>
      </div>
    </div>
  );
}

export default CommunityExplore;
