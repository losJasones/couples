package couples.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;

import couples.model.Score;

public interface ScoreRepository extends CrudRepository<Score, Long>  {
	
	
	//@Query("SELECT s , u FROM Score s, User u WHERE s.email=u.email")
	//@Query (" SELECT s, u FROM Score s, User u INNER JOIN u.email s")
	//List<Score> findByTen();
    
}