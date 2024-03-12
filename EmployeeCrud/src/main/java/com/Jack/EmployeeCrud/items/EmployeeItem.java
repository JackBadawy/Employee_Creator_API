package com.Jack.EmployeeCrud.items;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees_db")
public class EmployeeItem {
@Id
@GeneratedValue
private Long id;

@Column 
private String fullName;

@Column
private String firstName;

@Column
private String middleName;

@Column
private String lastName;

@Column 
private char[] contract; //using char[] for security, im thinking i'll have this as a string incase anyone would need to look at the raw data base

@Column 
private char[] remainingContractTime;

@Column 
private char[] email;

@Column 
private int[] phoneNumber; 

@Column
private char[] address; 

@Column
private int salary; //add logic for preventing crazy saleries caused by user input error.

@Column
private boolean currentEmployee;

//maybe add timestamps

}
