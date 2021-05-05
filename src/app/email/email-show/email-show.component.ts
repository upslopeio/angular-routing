import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {

  email: Email | undefined;

  // TODO: make this component always show the email based on the ID in the route
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    const emailId = this.emailService.getEmails()[0].id;
    this.email = this.emailService.getEmailById(emailId);
  }

}
