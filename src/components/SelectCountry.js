import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { GoX } from "react-icons/go";

const SelectCountry = ({ modal, setModal }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryList, setCountryList] = useState("");
  const inputRef = useRef("");
  const clickRef = useRef("");
  const debounce = useRef();
  const exitModal = () => {
    setModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    clearTimeout(debounce.current);

    const countryLoading = async () => {
      try {
        const { data } = await axios.get("https://api.covid19api.com/summary");
        // const fillterData = data.filter((country) =>
        //   country.Countries.includes(search)
        // );
        setCountryList(data);
        console.log(countryList.Countries);
      } catch (error) {
        console.log(error);
      }
    };

    debounce.current = setTimeout(countryLoading, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      setValue(inputRef.current.value);
      console.log(inputRef);
      inputRef.current.value = "";
    }
  };

  const clickCountry = (e) => {
    setSelectedCountry(e.target.value);
    console.log(selectedCountry);
  };

  const clickGlobal = async () => {
    try {
      const { data } = await axios.get("https://api.covid19api.com/summary");
      console.log(data.Countries);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledModal>
      <div className="modalWrap">
        <div className="exitbuttonWrap">
          <GoX onClick={exitModal} />
        </div>
        <div className="modalTitle">
          <div className="title" onClick={clickGlobal}>
            지역 선택하기
          </div>
        </div>
        <div>
          <div className="selectTitle">
            <span>선택 국가 현황 조회하기</span>
          </div>
          <div>
            <form className="countriesForm">
              <input
                className="countriesInput"
                placeholder="대소문자 구분하여 정확하게 입력"
                type="text"
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button className="submitBtn" onClick={handleSubmit}>
                조회
              </button>
            </form>
          </div>
          <div>
            {countryList &&
              countryList.Countries
                // .filter((val) => {
                //   if (value === "") {
                //     return val;
                //   }
                //   if (val.Countries.toUpperCase().includes(value.toUpperCase())) {
                //     return val;
                //   }
                // })
                .map((contries) => (
                  <ul key={contries.Countries} className="countriesList">
                    <li onClick={clickCountry}>{contries.Countries}</li>
                  </ul>
                ))}
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default SelectCountry;

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;

  .modalWrap {
    position: absolute;
    width: 70%;
    height: 70%;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    overflow: auto;
  }
  .exitbuttonWrap {
    display: flex;
    align-items: center;
    justify-content: right;

    svg {
      width: 30px;
      height: 30px;
      background-color: grey;
      border: 2px solid black;
      fill: white;
    }
  }
  .modalTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: 1.1em;
  }
  .selectTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0 10px 0;
    font-size: 0.8em;
  }
  .countriesForm {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  .countriesInput {
    width: 80%;
    height: 5vh;
    text-align: center;
  }
  .submitBtn {
    height: 5vh;
    border: 1px solid grey;
    background-color: #d2f0f4;
  }
  .countriesList {
    list-style: none;
    margin-left: 20px;
    margin-bottom: 5px;
  }
  .countriesList li::before {
    content: "👉";
  }
`;
