package couples.repositories;



import org.springframework.data.repository.CrudRepository;

import couples.model.Card;


public interface CardsRepository extends CrudRepository<Card, Integer>  {
	
	
	
	
}

/*

Ejemplo

@Query("SELECT b FROM ")
List<Movie> nombre metodo();

*/