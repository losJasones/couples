package couples.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.*;

import couples.model.Score;

public interface ScoreRepository extends CrudRepository<Score, Integer> {

	// OJO LAS QUERY CON HIBERNATE NO SE HACEN CON LOS NOMBRES DE LAS TABLAS
	// SINO CON LOS NOMBRES DE LOS OBJETOS
	//@Query("SELECT s FROM Score s WHERE s.id=id")
	//boolean findById(int id);
}