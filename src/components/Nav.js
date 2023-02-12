import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div>Nav</div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 8vh;
  top: 0;
  background-color: grey;
`;
