package com.JackBaday.employee_backend.approvedUsers;

import org.springframework.lang.Nullable;

import jakarta.validation.constraints.NotBlank;

public class CreateApprovedUserDTO {
	@NotBlank 
	private String username;
	
	@NotBlank 
	private String password;
	
	@Nullable
	private String approvedBy;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}
	
	

}
