package com.JackBaday.employee_backend.posts;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.javafaker.Faker;

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
    
    private final Faker faker = new Faker();
    private final Random random = new Random();
    
    public List<EmployeeItem> generateRandomEmployees(int quant) {
    	List<EmployeeItem> employees = new ArrayList<>();
    	for (int i = 0; i < quant; i++) {
    		 EmployeeItem employee = new EmployeeItem();
             employee.setFirstName(faker.name().firstName());
             employee.setLastName(faker.name().lastName());
             employee.setEmail(faker.internet().emailAddress());
             employee.setAddress(faker.address().streetAddress());
             boolean isContract = random.nextBoolean();
             employee.setEmploymentType(isContract ? "contract" : "permanent");
             if (isContract) {
                 employee.setContractLength(faker.number().numberBetween(1, 10) + " yr");
             } else {
                 employee.setContractLength(null);
             }
             employee.setCurrentEmployee(random.nextBoolean());
             employee.setSalary(faker.number().numberBetween(30000, 120000));
             boolean isFulltime = random.nextBoolean();
             employee.setFulltime(isFulltime);
             employee.setWeeklyHours(isFulltime ? 40 : faker.number().numberBetween(10, 30));
             employee.setStartDate(new int[]{faker.number().numberBetween(1, 28), faker.number().numberBetween(1, 12), faker.number().numberBetween(2010, 2023) });
             employee.setEndDate(new int[]{faker.number().numberBetween(1, 28), faker.number().numberBetween(1, 12), faker.number().numberBetween(2023, 2030)});
             
             employees.add(employee);
    	}
    	return repo.saveAll(employees);
    }
    
    public void deleteLast20Employees() {
        List<EmployeeItem> last20Employees = repo.findLast20Employees();
        repo.deleteAll(last20Employees);
    }

}
