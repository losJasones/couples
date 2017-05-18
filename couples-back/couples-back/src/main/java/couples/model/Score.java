package couples.model;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;




@Entity
@Table(name="scores")
public class Score {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private int numfails;
	@ManyToMany
	@JoinTable(name="join_table", joinColumns={@JoinColumn(name="score_id")},
	inverseJoinColumns={@JoinColumn(name="user_id")})
	private List<User> users;
	
	
	
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getNumfails() {
		return numfails;
	}
	public void setNumfails(int numfails) {
		this.numfails = numfails;
	}
	

}



/*package couples.model;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;




@Entity
@Table(name="scores")
public class Score {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int numfails;
	private String email;
	
	
	
	public int getId() {
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
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

}*/
