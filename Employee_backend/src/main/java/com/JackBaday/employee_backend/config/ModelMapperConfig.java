package com.JackBaday.employee_backend.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.JackBaday.employee_backend.employees.CreateEmployeeItemDTO;

@Configuration
public class ModelMapperConfig {
	
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		
		mapper.getConfiguration().setSkipNullEnabled(true);
		
		return mapper;
	}
	
	private class StringTrimConverter implements Converter<String, String> {
		
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}

}
