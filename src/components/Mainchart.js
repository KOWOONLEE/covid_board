import styled from "styled-components";
const Mainchart = () => {
  const chartList = ["확진자 추이 비교", "사망자 추이", "회복자 추이"];
  return (
    <StyledChart>
      <div className="chartWrap">
        <div className="totalStates">
          <div className="statesTitle">
            <span>확진자 추이 비교</span>
          </div>
        </div>
      </div>
      <div className="chartWrap">
        <div className="totalStates">
          <div className="statesTitle">
            <span>사망자 추이</span>
          </div>
        </div>
      </div>
      <div className="chartWrap">
        <div className="totalStates">
          <div className="statesTitle">
            <span>회복자 추이</span>
          </div>
        </div>
      </div>
    </StyledChart>
  );
};

export default Mainchart;

const StyledChart = styled.div`
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
`;
