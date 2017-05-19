package couples.controlers;

import java.util.ArrayList;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import couples.model.Score;
import couples.model.User;
import couples.repositories.UserRepository;

@RestController
@RequestMapping("/couples")
public class UserController {

	@Autowired
	UserRepository repository;

	@RequestMapping(path = "/user", method = RequestMethod.POST)
	public Object create(@RequestBody User user) {
		if (repository.findOne(user.getEmail()) == null) {
			List<Score> scores = new ArrayList<>();
			user.setScores(scores);
			user = repository.save(user);
			return true;
		}
		return false;
	}

	@RequestMapping(method = RequestMethod.GET, path = "/user/{email:.+}")
	public User getUser(@PathVariable String email) {

		System.out.println(email);

		return repository.findOne(email);
	}

	@RequestMapping(path = "/users", method = RequestMethod.GET)
	public List<User> list() {
		List<User> users = new ArrayList<>();

		Iterable<User> it = repository.findAll();

		Iterator<User> iterator = it.iterator();

		while (iterator.hasNext()) {
			users.add(iterator.next());
		}

		return users;
	}

}

