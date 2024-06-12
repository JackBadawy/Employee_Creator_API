package com.JackBaday.employee_backend.employees;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Pattern;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UpdateEmployeeItemDTO {

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @NotBlank(message = "Employment type must be specified")
    private String employmentType; 

    private String contractLength; 

    @Email(message = "Email should be valid")
    private String email;

    private String address;

    @NotNull(message = "Current employee status must be specified")
    private Boolean currentEmployee;

    private Integer salary;

    @NotNull(message = "Fulltime status must be specified")
    private Boolean fulltime;

    private Integer weeklyHours;
    
	private int[] startDate;
	
	private int[] endDate; 

    public int[] getStartDate() {
		return startDate;
	}

	public void setStartDate(int[] startDate) {
		this.startDate = startDate;
	}

	public int[] getEndDate() {
		return endDate;
	}

	public void setEndDate(int[] endDate) {
		this.endDate = endDate;
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

    public Boolean getCurrentEmployee() {
        return currentEmployee;
    }

    public void setCurrentEmployee(Boolean currentEmployee) {
        this.currentEmployee = currentEmployee;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Boolean getFulltime() {
        return fulltime;
    }

    public void setFulltime(Boolean fulltime) {
        this.fulltime = fulltime;
    }

    public Integer getWeeklyHours() {
        return weeklyHours;
    }

    public void setWeeklyHours(Integer weeklyHours) {
        this.weeklyHours = weeklyHours;
    }
}
