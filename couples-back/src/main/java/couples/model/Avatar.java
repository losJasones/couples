package couples.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Avatar {
	@Id		
	private Integer id;
	private String name;
	private String img;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	


}
	
	
