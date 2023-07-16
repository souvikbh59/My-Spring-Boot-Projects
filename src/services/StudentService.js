import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

const allStudent = "/allstudents";

const addStudent = "/addStudent";

const get_StudentById = "/getstudent";

const updateStudent = "/updatestudent";

const deleteStudentById = "/delete";

class StudentService {
  getAllStudents() {
    return axios.get(STUDENT_API_BASE_URL + allStudent);
  }

  getStudentById(studentId) {
    return axios.get(STUDENT_API_BASE_URL + get_StudentById + "/" + studentId);
  }

  performAddStudent(student) {
    return axios.post(STUDENT_API_BASE_URL + addStudent, student);
  }

  performUpdateStudent(student, studentId) {
    return axios.put(
      STUDENT_API_BASE_URL + updateStudent + "/" + studentId,
      student
    );
  }

  performDeleteStudent(studentId) {
    return axios.delete(
      STUDENT_API_BASE_URL + deleteStudentById + "/" + studentId
    );
  }
}

export default new StudentService();
