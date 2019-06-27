package romeAround.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import romeAround.persistence.*;
import romeAround.domain.RomeAround;

@Service
	public class RomeService implements IRomeService {

	 @Autowired
	 
		private RomeRepository romeRepository;
	
	
		public List<RomeAround> getActivity() {
		
			return romeRepository.findAll();
		}


		@Override
		public RomeAround addActivity(RomeAround romeAround) {
		
			return romeRepository.save(romeAround);
		}

		@Override
		public Optional<RomeAround> findById(long id) {
		
			return  romeRepository.findById(id);
		}

		@Override
		public void deleteActivity(Long id) {
			romeRepository.deleteById(id);
			
		}
	}

		
		