package romeAround.business;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import romeAround.persistence.*;
import romeAround.domain.romeAround;



	@Service
	
	public class romeService implements IRomeService {
		
		@Autowired
		private romeRepository romeRepository;
		

	
		public List<romeAround> getActivity() {
		
			return romeRepository.findAll();
		}

		@Override
		public void deleteTodo(Long id) {
			romeRepository.deleteById(id);
			
		}

		@Override
		public romeAround addActivity(romeAround romeAround) {
		
			return romeRepository.save(romeAround);
		}

		@Override
		public Optional<romeAround> findById(long id) {
		
			return  romeRepository.findById(id);
		}
	}

		
		