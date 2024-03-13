package com.Jack.EmployeeCrud.items;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	@Autowired
	private EmployeeRepository repo;
	
	@Autowired 
    private ModelMapper mapper;
	
	public EmployeeItem createItem(CreateEmployeeDTO data) {
		EmployeeItem newItem = mapper.map(data, EmployeeItem.class);
		return this.repo.save(newItem);
	}
	
	
}
