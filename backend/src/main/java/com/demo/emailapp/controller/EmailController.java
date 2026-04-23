package com.demo.emailapp.controller;


import com.demo.emailapp.model.EmailRequest;
import com.demo.emailapp.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request) {
        return emailService.sendEmail(request);
    }
    
//    public String sendEmail(@RequestBody EmailRequest request) {
//        return emailService.sendEmail(request);
//    }
}
