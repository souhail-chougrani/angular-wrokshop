import { Mail } from './../models/mail.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDataService } from '../../../in-memory-data.service';
import { tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MailService {
    private url = 'api/messages'; 

    constructor(private inMemoSerivce: InMemoryDataService,private http : HttpClient) { }

    getMails(){
        return this.http.get<Mail[]>(this.url)
    }

    getMail(id:number){
        return this.http.get(`${this.url}/${id}`)
    }

    searchMailByFolder(folder:string){
      return this.http.get(`${this.url}/?folder=${folder}`)
    }


    addMail(mail:Mail){
       
        return  this.http.post(this.url,mail)
    }

    updateMail(mail:Partial<Mail>){
        return  this.http.put(this.url,mail)
    }

    deleteMail(id:number){
        return this.http.delete(`${this.url}/${id}`)
    }

    
}