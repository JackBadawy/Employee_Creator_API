package io.nology.employee_backend.posts;

import java.util.Date;

import org.springframework.lang.Nullable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "employees")
public class EmployeeItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String employmentType; //contract or perm
	
	@Column
	private String contractLength;
	
	@Column
	private String email;
	
	@Column
	private String address;
	
	@Column 
	private boolean currentEmployee;
	
	@Column
	private int salary;
	
	@Column 
	private boolean fulltime;
	
	@Column 
	private int weeklyHours;
	
	@Column
	private int[] startDate;
	
	@Column 
	private int[] endDate; 

	@Temporal(TemporalType.TIMESTAMP)
	@Column (nullable = false, updatable = false)
	private Date createdAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date updatedAt;
	
	@PrePersist
	public void onCreate() {
		Date timestamp = new Date();
		createdAt = timestamp;
		updatedAt = timestamp;
	}
	
	@PreUpdate
	public void onUpdate() {
		updatedAt = new Date();
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

	public Long getId() {
		return id;
	}

}
