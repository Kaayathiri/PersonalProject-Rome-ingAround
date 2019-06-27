package romeAround.business;

import java.util.List;
import java.util.Optional;

import romeAround.domain.romeAround;

public interface IRomeService {


		 List<romeAround> getActivity();

		void deleteActivity(Long id);

		romeAround addActivity(romeAround romeAround);

		Optional<romeAround> findById(long id);

	}