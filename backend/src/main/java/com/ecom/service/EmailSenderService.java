package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
@Service
public class EmailSenderService {
	@Autowired
	private JavaMailSender mailSender;
	public void sendEmail(String toMail,
			String subject,
			String body)
	{
		SimpleMailMessage message=new SimpleMailMessage();
		message.setFrom("ganoremayuri24@gmail.com");
		message.setTo(toMail);
		message.setText(body);
		message.setSubject(subject);
		mailSender.send(message);
		System.out.println("Mail sent Successfully.....");
	}
}
