import React from "react";
import { Link } from "react-router-dom";
// import FormikLoginForm from '../components/Login'

import styled from "styled-components";
import "./UserHome.css";

import "semantic-ui-css/semantic.min.css";
import { Button, Icon, List, Container } from "semantic-ui-react";
import TableNav from "./TableNav";

const IconContacts = styled(Icon)`
  cursor: pointer;
  color: #6435c9
  &:hover {
    color: #4c279c;
  }
`;
const IconTable = styled(Icon)`
  cursor: pointer;
  color: #00b5ad;
  &:hover {
    color: #057974;
  }
`;
const IconCircle = styled(Icon)`
  cursor: pointer;
  color: #e03997;
  &:hover {
    color: #b52f7a;
  }
`;

const UserHome = props => {
  console.log(props)
  return (
    <>
      <TableNav />

      <div className="container">
        <h1>welcome back</h1> 
        
      </div>
      <div className="icons-container">
        <div className="icons">
          <Link to="/contacts">
            <IconContacts name="users" size="massive" />
            <h4>Friends</h4>
          </Link>
        </div>
        <div className="icons">
          <Link to="/plate">
            <IconTable  name="table" size="massive" />
            <h4>Add new expense</h4>
          </Link>
        </div>
        <div className="icons">
          <Link to="/previous">
            <IconCircle  name="sync" size="massive" />
            <h4>Previous Meals</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserHome;
