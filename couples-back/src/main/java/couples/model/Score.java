package couples.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "scores")
public class Score {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int numfails;
	
	@ManyToOne
	@JoinColumn(name = "user_id")	
	private User users;

	
	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumfails() {
		return numfails;
	}

	public void setNumfails(int numfails) {
		this.numfails = numfails;
	}

}
