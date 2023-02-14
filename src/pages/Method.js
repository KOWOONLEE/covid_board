import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Question from "../components/Question";

const Method = () => {
  const methodList = [
    {
      id: 1,
      title: "손씻는법",
      content: "손씻는 법 내용 ......",
    },
    {
      id: 2,
      title: "밀접접촉자 행동요령",
      content: "밀접접촉자 행동요령 내용 ......",
    },
    {
      id: 3,
      title: "관련기관 연락처",
      content: "관련기관 연락처 내용 ......",
    },
    {
      id: 4,
      title: "질병관리처 1339",
      content: "질병관리처 1339 내용 ......",
    },
  ];
  const [click, setClick] = useState(methodList);

  const navigate = useNavigate();

  return (
    <StyledMethod>
      <div className="navWrap">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="navListIcon"
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="navTitle">예방방법</div>
      </div>
      <div className="methodWrap">
        {click.map((method) => {
          return <Question key={method.id} {...method} />;
        })}
      </div>
    </StyledMethod>
  );
};
export default Method;

const StyledMethod = styled.div`
  display: inline-block;
  width: 100%;
  height: 8vh;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: #d2f0f4;

  .navWrap {
    display: flex;
    height: 8vh;
    align-items: center;
    font-size: 1.4em;
    font-weight: 600;
  }
  .navTitle {
    display: flex;
    margin: 0 auto;
  }
  .navListIcon {
    display: fixed;
    position: absolute;
    left: 8vw;
  }
  .methodWrap {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    /* top: 20vh; */
    align-items: center;
  }
`;
