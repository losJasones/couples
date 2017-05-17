package couples.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import couples.model.Score;

public interface ScoreRepository extends CrudRepository<Score, Integer>  {
	
	
	//@Query("SELECT s.numfails,u.NAME,u.EMAIL,u.AVATAR FROM SCORES s, USERS u WHERE s.USERS_ID=u.ID ORDER BY s.numfails ASC ")
	//List<Score> findByTen();

	
}