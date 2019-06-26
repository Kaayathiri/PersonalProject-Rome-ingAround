package rome.rest;

import java.util.List;



public class romeController {
	@RestController
	@CrossOrigin(origins = "http://localhost:3000")


		@Autowired
		private ITodoService todoService;

		@GetMapping(path = Constants.TODO)
		public ResponseEntity<List<Todo>> getTodo() {
			return ResponseEntity.ok(todoService.getTodo());
		}
		
		@RequestMapping(value = Constants.TODO, method = RequestMethod.POST)
		public ResponseEntity<Todo> postTodo(@RequestBody Todo todo) {
			return ResponseEntity.ok(todoService.addTodo(todo));
		}

		@RequestMapping(value = Constants.TODO_WITH_PARAM, method = RequestMethod.DELETE)
		public ResponseEntity<List<Todo>> deleteTodo(@PathVariable("id") long id) {
			if (!todoService.findById(id).isPresent()) {
				return ResponseEntity.badRequest().build();
			}
			todoService.deleteTodo(id);
			return ResponseEntity.ok(todoService.getTodo());
		}



	}