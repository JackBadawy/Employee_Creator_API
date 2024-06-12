package com.JackBaday.employee_backend.employees;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/items")
public class EmployeeItemController {
	
	@Autowired
	private EmployeeItemService employeeItemService;
	
	@PostMapping
	public ResponseEntity<EmployeeItem> createPost(@Valid @RequestBody CreateEmployeeItemDTO data) {
		EmployeeItem createdItem = this.employeeItemService.createItem(data);
		return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<EmployeeItem>> getAllPosts() {
		List<EmployeeItem> allItems = this.employeeItemService.getAll();
		return new ResponseEntity<>(allItems, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmployeeItem> getItemById(@PathVariable Long id) {
		Optional<EmployeeItem> maybeItem = this.employeeItemService.findItemById(id);
		
		if (maybeItem.isPresent()) {
            EmployeeItem foundItem = maybeItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<EmployeeItem> updateItemById(@Valid @RequestBody UpdateEmployeeItemDTO data, @PathVariable Long id) {
		
		Optional<EmployeeItem> maybeUpdatedItem = this.employeeItemService.updateById(data, id);
		
		if (maybeUpdatedItem.isPresent()) {
            EmployeeItem foundItem = maybeUpdatedItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<EmployeeItem> deletePostById(@PathVariable Long id) {
		boolean deleted = this.employeeItemService.deletePostById(id);
		
		if (!deleted) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

	@PostMapping("/generate")
	public ResponseEntity<List<EmployeeItem>> generateEmployees() {
        List<EmployeeItem> employees = employeeItemService.generateRandomEmployees(20);
        return ResponseEntity.ok(employees);
    }
	
	@DeleteMapping("/deleteLast20")
	   public ResponseEntity<Void> deleteLast20Employees() {
	       employeeItemService.deleteLast20Employees();
	       return ResponseEntity.noContent().build();
	   }

	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<Object> handleValidationExceptions(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
    });
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
}}
