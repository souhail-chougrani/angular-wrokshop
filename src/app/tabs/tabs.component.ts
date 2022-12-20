import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit,AfterContentInit{
  @ContentChildren(TabComponent) tabs !: QueryList<TabComponent>;
  @ViewChild('entry',{read:ViewContainerRef}) entry !: ViewContainerRef;
  @Input() headerTemplate !: TemplateRef<any>
  constructor() { }


  ngAfterContentInit(): void {
    if(this.tabs){
      this.tabs.first.selected = true
    }
  }

  ngAfterViewInit(){
  }
 
  ngOnInit(): void {
  }

  onSelect(tab:TabComponent){
    this.tabs.forEach(tab=>tab.selected=false);
    tab.selected = true
  }

  openTab(title:string,template:TemplateRef<any>,context?:any){
  const component =  this.entry.createComponent(TabComponent);
   component.instance.title = title
   component.instance.template = template
   component.instance.context = context
   component.instance.isClosable =true;
   this.tabs.reset([...this.tabs,component.instance])
   
    this.onSelect(component.instance);
  }

  onClose(tabToRemove:TabComponent,index:number){
    const restedTabs = this.tabs.filter(tab=>tabToRemove !== tab)
    this.tabs.reset([...restedTabs]);

    this.entry.remove(index-1)
    this.tabs.first.selected = true;
  }

}
