package io.nology.employee_backend.posts;

import jakarta.validation.constraints.Pattern;

public class UpdateEmployeeItemDTO {
	
	@Pattern(regexp = "^(?=\\S).*$", message="First name cannot be empty")
	private String firstName;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Last name cannot be empty")
	private String lastName;
	
	@Pattern(regexp = "^(?=\\S).*$", message="employment type cannot be empty")
	private String employmentType;
	
	@Pattern(regexp = "^(?=\\S).*$", message="contract length cannot be empty")
	private String contractLength;
	
	@Pattern(regexp = "^(?=\\S).*$", message="email cannot be empty")
	private String email;
	
	@Pattern(regexp = "^(?=\\S).*$", message="address cannot be empty")
	private String address;
	
	private boolean currentEmployee;

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

	public boolean isCurrentEmployee() {
		return currentEmployee;
	}

	public void setCurrentEmployee(boolean currentEmployee) {
		this.currentEmployee = currentEmployee;
	}
	
	

	
}
