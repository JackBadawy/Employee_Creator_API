package io.nology.employee_backend.approvedUsers;

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
@RequestMapping("/users")
public class ApprovedUserItemController {
	@Autowired
	private ApprovedUserItemService approvedUserItemService;
	
	@PostMapping
	public ResponseEntity<ApprovedUserItem> createPost(@Valid @RequestBody CreateApprovedUserDTO data) {
		ApprovedUserItem createdItem = this.approvedUserItemService.createItem(data);
		return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<ApprovedUserItem>> getAllPosts() {
		List<ApprovedUserItem> allItems = this.approvedUserItemService.getAll();
		return new ResponseEntity<>(allItems, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ApprovedUserItem> getItemById(@PathVariable Long id) {
		Optional<ApprovedUserItem> maybeItem = this.approvedUserItemService.findItemById(id);
		
		if (maybeItem.isPresent()) {
            ApprovedUserItem foundItem = maybeItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<ApprovedUserItem> updateItemById(@Valid @RequestBody UpdateApprovedUserDTO data, @PathVariable Long id) {
		
		Optional<ApprovedUserItem> maybeUpdatedItem = this.approvedUserItemService.updateById(data, id);
		
		if (maybeUpdatedItem.isPresent()) {
            ApprovedUserItem foundItem = maybeUpdatedItem.get();
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApprovedUserItem> deletePostById(@PathVariable Long id) {
		boolean deleted = this.approvedUserItemService.deletePostById(id);
		
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
