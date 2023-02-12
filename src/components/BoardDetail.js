import styled from "styled-components";

const BoardDetail = () => {
  const chartList = ["확진자 추이 비교", "사망자 추이", "회복자 추이"];

  return (
    <StyledBoard>
      <div className="firstWrap">
        <div className="totalStates">
          <div className="statesTitle">
            <span>전세계 확진자 수</span>
          </div>
          <div className="peopleCount">
            <span>1000명</span>
          </div>
          <div className="difference">
            <span>1000</span>
          </div>
        </div>
      </div>
      <div className="secondWrap">
        <div className="leftWrap margin_5">
          <div className="totalStates">
            <div className="statesTitle">
              <span>전세계 확진자 수</span>
            </div>
            <div className="peopleCount">
              <span>1000명</span>
            </div>
            <div className="difference">
              <span>1000</span>
            </div>
          </div>
        </div>
        <div className="rightWrap">
          <div className="totalStates">
            <div className="statesTitle">
              <span>전세계 확진자 수</span>
            </div>
            <div className="peopleCount">
              <span>1000명</span>
            </div>
            <div className="difference">
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>
      {chartList.map((list) => (
        <div key="title" className="chartWrap">
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
    font-size: 1.2em;
    font-weight: 600;
  }
  .peopleCount {
    display: flex;
    height: 60%;
    font-size: 2em;
    color: #109ddc;
    align-items: center;
    justify-content: center;
  }
  .difference {
    display: flex;
    height: 20%;
    font-size: 1.3em;
    align-items: center;
    justify-content: right;
  }
`;
