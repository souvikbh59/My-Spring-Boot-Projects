import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
} from "@material-ui/core";

import { getAllStudents, performDeleteStudent } from "./services/StudentApi";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 20px 20px 50px;
  padding: 25px 50px 75px 100px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const paperStyle = {
  padding: 0,
  height: "5vh",
  width: 380,
  margin: "10px auto",
};

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadAllData();
  }, []);
  console.log(students);

  const deleteById = async (id) => {
    await performDeleteStudent(id);
    loadAllData();
  };

  const loadAllData = async () => {
    let response = await getAllStudents();
    setStudents(response.data);
  };
  return (
    <div>
      <div align="center" style={paperStyle}>
        <h1>Students Data</h1>
      </div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Sl. No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Standard</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Action</TableCell>
          </THead>
        </TableHead>

        <TableBody>
          {students.map((element) => (
            <TRow key={element.id}>
              <TableCell>{element.id}</TableCell>
              <TableCell>{element.name}</TableCell>
              <TableCell>{element.standard}</TableCell>
              <TableCell>{element.address}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${element.id}`}
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteById(element.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllStudents;
