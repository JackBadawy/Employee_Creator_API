package io.nology.employee_backend.userApplications;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class UserApplicationItemService {
	
    @Autowired
    private UserApplicationItemRepository repo;
    
    @Autowired 
    private ModelMapper mapper;
    
    public UserApplicationItem createItem(CreateUserApplicationDTO data) {
    	
    	
    	UserApplicationItem newItem = mapper.map(data, UserApplicationItem.class);
    	
    	return this.repo.save(newItem);
    }
    
    public List<UserApplicationItem> getAll() {
    	return this.repo.findAll();
    }
    
    public Optional<UserApplicationItem> findItemById(Long id) {
    	return this.repo.findById(id);
    }
    
    public Optional<UserApplicationItem> updateById(@Valid UpdateUserApplicationDTO data, Long id) {
    	
    	Optional<UserApplicationItem> maybeItem = this.findItemById(id);
    	
    	if (maybeItem.isEmpty()) {
    		return maybeItem;
    	}
    	
    	UserApplicationItem foundItem = maybeItem.get();
    	
    	mapper.map(data, foundItem);
    	
    	UserApplicationItem updatedItem = this.repo.save(foundItem);
    	
    	return Optional.of(updatedItem);
    }
    
    public boolean deletePostById(Long id) {
    	Optional<UserApplicationItem> maybeItem = this.repo.findById(id);
    	if (maybeItem.isEmpty()) return false;
    	this.repo.delete(maybeItem.get());
    	return true;
    }

}
