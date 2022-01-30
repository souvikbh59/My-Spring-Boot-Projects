package com.example.Student.Controller;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Student.Entity.Student;
import com.example.Student.Repository.StudentRepository;
import com.example.Student.Service.StudentService;

@RestController
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	StudentService studentservice;
	
	@Autowired
	StudentRepository repository;
	
	StudentController(StudentService studentservice){
		this.studentservice=studentservice;
	}
	
	@GetMapping("/allstudents")
	public ResponseEntity<?> getallstudents(){
		return new ResponseEntity<List>(studentservice.getallStudents(),HttpStatus.OK);
	}
	
	@PostMapping("/addstudent")
	public ResponseEntity<?> addstudent(@Valid @RequestBody Student student) {
		//Student str=new Student();
		Student nw_student=studentservice.addStudent(student);
		
		return new ResponseEntity<Student>(nw_student,HttpStatus.CREATED);
	}
	
	@PutMapping("/updatestudent/{id}")
	public Optional<Object> updatestudent(@Valid @RequestBody Student student,@PathVariable Long id) {
		return repository.findById(id).map( e -> {
			e.setName(student.getName());
			e.setStandard(student.getStandard());
			e.setAddress(student.getAddress());
			return repository.save(e);
			
		});
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String deletebyid(@PathVariable Long id) {
		try {
			repository.deleteById(id);
			return "Success";
			
		}catch(Exception e) {
			return "Fail";
		}
	}
	
	
	

}
