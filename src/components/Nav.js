import React, { useState } from "react";
import styled from "styled-components";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import SelectCountry from "./SelectCountry";

const Nav = ({ selectedCountry, setSelectedCountry }) => {
  const [modal, setModal] = useState(false);
  const handleSelect = () => {
    setModal(true);
    console.log(modal);
  };

  return (
    <StyledNav>
      <div className="navWrap">
        <div className="navTitle">코로나 현황판</div>
        <div className="navListIcon" onClick={handleSelect}>
          <TbAdjustmentsHorizontal />
        </div>
        {modal && (
          <SelectCountry
            modal={modal}
            setModal={setModal}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          ></SelectCountry>
        )}
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  top: 0;
  align-items: center;
  justify-content: center;
  background-color: #d2f0f4;

  .navWrap {
    display: flex;
    align-items: center;
    font-size: 1.4em;
    font-weight: 600;
  }
  .navListIcon {
    display: fixed;
    position: absolute;
    right: 8vw;

    svg {
      font-size: 1.2em;
    }
  }
`;
