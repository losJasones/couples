package couples.repositories;


	


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import couples.model.User;


	public interface UserRepository extends CrudRepository<User, String>  {
	
	//@Query("SELECT u FROM USERS u WHERE u.email= :email")
	//List<User> findByEmail(@Param("email") String email);
		
		//User findByEmail(@Param("email") String email);
		
	}
