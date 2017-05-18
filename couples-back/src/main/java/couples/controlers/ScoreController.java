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

import couples.repositories.ScoreRepository;

@RestController
@RequestMapping("/couples")
public class ScoreController {

	@Autowired
	private ScoreRepository scoreRepository;

	@RequestMapping(path = "/score", method = RequestMethod.POST)
	public Object create(@RequestBody Score score) {
		
		//score.setUsers(user);
		score = scoreRepository.save(score);
		return true;
	}

	@RequestMapping(path = "/topTenScores", method = RequestMethod.GET)
	public List<Score> top() {
		List<Score> scores = new ArrayList<>();
		Iterable<Score> it = scoreRepository.getOrderByNumfails();
		Iterator<Score> iterator = it.iterator();
		int cont = 1;
		while (iterator.hasNext() && cont < 11) {
			scores.add(iterator.next());
			cont++;
		}

		return scores;
	}
	
	@RequestMapping(path = "/scores", method = RequestMethod.GET)
	public List<Score> list() {
		List<Score> scores = new ArrayList<>();

		Iterable<Score> it = scoreRepository.findAll();

		Iterator<Score> iterator = it.iterator();

		while (iterator.hasNext()) {
			scores.add(iterator.next());
		}

		return scores;
	}
	@RequestMapping(method = RequestMethod.DELETE, value = "score/{id}")
	public Object delete(@PathVariable Integer id) {

		scoreRepository.delete(id);

		return "OK";
	}

	
	@RequestMapping(method = RequestMethod.GET, value = "score/{id}")
	public Score get(@PathVariable long id) {

		Score b = scoreRepository.findOne((int) id);

		return b;
	}
}
