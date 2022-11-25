import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appName';

  login($event:any){
    console.log('loging',$event)
  }
  createUser($event:any){
    console.log('create account',$event)
  }
}
