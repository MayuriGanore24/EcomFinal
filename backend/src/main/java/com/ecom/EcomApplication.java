package com.ecom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import com.ecom.service.EmailSenderService;



@SpringBootApplication
//@EnableSwagger2
//@EnableWebMvc
public class EcomApplication {
	@Autowired
	private EmailSenderService senderService;
	public static void main(String[] args) {
		SpringApplication.run(EcomApplication.class, args);
	}
	@EventListener(ApplicationReadyEvent.class)
    public void sendMail() {
        senderService.sendEmail("ganoremayuri24@gmail.com", "This is subject", "This is body");
    }
}
