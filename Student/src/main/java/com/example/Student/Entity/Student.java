package com.example.Student.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	@NotEmpty(message="Name should not be null")
	@Size(min=2 , message="Name should have atlest 2 characters")
	private String name;
	
	@NotEmpty(message="Standard should not be null")
	@Size(min=1 , message="Standard should have atlest 1 characters")
	private String standard;
	
	
	@NotEmpty(message="Address should not be null")
	@Size(min=5 , message="Address should have atlest 5 characters")
	private String address;
	
	public Student() {
		
	}
	public Student(int id, String name, String standard, String address) {
		super();
		this.id = id;
		this.name = name;
		this.standard = standard;
		this.address = address;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStandard() {
		return standard;
	}
	public void setStandard(String standard) {
		this.standard = standard;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", standard=" + standard + ", address=" + address + "]";
	}
	
	
	
	
	
	
	
	

}
