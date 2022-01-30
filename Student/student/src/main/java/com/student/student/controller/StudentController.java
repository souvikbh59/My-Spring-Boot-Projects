package com.student.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.student.student.entity.StudentEntity;
import com.student.student.service.StudentService;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	//get all students postman
	/*@GetMapping("/allstudents")
	public  List<StudentEntity> getallStudents(){
		return this.service.getallStudents();
	}*/
	
	//get all students HTML
	@GetMapping("/students")
	public String getallstudents(Model model) {
		model.addAttribute("students", service.getallStudents());
		return "students";
	}
	
	//get student by id postman
	/*@GetMapping("/student/{Id}")
	public StudentEntity getStudentbyId(@PathVariable String Id) {
		return this.service.getStudentbyId(Integer.parseInt(Id));
	}
	
	
	// save student postman
	@PostMapping("/savestudent")
	public StudentEntity saveStudent(@RequestBody StudentEntity StudentEntity) {
		return this.service.saveStudent(StudentEntity);
	}
	
	
	// update student by id  postman
	@PutMapping("/update")
	public StudentEntity updateStudent(@RequestBody StudentEntity StudentEntity) {
		return this.service.updateStudent(StudentEntity);
	}
	
	
	//delete student by id postman
	@DeleteMapping("/delete/{id}")
	public String deleteStudent (@PathVariable String id) {
		return this.service.deleteStudent(Integer.parseInt(id));
	}*/
	
	
	
	

}
