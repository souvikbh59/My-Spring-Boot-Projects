import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";
const allStudent = "/allstudents";

const addStudent = "/addstudent";

const get_StudentById = "/getstudent";

const updateStudent = "/updatestudent";

const deleteStudentById = "/delete";

export const getStudentById = async (id) => {
  id = id || "";
  try {
    return await axios.get(`${STUDENT_API_BASE_URL + get_StudentById}/${id}`);
  } catch (error) {
    console.log("Error while calling getStudentById api ", error);
  }
};

export const performAddStudent = async (student) => {
  return await axios.post(`${STUDENT_API_BASE_URL + addStudent}`, student);
};

export const performUpdateStudent = async (studentId, student) => {
  const url = `${STUDENT_API_BASE_URL + updateStudent}/${studentId}`;
  console.log(url);
  return await axios.put(url, student);
};

export const performDeleteStudent = async (studentId) => {
  return await axios.delete(
    `${STUDENT_API_BASE_URL + deleteStudentById}/${studentId}`
  );
};

export const getAllStudents = async () => {
  return await axios.get(`${STUDENT_API_BASE_URL + allStudent}`);
};
