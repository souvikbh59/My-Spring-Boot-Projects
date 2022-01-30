package com.example.Student.Service;

import java.util.List;

import com.example.Student.Entity.Student;

public interface StudentService {
	
	public List<Student> getallStudents();
	
	public Student addStudent(Student student);
	
	//public Student updateStudent(Student student,Long id);
	
	//public String deleteStudent(Long id);
	

}
