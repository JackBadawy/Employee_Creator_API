package io.nology.employee_backend.posts;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class EmployeeItemService {
	
    @Autowired
    private EmployeeItemRepository repo;
    
    @Autowired 
    private ModelMapper mapper;
    
    public EmployeeItem createItem(CreateEmployeeItemDTO data) {
    	
    	
    	EmployeeItem newItem = mapper.map(data, EmployeeItem.class);
    	
    	return this.repo.save(newItem);
    }
    
    public List<EmployeeItem> getAll() {
    	return this.repo.findAll();
    }
    
    public Optional<EmployeeItem> findItemById(Long id) {
    	return this.repo.findById(id);
    }
    
    public Optional<EmployeeItem> updateById(@Valid UpdateEmployeeItemDTO data, Long id) {
    	
    	Optional<EmployeeItem> maybeItem = this.findItemById(id);
    	
    	if (maybeItem.isEmpty()) {
    		return maybeItem;
    	}
    	
    	EmployeeItem foundItem = maybeItem.get();
    	
    	mapper.map(data, foundItem);
    	
    	EmployeeItem updatedItem = this.repo.save(foundItem);
    	
    	return Optional.of(updatedItem);
    }
    
    public boolean deletePostById(Long id) {
    	Optional<EmployeeItem> maybeItem = this.repo.findById(id);
    	if (maybeItem.isEmpty()) return false;
    	this.repo.delete(maybeItem.get());
    	return true;
    }

}
