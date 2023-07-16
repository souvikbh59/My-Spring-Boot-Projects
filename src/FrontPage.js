import React from "react";
import { Box, Typography, styled } from "@material-ui/core";

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 380,
  margin: "20px auto",
};

const FrontPage = () => {
  return (
    <Header>
      <Typography align="center" style={paperStyle}>
        <h1>Welcome to Student Management Application</h1>
        <br></br>
        <h5>Developed By Souvik</h5>
      </Typography>
    </Header>
  );
};

export default FrontPage;
