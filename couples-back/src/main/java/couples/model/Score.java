package couples.model;



import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;




@Entity(name="scores")
public class Score {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int numfails;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="USERS_ID")
	private User user;
	
	
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
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}

}
