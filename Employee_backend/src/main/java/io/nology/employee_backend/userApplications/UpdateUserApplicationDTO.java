package io.nology.employee_backend.userApplications;

import jakarta.validation.constraints.Pattern;

public class UpdateUserApplicationDTO {
	@Pattern(regexp = "^(?=\\S).*$", message="Username cannot be empty")
	private String username;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Password cannot be empty")
	private String password;

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
	
	//probably no need to update approved by ever
}
