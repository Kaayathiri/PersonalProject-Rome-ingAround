package romeAround.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public class romeRepository {

	@Repository
	public interface TodoRepository extends JpaRepository<romeAround, Long> {
		
	}
}
