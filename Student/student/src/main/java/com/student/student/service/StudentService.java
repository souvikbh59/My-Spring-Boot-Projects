package com.student.student.service;

import java.util.List;

import com.student.student.entity.StudentEntity;



public interface StudentService {
	
	 List<StudentEntity> getallStudents();
	 
	 StudentEntity getStudentbyId(int Id);
	 
	 StudentEntity saveStudent(StudentEntity StudentEntity);
	 
	 StudentEntity updateStudent(StudentEntity StudentEntity);
	 
	 String deleteStudent (int id);
	 
	 

}
