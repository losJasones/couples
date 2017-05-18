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

import couples.repositories.ScoreRepository;
import couples.repositories.UserRepository;




@RestController
@RequestMapping("/couples")
public class ScoreController {

    @Autowired
    private ScoreRepository scoreRepository;   
    @Autowired
    private UserRepository userRepository;   
    

    @RequestMapping(path="/score", method = RequestMethod.POST)
    public void create(@RequestBody Score score) {

        score = scoreRepository.save(score);
    }

   /* @RequestMapping(method = RequestMethod.GET,value="/topten")
    public List<Score> findByTen(){
    	return findByTen();
    }*/
    
    
    
    @RequestMapping(path="/scores", method = RequestMethod.GET)
    public List<Score> list() {
        List<Score> scores = new ArrayList<>();
        
        
        Iterable<Score> it = scoreRepository.findAll();
        Iterator<Score> iterator = it.iterator();
        while(iterator.hasNext()) {
        	scores.add(iterator.next());
        }

        return scores;
    }
}

    
    
    
    

