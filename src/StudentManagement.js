import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const StudentManagement = () => {
  return (
    <Header>
      <Typography variant="h4">
        Student Management Developed By Souvik
      </Typography>
    </Header>
  );
};

export default StudentManagement;
