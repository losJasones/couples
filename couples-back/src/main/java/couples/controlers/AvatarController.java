package couples.controlers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import couples.model.Avatar;
import couples.repositories.*;

@RestController
@RequestMapping("/couples/avatars")
public class AvatarController {

	@Autowired
	AvatarRepository repository;

	@RequestMapping(method = RequestMethod.GET)
	public List<Avatar> list() {
		List<Avatar> avatars = new ArrayList<>();

		Iterable<Avatar> it = repository.findAll();

		Iterator<Avatar> iterator = it.iterator();

		while (iterator.hasNext()) {
			avatars.add(iterator.next());
		}

		return avatars;
	}

}
