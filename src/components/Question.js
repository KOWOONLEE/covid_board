import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const Question = ({ title, content }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <StyledQuestion>
      <article className="methodList">
        <div className="method">
          <h4>{title}</h4>
          <div className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {showInfo && <p className="methodWrap">{content}</p>}
      </article>
    </StyledQuestion>
  );
};
export default Question;

const StyledQuestion = styled.div`
  .methodList {
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgrey;
  }
  .method {
    display: flex;
    width: 100vw;
    font-weight: 600;
    padding: 15px 20px;
    align-items: center;

    h4 {
      margin-bottom: 0;
    }
  }

  .btn {
    position: absolute;
    right: 8vw;
    width: 20px;
    height: 20px;
  }

  .methodWrap {
    display: flex;
    width: 100%;
    height: 8vh;
    padding: 20px;
    background-color: #e8f1f7;
    margin-bottom: 0;
    margin-top: 0.5rem;
    transition: height 0.35s ease, background-color 0.35s ease;
  }
`;
