import { Component, ComponentFactoryResolver, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { tap } from 'rxjs';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('entry',{read:ViewContainerRef}) entry !: ViewContainerRef
  @ViewChild('tmp') tmp !:TemplateRef<any>
  title = 'appName';
  ctx = {name:'Mbappé',$implicit:"French"}
  constructor(){
  }
  login($event:any){
    console.log('loging',$event)
  }

  ngAfterViewInit(){

    // create component dynamicly
  //  const component = this.entry.createComponent(AuthFormComponent);
  //   component.instance.title = 'Create Account'
  //   component.instance.submited.pipe(tap(this.login)).subscribe();
    // this.entry.createComponent(AuthFormComponent);

    // create template dynamicly
    // this.entry.createEmbeddedView(this.tmp,{$implicit:'France', name:"Mbappé"})
  }
}
