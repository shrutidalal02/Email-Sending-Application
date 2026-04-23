import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EmailServiceService } from '../email-service.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email-component',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './email-component.component.html',
  styleUrl: './email-component.component.css'
})
export class EmailComponentComponent {

  email = {
    to: '',
    subject: '',
    message: ''
  };

  //Updated SnackBar feature
  constructor(
  private emailService: EmailServiceService,
  private snackBar: MatSnackBar
) {}

send() {
  this.emailService.sendEmail(this.email).subscribe({

  //adding success message on the snackbar :
  next: (res: any) => {
  console.log("Response:", res);    //debugging purpose

  this.snackBar.open(res.message || "Email Sent Successfully!", 'Close', {
    duration: 2000
  });

    // next: (res: any) => {
    //   this.snackBar.open(res.message, 'Close', { duration: 2000 });

      //CLEARING THE FORM HERE if email sent successfully
      this.email = {
        to: '',
        subject: '',
        message: ''
      };
    },

    //adding error message on the snackbar :
 error: (err) => {
      console.error("Error:", err);

      const msg = err?.error?.error || err?.error?.message || "Error sending email";
      this.snackBar.open(msg, 'Close', { duration: 2000 });
    }
  });

  
  //   error: (err) => {
  //     this.snackBar.open('Error sending email', 'Close', { duration: 2000 });
  //   }
  // });
}

}
//Before updating SnackBar:

//   constructor(private emailService: EmailServiceService) {}

//  send() {
//   console.log("Sending data:", this.email);

//   this.emailService.sendEmail(this.email).subscribe({
//     next: (res) => {
//       console.log("Success:", res);
//       alert("Email Sent Successfully!");
//     },
//     error: (err) => {
//       console.error("Full Error:", err); 
//       alert("Error sending email");
//     }
//   });
//}


