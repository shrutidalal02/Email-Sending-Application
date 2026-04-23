import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

    //backend URL: 
    private apiUrl = 'http://localhost:8081/api/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
