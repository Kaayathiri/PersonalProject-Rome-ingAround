package romeAround.business;

import java.util.List;
import java.util.Optional;

import romeAround.domain.RomeAround;

public interface IRomeService {


		 List<RomeAround> getActivity();

		void deleteActivity(Long id);

		RomeAround addActivity(RomeAround romeAround);

		Optional<RomeAround> findById(long id);

	}