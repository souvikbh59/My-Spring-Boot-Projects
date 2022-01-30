package com.example.Student.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Student.Entity.Student;
import com.example.Student.Repository.StudentRepository;
@Service
public class StudentServceImpl implements StudentService{
	
	@Autowired
	StudentRepository studentrepository;
	
	
	
	List<Student> std;

	@Override
	public List<Student> getallStudents() {
		return studentrepository.findAll();
	}

	@Override
	public Student addStudent(Student student) {
		
		return studentrepository.save(student);
	}

	
	
	

}
