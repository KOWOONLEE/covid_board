import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const BoardDetail = () => {
  const chartList = ["확진자 추이 비교", "사망자 추이", "회복자 추이"];
  const [globalState, setGlobalState] = useState("");

  useEffect(() => {
    const globalLoading = async () => {
      try {
        const { data } = await axios.get("https://api.covid19api.com/summary");
        setGlobalState(data);
      } catch (error) {
        console.log(error);
      }
    };
    globalLoading();
  }, [globalState]);

  return (
    <StyledBoard>
      <div className="firstWrap">
        <div className="totalStates">
          <div className="statesTitle">
            <span>전세계 확진자 수</span>
          </div>
          <div className="peopleCount">
            <span>
              {globalState &&
                Number(globalState.Global.TotalConfirmed).toLocaleString()}
              명
            </span>
          </div>
          <div className="difference">
            <span>
              신규확진자 수&nbsp;
              {globalState &&
                Number(globalState.Global.NewConfirmed).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="secondWrap">
        <div className="leftWrap margin_5">
          <div className="totalStates">
            <div className="statesTitle">
              <span>전세계 사망자수</span>
            </div>
            <div className="peopleCount">
              <span>
                {globalState &&
                  Number(globalState.Global.TotalDeaths).toLocaleString()}
                명
              </span>
            </div>
            <div className="difference">
              <span>
                신규사망자 수&nbsp;
                {globalState &&
                  Number(globalState.Global.NewDeaths).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        <div className="rightWrap">
          <div className="totalStates">
            <div className="statesTitle">
              <span>전세계 회복자 수</span>
            </div>
            <div className="peopleCount">
              <span>
                {globalState &&
                  Number(globalState.Global.TotalRecovered).toLocaleString()}
                명
              </span>
            </div>
            <div className="difference">
              <span>
                신규 회복자수&nbsp;
                {globalState &&
                  Number(globalState.Global.NewRecovered).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      {chartList.map((list) => (
        <div key={list} className="chartWrap">
          <div className="totalStates">
            <div className="statesTitle">
              <span>{list}</span>
            </div>
          </div>
        </div>
      ))}
    </StyledBoard>
  );
};

export default BoardDetail;

const StyledBoard = styled.div`
  display: inline-block;
  width: 100vw;
  height: 100vh;

  .margin_5 {
    margin-right: 5vw;
  }
  .firstWrap {
    display: block;
    width: 90vw;
    height: 25vh;
    align-items: center;
    justify-content: center;
    margin: 5vw;
  }
  .secondWrap {
    display: flex;
    width: 90vw;
    height: 25vh;
    align-items: center;
    justify-content: center;
    margin: 5vw;
  }
  .leftWrap {
    width: 45vw;
  }
  .rightWrap {
    width: 45vw;
  }
  .chartWrap {
    display: flex;
    width: 90vw;
    height: 25vh;
    align-items: center;
    justify-content: center;
    margin: 5vw;
  }
  .totalStates {
    width: 100%;
    height: 25vh;
    background-color: #e8f1f7;
    border-radius: 10px;
    padding: 15px;
  }
  .statesTitle {
    height: 20%;
    font-size: 1.1em;
    font-weight: 600;
  }
  .peopleCount {
    display: flex;
    height: 60%;
    font-size: 2em;
    color: #3087c1;
    align-items: center;
    justify-content: center;
  }
  .difference {
    display: flex;
    height: 20%;
    font-size: 1.1em;
    align-items: center;
    justify-content: right;
  }
`;
