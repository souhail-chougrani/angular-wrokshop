import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MailService } from '../components/services/mail.service';
import { Mail } from '../components/models/mail.interface';

@Component({
  selector: 'mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.scss']
})
export class MailFolderComponent implements OnInit {

  readonly messages$:Observable<Mail[]> = this.mailService.getMails()
  
  constructor(private mailService : MailService) { }

  ngOnInit(): void {
    this.mailService.deleteMail(1).subscribe();
  }

}
