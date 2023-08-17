// import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import "../css/Community.css";

function CommunityExplore() {
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
              <div>
                <h3>일본에 대한 안전정보</h3>
              </div>
              <div className="CommunityExploreLeftPostList">
                <CommunityExplorePostList />
                <CommunityExplorePostList />
                <CommunityExplorePostList />
                <CommunityExplorePostList />
                <CommunityExplorePostList />
                <CommunityExplorePostList />
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

function CommunityExplorePostList() {
  return (
    <div className="CommunityExploreList">
      <Link to="/CommunityDetailPage">
        <div className="CommunityExplorePostImg"></div>
        <span className="CommunityExplorePostIndex"></span>
        <span className="CommunityExplorePostTitle"></span>
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
