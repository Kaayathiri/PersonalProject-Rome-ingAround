package romeAround.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import romeAround.domain.romeAround;

	@Repository
	public interface romeRepository extends JpaRepository<romeAround, Long> {
		
	}

