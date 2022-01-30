package com.student.student.entity;



import org.springframework.boot.autoconfigure.domain.EntityScan;


//@Table(name = "Students")
@EntityScan
public class StudentEntity {
	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String standard;
	
	
	public StudentEntity(int id, String firstName, String lastName, String standard) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.standard = standard;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getStandard() {
		return standard;
	}
	public void setStandard(String standard) {
		this.standard = standard;
	}
	
	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", standard="
				+ standard + "]";
	}
	

}
