package couples.repositories;



import org.springframework.data.repository.CrudRepository;

import couples.model.Avatar;



public interface AvatarRepository extends CrudRepository<Avatar, Integer>  {
	
	
	
	
}

/*

Ejemplo

@Query("SELECT b FROM ")
List<Movie> nombre metodo();

*/