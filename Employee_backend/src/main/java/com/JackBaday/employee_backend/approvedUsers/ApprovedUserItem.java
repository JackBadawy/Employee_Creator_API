package com.JackBaday.employee_backend.approvedUsers;

import java.util.Date;

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
@Table(name = "approved_users")
public class ApprovedUserItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String username;
	
	@Column
	private String password;
	
	@Column
	private String approvedBy;

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

	public Long getId() {
		return id;
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

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	

	public Date getUpdatedAt() {
		return updatedAt;
	}

	
	
	
}
