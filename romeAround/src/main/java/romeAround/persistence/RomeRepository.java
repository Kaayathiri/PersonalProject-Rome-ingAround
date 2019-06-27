package romeAround.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import romeAround.domain.RomeAround;

	@Repository
	public interface RomeRepository extends JpaRepository<RomeAround, Long> {
		
	}

