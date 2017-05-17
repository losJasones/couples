package couples.controlers;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import couples.model.Score;
import couples.model.User;
import couples.model.UserScore;
import couples.repositories.ScoreRepository;
import couples.repositories.UserRepository;




@RestController
@RequestMapping("/couples/score")
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;   
    @Autowired
    private UserRepository userRepository;   
    

    @RequestMapping(method = RequestMethod.POST)
    public Object create(@RequestBody Score score) {

        score = scoreRepository.save(score);

        return Collections.singletonMap("id", score.getId());
    }

   /* @RequestMapping(method = RequestMethod.GET,value="/topten")
    public List<Score> findByTen(){
    	return findByTen();
    }*/
    
    @RequestMapping(method = RequestMethod.GET)
    public List<UserScore> list() {
        List<UserScore> userScores = new ArrayList<UserScore>();
        
        
        Iterable<Score> it = scoreRepository.findAll();
        Iterator<Score> iterator = it.iterator();
        while(iterator.hasNext()) {
        	Score score = (Score) iterator.next();
        	User user = userRepository.findByEmail(score.getEmail());        	
            UserScore userScore = new UserScore();
            userScore.setEmail(user.getEmail());
            userScore.setName(user.getName());
            userScore.setLastname(user.getLastname());
            userScore.setNumfails(score.getNumfails());
            userScores.add(userScore);
            System.out.println(userScore.getEmail());
        }

        return userScores;
    }
}

    
    
    
    

