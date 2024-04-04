package io.nology.employee_backend.userApplications;

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

import io.nology.employee_backend.posts.CreateEmployeeItemDTO;
import io.nology.employee_backend.posts.EmployeeItem;
import io.nology.employee_backend.posts.EmployeeItemService;
import io.nology.employee_backend.posts.UpdateEmployeeItemDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/applications")
public class UserApplicationItemController {
	@Autowired
	private UserApplicationItemService userApplicationItemService;
	
	@PostMapping
	public ResponseEntity<UserApplicationItem> createPost(@Valid @RequestBody CreateUserApplicationDTO data) {
		UserApplicationItem createdItem = this.userApplicationItemService.createItem(data);
		return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<UserApplicationItem>> getAllPosts() {
		List<UserApplicationItem> allItems = this.userApplicationItemService.getAll();
		return new ResponseEntity<>(allItems, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UserApplicationItem> getItemById(@PathVariable Long id) {
		Optional<UserApplicationItem> maybeItem = this.userApplicationItemService.findItemById(id);
		
		if (maybeItem.isPresent()) {
            UserApplicationItem foundItem = maybeItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<UserApplicationItem> updateItemById(@Valid @RequestBody UpdateUserApplicationDTO data, @PathVariable Long id) {
		
		Optional<UserApplicationItem> maybeUpdatedItem = this.userApplicationItemService.updateById(data, id);
		
		if (maybeUpdatedItem.isPresent()) {
            UserApplicationItem foundItem = maybeUpdatedItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<UserApplicationItem> deletePostById(@PathVariable Long id) {
		boolean deleted = this.userApplicationItemService.deletePostById(id);
		
		if (!deleted) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
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
}

}
