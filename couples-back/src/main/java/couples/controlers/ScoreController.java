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
import couples.repositories.ScoreRepository;




@RestController
@RequestMapping("/couples/score")
public class ScoreController {

    @Autowired
    ScoreRepository repository;   
    

    @RequestMapping(method = RequestMethod.POST)
    public Object create(@RequestBody Score score) {

        score = repository.save(score);

        return Collections.singletonMap("id", score.getId());
    }

    @RequestMapping(method = RequestMethod.GET)
    /*public List<Score> findByTen(){
    	return findByTen();
    }*/
    
    public List<Score> list() {
        List<Score> score = new ArrayList<>();

        Iterable<Score> it = repository.findAll();
        
        Iterator<Score> iterator = it.iterator();
        
        while(iterator.hasNext()) {
            score.add(iterator.next());
        }

        return score;
    }
}

    
    
    
    

