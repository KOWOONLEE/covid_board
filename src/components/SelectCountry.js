import React, { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { GoX } from "react-icons/go";

const SelectCountry = ({ modal, setModal }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [countryList, setCountryList] = useState([]);
  const inputRef = useRef("");
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

  const getCountriesData = () => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((result) => {
        setCountryList(result.data);
        // const copy = [...cosmetic, ...result.data];
        // setCosmetic(copy);
        // setCount(count + 1);

        //로딩중 숨기기
      })
      .catch(() => {
        // if (count >= 4) {
        //   alert("상품이 더이상 없습니다.");
        // }
        // console.log("통신 실패");
        //로딩중 숨기기 (실패해도 로딩중 숨겨야함)
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      setValue(inputRef.current.value);
      console.log(inputRef);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    // getCountriesData();
    clearTimeout(debounce.current);

    const countryLoading = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.covid19api.com/countries"
        );
        const fillterData = data.filter((country) =>
          country.Country.includes(search)
        );
        setCountryList(fillterData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    debounce.current = setTimeout(countryLoading, 500);
  }, [search]);

  return (
    <StyledModal>
      <div className="modalWrap">
        <div className="exitbuttonWrap">
          <GoX onClick={exitModal} />
        </div>
        <div>
          <span>전세계 현황 조회하기</span>
        </div>
        <div>
          <div>
            <span>선택 국가 현황 조회하기</span>
          </div>
          <div>
            <form>
              <input
                placeholder="국가명을 검색해주세요"
                type="text"
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <button onSubmit={handleSubmit}>조회</button>
            </form>
          </div>
          <div>
            {!loading &&
              countryList
                .filter((val) => {
                  if (value === "") {
                    return val;
                  }
                  if (val.Country.toLowerCase().includes(value.toLowerCase())) {
                    return val;
                  }
                })
                .map((contries) => (
                  <li>
                    <p>{contries.Country}</p>
                  </li>
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
`;
