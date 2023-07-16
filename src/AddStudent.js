import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  FormGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { performAddStudent } from "./services/StudentApi";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  standard: "",
  address: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddStudent = () => {
  const [student, setStudent] = useState(initialValue);
  const { name, standard, address } = student;

  const onValueChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();

  const addStudentOnclick = async () => {
    await performAddStudent(student);
    navigate("/all");
  };
  return (
    <Container>
      <Typography variant="h4">Add Student</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          id="my-input"
          value={name}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Standard</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="standard"
          id="my-input"
          value={standard}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          id="my-input"
          value={address}
        ></Input>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addStudentOnclick()}
        >
          Click to Add Student
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddStudent;
