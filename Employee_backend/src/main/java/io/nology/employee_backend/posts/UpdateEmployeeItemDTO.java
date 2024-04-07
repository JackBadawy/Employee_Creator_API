package io.nology.employee_backend.posts;

import jakarta.persistence.Column;
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
	
	@Pattern(regexp = "^(?=\\S).*$", message="salary cannot be empty")
	private int salary;
	
	private boolean fulltime;
	
	@Pattern(regexp = "^(?=\\S).*$", message="weekly hours cannot be empty")
	private int weeklyHours;
	
	@Pattern(regexp = "^(?=\\S).*$", message="start date cannot be empty")
	private int startDate; 
	
	@Pattern(regexp = "^(?=\\S).*$", message="end date cannot be empty")
	private int endDate; 

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

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public boolean isFulltime() {
		return fulltime;
	}

	public void setFulltime(boolean fulltime) {
		this.fulltime = fulltime;
	}

	public int getWeeklyHours() {
		return weeklyHours;
	}

	public void setWeeklyHours(int weeklyHours) {
		this.weeklyHours = weeklyHours;
	}

	public int getStartDate() {
		return startDate;
	}

	public void setStartDate(int startDate) {
		this.startDate = startDate;
	}

	public int getEndDate() {
		return endDate;
	}

	public void setEndDate(int endDate) {
		this.endDate = endDate;
	} 

	
}
