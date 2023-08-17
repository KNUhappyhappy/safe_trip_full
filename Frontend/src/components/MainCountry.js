import "../css/MainPage.css";

function MainCountry() {
  return (
    <>
      <div className="MainCountry">
        <div className="MainCountryInner">
          <div className="MainCountryIntro">
            <h2>많이 찾는 국가 TOP3</h2>
            <h5>많이 여행하는 국가인 만큼 안전도 같이 대비해요!</h5>
          </div>
          <MainCountryBoxex />
        </div>
      </div>
    </>
  );
}

function MainCountryBoxex() {
  return (
    <div className="MainCountryBoxes">
      <div className="MainCountryBox">
        <img src="images/MainPage/japanBackground.png" alt="japanBackground" />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>일본 (Japan)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
      <div className="MainCountryBox">
        <img
          src="images/MainPage/mongoliaBackground.png"
          alt="mongoliaBackground"
        />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>몽골 (Mongolia)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
      <div className="MainCountryBox">
        <img
          src="images/MainPage/singaporeBackground.png"
          alt="singaporeBackground"
        />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>싱가포르 (Singapore)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCountry;
