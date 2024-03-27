package io.nology.employee_backend.posts;

import org.springframework.context.annotation.Conditional;

import jakarta.validation.constraints.NotBlank;

public class CreateEmployeeItemDTO {
	
	@NotBlank 
	private String firstName;
	
	@NotBlank 
	private String lastName;
	
	@NotBlank
	private String employmentType; //maybe change to single char
	
	@NotBlank 
	private String contractLength;
	
	private boolean currentEmployee;

	@NotBlank 
	private String email;
	
	@NotBlank 
	private String address;

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

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public String getContractLength() {
		return contractLength;
	}

	public void setContractLength(String contractLength) {
		this.contractLength = contractLength;
	}

	public boolean isCurrentEmployee() {
		return currentEmployee;
	}

	public void setCurrentEmployee(boolean currentEmployee) {
		this.currentEmployee = currentEmployee;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
	
	

}
