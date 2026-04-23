# Email Sender Web Application

A full-stack Email Sender application built using **Angular** for frontend and **Spring Boot** for backend, integrated with SMTP (JavaMailSender) for sending emails.

---

## Features

- Send emails to any valid email address
- Responsive UI using Angular
- Angular Material UI components
- RESTful API integration with Spring Boot
- SMTP email sending using JavaMailSender
- Form validation and error handling
- Snackbar notifications for success/error messages
- Secure credential handling using environment variables

---

## Tech Stack

### Frontend:
- Angular
- TypeScript
- Angular Material
- HTML, CSS

### Backend:
- Spring Boot
- Spring Web
- JavaMailSender (Spring Mail)
- REST API

---

## Project Structure
email-app/
│
├── backend/        → Spring Boot Backend
│   ├── src/
│   ├── pom.xml
│
├── src/            → Angular Frontend
│   ├── app/
│   ├── assets/
│
├── angular.json
├── package.json


## Setup Instructions: 
1.Backend Setup (Spring Boot)
Open backend folder in STS/IDE
Configure application.properties:
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=YOUR_EMAIL
spring.mail.password=YOUR_APP_PASSWORD
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

Run backend:
mvn spring-boot:run

2. Frontend Setup (Angular)
npm install
ng serve

Frontend runs on:

http://localhost:4200

**Key Learnings**
Angular + Spring Boot integration
REST API communication
SMTP email sending using JavaMailSender
Handling async operations in Angular
Secure credential management using environment variables

**Future Enhancements**
Email attachments support
User authentication (OAuth)
Email templates
Email history tracking


**Author**
Developed by Shruti Dalal
