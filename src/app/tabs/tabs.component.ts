import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit,AfterContentInit{
  @ContentChildren(TabComponent) tabs !: QueryList<TabComponent>
  @Input() headerTemplate !: TemplateRef<any>
  constructor() { }


  ngAfterContentInit(): void {
    if(this.tabs){
      this.tabs.first.selected = true
    }
  }
 
  ngOnInit(): void {
  }

  onSelect(tab:TabComponent){
    this.tabs.forEach(tab=>tab.selected=false);
    tab.selected = true
  }

}
