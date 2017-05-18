package couples.repositories;

import org.springframework.data.repository.CrudRepository;

import couples.model.Card;

public interface CardsRepository extends CrudRepository<Card, Integer> {

}
