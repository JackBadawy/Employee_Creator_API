package io.nology.employee_backend.approvalKeys;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.nology.employee_backend.posts.CreateEmployeeItemDTO;
import io.nology.employee_backend.posts.EmployeeItem;
import io.nology.employee_backend.posts.UpdateEmployeeItemDTO;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class ApprovalKeyService {
//dont add update functionality
	@Autowired
    private ApprovalKeyRepository repo;
    
    @Autowired 
    private ModelMapper mapper;
	
    //add checks here
    public ApprovalKeyItem createItem(ApprovalKeyDTO data) {
    	
    ApprovalKeyItem newItem = mapper.map(data, ApprovalKeyItem.class);
    	
    return this.repo.save(newItem);
    }
    
    public List<ApprovalKeyItem> getAll() {
    	return this.repo.findAll();
    }
    
    public Optional<ApprovalKeyItem> findItemById(Long id) {
    	return this.repo.findById(id);
    }
    
    public boolean deleteKeyById(Long id) {
    	Optional<ApprovalKeyItem> maybeItem = this.repo.findById(id);
    	if (maybeItem.isEmpty()) return false;
    	this.repo.delete(maybeItem.get());
    	return true;
    }
    
}
