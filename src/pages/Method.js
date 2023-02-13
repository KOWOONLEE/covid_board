import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

const Method = () => {
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      if (titleRef.current === null || contentRef.current === null) {
        return;
      }
      if (titleRef.current.clientHeight > 0) {
        titleRef.current.style.height = "0";
      } else {
        titleRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
      setClick(!click);
    },
    [click]
  );

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

  const openContets = (e) => {
    console.log(e.target.parentElement.offsetHeight, click);
    if (click) {
      setClick(false);
      e.target.parentElement.style.height = "50px";
    } else if (!click) {
      setClick(true);
      e.target.parentElement.style.height = "200px";
    }
  };

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
        {methodList.map((title) => (
          <ul className="methodList">
            <li onClick={handleClick}>
              <div>{title.title}</div>
              <div>
                <IoIosArrowDown />
              </div>
            </li>
            <div className="contentWrap" ref={titleRef}>
              <div className="contentDetail" ref={contentRef}>
                {title.content}
              </div>
            </div>

            {/* <li>
            <div>손씻는 법</div>
            <div>
              <IoIosArrowDown />
            </div>
          </li>
          <div className="contentBox">
            <div>손씻는 법 내용 ......</div>
          </div>
          <li>
            <div>밀접접촉자 행동요령</div>
            <div>
              <IoIosArrowDown />
            </div>
          </li>
          <div className="contentBox">
            <div>밀접접촉자 내용 ......</div>
          </div>
          <li>
            <div>관련기관 연락처</div>
            <div>
              <IoIosArrowDown />
            </div>
          </li>
          <div className="contentBox">
            <div>관련기관 내용 ......</div>
          </div>
          <li>
            <div>질병관리처 1339</div>
            <div>
              <IoIosArrowDown />
            </div>
          </li>
          <div className="contentBox">
            <div>질병관리처 1339 내용 ......</div>
          </div> */}
          </ul>
        ))}
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
  .methodList {
    display: inline-block;
    width: 100%;
    height: 7vh;
    align-items: center;

    li {
      display: flex;
      font-weight: 600;
      padding: 15px 20px;
      border: 1px solid grey;
    }
    svg {
      position: absolute;
      right: 8vw;
      width: 20px;
      height: 20px;
    }
  }
  .contentBox {
    display: flex;
    width: 100%;
    height: 15vh;
    color: grey;
    border: 1px solid grey;
    padding: 20px;

    div {
    }
  }
  .contentBoxNone {
    display: none;
  }
`;
