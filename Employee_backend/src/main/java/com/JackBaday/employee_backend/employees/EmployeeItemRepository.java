package com.JackBaday.employee_backend.employees;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EmployeeItemRepository extends JpaRepository<EmployeeItem, Long> {
	@Query(value = "SELECT * FROM employees ORDER BY updated_at DESC LIMIT 20", nativeQuery = true)
	   List<EmployeeItem> findLast20Employees();
}
