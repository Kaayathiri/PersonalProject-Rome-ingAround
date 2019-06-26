package romeAround.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import romeAround.business.iRomeService;
import romeAround.constants.Constants;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class romeController {

	@Autowired
	private iRomeService romeService;

	@GetMapping(path = Constants.ACTIVITY)
	public ResponseEntity<List<romeAround>> getActivity() {
		return ResponseEntity.ok(romeService.getActivity());
	}
	
	@RequestMapping(value = Constants.ACTIVITY, method = RequestMethod.POST)
	public ResponseEntity<romeAround> postActivity(@RequestBody romeAround romeAround) {
		return ResponseEntity.ok(romeService.addActivity(romeAround));
	}

	@RequestMapping(value = Constants.ACTIVITY_WITH_PARAM, method = RequestMethod.DELETE)
	public ResponseEntity<List<romeAround>> deleteActivity(@PathVariable("id") long id) {
		if (!romeService.findById(id).isPresent()) {
			return ResponseEntity.badRequest().build();
		}
		romeService.deleteActivity(id);
		return ResponseEntity.ok(romeService.getActivity());
	}



}