package com.JackBaday.employee_backend.approvedUsers;

import jakarta.validation.constraints.Pattern;

public class UpdateApprovedUserDTO {
	
	
	@Pattern(regexp = "^(?=\\S).*$", message="approvedBy cannot be empty")
	private String approvedBy;

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	
}
