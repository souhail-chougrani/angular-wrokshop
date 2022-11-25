import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appName';
  rememberChecked!: boolean;
  login($event:any){
    console.log('loging',$event,this.rememberChecked)
  }
  createUser($event:any){
    console.log('create account',$event)
  }
  onRemember($event:MatSlideToggleChange){
    this.rememberChecked = $event.checked;
  }
}
