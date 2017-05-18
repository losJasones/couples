package couples.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "users")
// , uniqueConstraints = {
// @UniqueConstraint(columnNames = "email")})
public class User {
	@Id
	private String email;
	// @GeneratedValue(strategy=GenerationType.AUTO)
	// private int id;
	private String firstName;
	private String lastName;
	@ManyToMany
	@JoinTable(name="join_table", joinColumns={@JoinColumn(name="user_id")},
	inverseJoinColumns={@JoinColumn(name="score_id")})
	private List<Score> scores;
	@ManyToOne
	@JoinColumn(name="avatar_id")
	private Avatar avatar;

	public List<Score> getScores() {
		return scores;
	}

	public void setScores(List<Score> scores) {
		this.scores = scores;
	}

	// public int getId() {
	// return id;
	// }
	// public void setId(int id) {
	// this.id = id;
	// }
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	// @Column(name = "email", unique = true, nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Avatar getAvatar() {
		return avatar;
	}

	public void setAvatar(Avatar avatar) {
		this.avatar = avatar;
	}
	
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}
