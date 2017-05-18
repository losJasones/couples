package couples.model;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name="cards")
public class Card {
	
	@Id		
	private Integer id;	
	private String name;
	private String img;
	private String isVisible;
	
	
	
	
	public Card(Integer id, String name, String img, String isVisible) {
		super();
		this.id = id;
		this.name = name;
		this.img = img;
		this.isVisible = isVisible;
	}
	
	
	public Card() {
		super();
	}


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getIsVisible() {
		return isVisible;
	}
	public void setIsVisible(String isVisible) {
		this.isVisible = isVisible;
	}
	
	
	
}
