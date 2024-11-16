package com.ecom.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

	@Entity
	public class Transactions {

		@Id
	    private String transactionId;
	    private Long orderId;
	    private String username;
	    private String firstname;
	    private String lastname;
	    private String phone;
	    private String email;
	    
		Transactions() {
			super();
			// TODO Auto-generated constructor stub
		}

		Transactions(String transactionId, Long orderId, String username, String firstname, String lastname,
				String phone, String email) {
			super();
			this.transactionId = transactionId;
			this.orderId = orderId;
			this.username = username;
			this.firstname = firstname;
			this.lastname = lastname;
			this.phone = phone;
			this.email = email;
		}

		

		public String getTransactionId() {
			return transactionId;
		}

		public void setTransactionId(String transactionId) {
			this.transactionId = transactionId;
		}

		public Long getOrderId() {
			return orderId;
		}

		public void setOrderId(Long orderId) {
			this.orderId = orderId;
		}

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		@Override
		public String toString() {
			return "Transactions [transactionId=" + transactionId + ", orderId=" + orderId + ", username=" + username
					+ ", firstname=" + firstname + ", lastname=" + lastname + ", phone=" + phone + ", email=" + email + "]";
		}
}
