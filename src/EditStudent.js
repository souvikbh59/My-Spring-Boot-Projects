import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  styled,
  FormGroup,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getStudentById, performUpdateStudent } from "./services/StudentApi";

const initialValue = {
  name: "",
  standard: "",
  address: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditStudent = () => {
  const [students, setStudents] = useState(initialValue);
  const { name, standard, address } = students;
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    loadStudentDetails();
  }, []);

  const loadStudentDetails = async () => {
    const response = await getStudentById(id);
    setStudents(response.data);
  };

  const editStudentDetails = async () => {
    console.log("id is:" + id);
    console.log("student value to update:" + students.value);
    await performUpdateStudent(id, students);

    navigate("/all");
  };

  const onValueChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Typography variant="h3">Edit Student</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          name="name"
          onChange={(e) => onValueChange(e)}
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Standard</InputLabel>
        <Input
          name="standard"
          onChange={(e) => onValueChange(e)}
          value={standard}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input
          name="address"
          onChange={(e) => onValueChange(e)}
          value={address}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editStudentDetails()}
        >
          Click to Edit Student
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditStudent;
