package romeAround.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RomeAround {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String activity_name;

	public RomeAround() {

	}

	public RomeAround(Long id, String activity_name) {
		this.id = id;
		this.activity_name = activity_name;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getActivity_name() {
		return activity_name;
	}

	public void setActivity_name(String activity_name) {
		this.activity_name = activity_name;
	}

	@Override
	public String toString() {
		return "Friend [id=" + id + ",activity_name=" + activity_name + "]";
	}
}
