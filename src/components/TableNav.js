import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Table from '../img/table_with_view.jpg';


const Header = styled.header`
  width: 100%;
  background: #56baed;
  height: 60px;
`
const Nav = styled.nav`
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  margin-bottom: -4px;
`
const StyledDiv = styled.div`
  display: flex;
  align-content: space-between;
  color: white;
`

const TableNav = () => {
  return (
    <>
    <Image src={Table} alt='table' />
    <Header>
      <Nav>
        <StyledDiv>
        <Link to="/welcome">Person</Link>
          <Link to="/">Plate</Link>
          <Link to="/signup">$$$</Link>
        </StyledDiv>
          
          
    
      </Nav>
    </Header>
    </>
  );
};

export default TableNav;