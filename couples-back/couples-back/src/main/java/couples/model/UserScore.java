package couples.model;


public class UserScore {

	private String name ;
	private String lastname ;
	private String email;
	private int numfails;
	
	
	public int getNumfails() {
		return numfails;
	}
	public void setNumfails(int numfails) {
		this.numfails = numfails;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	

}
