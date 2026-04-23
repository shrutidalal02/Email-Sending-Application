package com.demo.emailapp.service;

import com.demo.emailapp.model.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;
    
    
    public ResponseEntity<?> sendEmail(EmailRequest request) {
    	
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(request.getTo());
            message.setSubject(request.getSubject());
            message.setText(request.getMessage());

            mailSender.send(message);
            
            //To get the success message in console if the email sent successfully:
            System.out.println("Email sent successfully to: " + request.getTo()); 
            
            //ResponseEntity sends data to the client
            return ResponseEntity.ok("Email Sent Successfully!");
            
            //before adding ResponseEntity:
            //return "Email Sent Successfully!";
            
        } catch (Exception e) {
        	
            //To get the error message in console if the error sending an email:
        	 System.out.println("Error: " + e.getMessage());
        	 
        	 return ResponseEntity.status(500).body(
        	        java.util.Map.of("error", "Error sending email: " + e.getMessage())
        	        );
        	 
        	//before adding ResponseEntity:
            //return "Error sending email: " + e.getMessage();
        }
    }
}
