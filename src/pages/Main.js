import BoardDetail from "../components/BoardDetail";
import { useState } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const Main = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <>
      <Nav
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <BoardDetail />
    </>
  );
};
export default Main;
