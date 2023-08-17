// import "bootstrap/dist/css/bootstrap.min.css";

import "../css/CommunityDetailPage.css";
import { Link } from "react-router-dom";

function CommunityDetailPage() {
  return (
    <>
      <div className="CommunityDetailPage">
        <div className="CommunityDetailPageInner">
          <CommunityDetailContents />
          <CommunityDetailComments />
        </div>
      </div>
    </>
  );
}

function CommunityDetailContents() {
  return (
    <>
      <div className="CommunityDetailContents">
        <div className="CommunityDetailContentsInner">
          <div className="CommunityDetailContentsTop">
            <div className="CommunityDetailContentsReturn">
              <Link to="/Community" className="returnBtn">
                <span>← 돌아가기</span>
              </Link>
            </div>
            <div className="CommunityDetailContentsTitle">
              <div className="CommunityDetailContentsCategory"></div>
              <h1>뭐 일본에서 아무 생각 없이 운전한다고?</h1>
              <div className="CommunityDetailContentsTitleMenu">
                <div className="CommunityDetailContentsTitleMenuBarShare"></div>
                <div className="CommunityDetailContentsTitleMenuBar"></div>
              </div>
            </div>
            <div className="CommunityDetailContentsInfo">
              <div className="CommunityDetailContentsWriter">by 작성자</div>
              <div className="CommunityDetailContentsDate">2023 . 5 . 20</div>
            </div>
          </div>
          <div className="CommunityDetailContentsMain"></div>
        </div>
      </div>
    </>
  );
}

function CommunityDetailComments() {
  return (
    <>
      <div className="CommunityDetailComments">
        <div className="CommunityDetailCommentsInner">
          <div className="CommunityDetailCommentsRecommend"></div>
          <div className="CommunityDetailCommentsTotal"></div>
          <div className="CommunityDetailCommentsInputBar">
            <div className="CommunityDetailCommentsProfile"></div>
            <input placeholder="댓글을 작성하세요" />
            <button className="CommentsBtn">작성</button>
          </div>
          <div className="CommunityDetailCommentsLists"></div>
        </div>
      </div>
    </>
  );
}

export default CommunityDetailPage;
