package rome.persistence;



import com.qa.todo.domain.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
	
}