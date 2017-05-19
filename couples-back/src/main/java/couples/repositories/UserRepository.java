package couples.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import couples.model.User;

public interface UserRepository extends CrudRepository<User, String> {

	//User findByEmail(@Param("email") String email);

}
