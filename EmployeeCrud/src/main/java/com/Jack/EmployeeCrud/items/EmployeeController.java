package com.Jack.EmployeeCrud.items;

public class EmployeeController {
	public ResponseEntity<List<EmployeeItem>> getAllEmployees() {
		List<EmployeeItem> allItems = this.EmployeeItemService.getAll()
	}
}
