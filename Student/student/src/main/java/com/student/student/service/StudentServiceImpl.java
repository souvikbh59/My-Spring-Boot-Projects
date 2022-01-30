package com.student.student.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.student.student.entity.StudentEntity;
@Service
public class StudentServiceImpl implements StudentService {
	
	List<StudentEntity> std ;
	
	public StudentServiceImpl() {
		std= new ArrayList<>();
		std.add(new StudentEntity(1,"Souvik","bh","math"));
		std.add(new StudentEntity(2,"nnn","bh","english"));
		
	}
	

	@Override
	public List<StudentEntity> getallStudents() {
	
		return std ;
	}

	@Override
	public StudentEntity getStudentbyId(int Id) {
		StudentEntity s=null;
		for (StudentEntity stds:std) {
			if(stds.getId()==Id) {
				s=stds;
			}
		}
		return s;
	}

	@Override
	public StudentEntity saveStudent(StudentEntity studententity) {
		 std.add(studententity);
		 
		 return studententity;
	}

	@Override
	public StudentEntity updateStudent(StudentEntity studententity) {

    std.forEach(e -> {
    	if(e.getId()==studententity.getId()) {
    		e.setFirstName(studententity.getFirstName());
    		e.setLastName(studententity.getLastName());
    		e.setStandard(studententity.getStandard());
    	}
    });
		return studententity;
	}

	@Override
	public String deleteStudent(int id) {
		try {
			std=this.std.stream().filter(e -> e.getId() != id ).collect(Collectors.toList());
			return "Success";
		}catch(Exception e){
			return "Fail";
			
		}
		
		
	}

	

}
