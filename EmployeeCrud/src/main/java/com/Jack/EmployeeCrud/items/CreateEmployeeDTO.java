package com.Jack.EmployeeCrud.items;

import org.springframework.context.annotation.Conditional;

import jakarta.validation.constraints.NotBlank;

public class CreateEmployeeDTO {

	//need to generate Full name
	
	@NotBlank 
	private String firstName;
	
	private String middleName;
	
	@NotBlank 
	private String lastName;
	
	private String fullName;
	
	

	@NotBlank
	private char[] contract; 
	
	private char[] remainingContractTime;
	
	@NotBlank
	private char[] email;
	
	@NotBlank
	private int[] phoneNumber; //should this be required?
	
	@NotBlank 
	private char[] address;
	
	@NotBlank
	private int salary;
	
	@NotBlank
	private boolean currentEmployee;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = firstName + middleName + lastName; //this will create error if middle name blank
	}

	public char[] getContract() {
		return contract;
	}

	public void setContract(char[] contract) {
		this.contract = contract;
	}

	public char[] getRemainingContractTime() {
		return remainingContractTime;
	}

	public void setRemainingContractTime(char[] remainingContractTime) {
		this.remainingContractTime = remainingContractTime;
	}

	public char[] getEmail() {
		return email;
	}

	public void setEmail(char[] email) {
		this.email = email;
	}

	public int[] getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int[] phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public char[] getAddress() {
		return address;
	}

	public void setAddress(char[] address) {
		this.address = address;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public boolean isCurrentEmployee() {
		return currentEmployee;
	}

	public void setCurrentEmployee(boolean currentEmployee) {
		this.currentEmployee = currentEmployee;
	}
	
	
	
}
