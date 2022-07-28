import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";

const Header = styled.nav`
  background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const MainBtn = styled.a`
 text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: ${(props) => props.primary ? "white" : "#41d3be"};
  background: ${(props) => props.primary ? "transparent" : "white"};

`;

const Cabecalho = () => {
  return (
    <Header>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <MainBtn href="https://google.com">
          Ajuda
        </MainBtn>
        <MainBtn primary href="https://google.com">
          Sair
        </MainBtn>
      </div>
    </Header>
  );
};

export default Cabecalho;
