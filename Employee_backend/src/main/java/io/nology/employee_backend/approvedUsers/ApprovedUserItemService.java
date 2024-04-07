package io.nology.employee_backend.approvedUsers;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class ApprovedUserItemService {
	@Autowired
    private ApprovedUserRepository repo;
    
    @Autowired 
    private ModelMapper mapper;
    
    public ApprovedUserItem createItem(CreateApprovedUserDTO data) {
    	
    	
    	ApprovedUserItem newItem = mapper.map(data, ApprovedUserItem.class);
    	
    	return this.repo.save(newItem);
    }
    
    public List<ApprovedUserItem> getAll() {
    	return this.repo.findAll();
    }
    
    public Optional<ApprovedUserItem> findItemById(Long id) {
    	return this.repo.findById(id);
    }
    
    public Optional<ApprovedUserItem> updateById(@Valid UpdateApprovedUserDTO data, Long id) {
    	
    	Optional<ApprovedUserItem> maybeItem = this.findItemById(id);
    	
    	if (maybeItem.isEmpty()) {
    		return maybeItem;
    	}
    	
    	ApprovedUserItem foundItem = maybeItem.get();
    	
    	mapper.map(data, foundItem);
    	
    	ApprovedUserItem updatedItem = this.repo.save(foundItem);
    	
    	return Optional.of(updatedItem);
    }
    
    public boolean deletePostById(Long id) {
    	Optional<ApprovedUserItem> maybeItem = this.repo.findById(id);
    	if (maybeItem.isEmpty()) return false;
    	this.repo.delete(maybeItem.get());
    	return true;
    }
}
