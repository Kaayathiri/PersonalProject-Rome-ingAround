package romeAround.business;

import java.util.List;
import java.util.Optional;

import romeAround.domain.romeAround;


public class IRomeService {


		List<romeAround> getActivity();

		void deleteTodo(Long id);

		romeAround addActivity(romeAround romeAround);

		Optional<romeAorund> findById(long id);

	}