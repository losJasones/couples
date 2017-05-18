package couples.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;

import couples.model.Score;

public interface ScoreRepository extends CrudRepository<Score, Integer> {

	@Query("SELECT s FROM Score s ORDER BY s.numfails")
	List<Score> getOrderByNumfails();
}