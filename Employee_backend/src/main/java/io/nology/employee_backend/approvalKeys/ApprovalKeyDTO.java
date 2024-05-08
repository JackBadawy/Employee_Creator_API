package io.nology.employee_backend.approvalKeys;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

public class ApprovalKeyDTO {
	@NotBlank
	public String username;
	
	@NotBlank
	public String password;
	
	@NotBlank
	public String uuidKey;

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

	public String getUuidKey() {
		return uuidKey;
	}

	public void setUuidKey(String uuidKey) {
		this.uuidKey = uuidKey;
	}
	
	

}
