package couples.controlers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		List<User> user = new ArrayList<>();
		score.setUsers(user);
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

}
