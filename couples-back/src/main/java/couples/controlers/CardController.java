package couples.controlers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import couples.model.Card;
import couples.repositories.*;

@RestController
@RequestMapping("/couples")
public class CardController {

	@Autowired
	CardsRepository repository;

	@RequestMapping(path = "/cards", method = RequestMethod.GET)
	public List<Card> list() {
		List<Card> cards = new ArrayList<>();

		Iterable<Card> it = repository.findAll();

		Iterator<Card> iterator = it.iterator();

		while (iterator.hasNext()) {
			cards.add(iterator.next());
		}

		return cards;
	}
}
