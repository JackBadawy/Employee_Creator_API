package io.nology.employee_backend.approvedUsers;

import jakarta.validation.constraints.Pattern;

public class UpdateApprovedUserDTO {
	@Pattern(regexp = "^(?=\\S).*$", message="Username cannot be empty")
	private String username;
	
	@Pattern(regexp = "^(?=\\S).*$", message="Password cannot be empty")
	private String password;
	
	@Pattern(regexp = "^(?=\\S).*$", message="approvedBy cannot be empty")
	private String approvedBy;

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

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
}
