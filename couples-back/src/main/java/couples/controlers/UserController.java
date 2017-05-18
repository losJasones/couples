package couples.controlers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import couples.model.User;
import couples.repositories.UserRepository;

@RestController
@RequestMapping("/couples/user")
public class UserController {

	@Autowired
	UserRepository repository;

	@RequestMapping(method = RequestMethod.POST)
	public Object create(@RequestBody User user) {

		if (repository.findByEmail(user.getEmail()) == null) {

			user = repository.save(user);
			return Collections.singletonMap("id", user.getId());
		}
		return "EMAIL REPETIDO";
		// aqui deberia ir un mensaje de error email repetido
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{email:.+}")
	public User getemail(@PathVariable String email) {

		System.out.println(email);

		return repository.findByEmail(email);
	}

	@RequestMapping(method = RequestMethod.GET)
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