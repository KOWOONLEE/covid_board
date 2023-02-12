import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { GoX } from "react-icons/go";

const SelectCountry = ({ modal, setModal }) => {
  const exitModal = () => {
    setModal(false);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <StyledModal>
      <div className="modalWrap">
        <div className="exitbuttonWrap">
          <GoX onClick={exitModal} />
        </div>
      </div>
    </StyledModal>
  );
};

export default SelectCountry;

const StyledModal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
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
    transform: translate(-50%, -50%);
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
