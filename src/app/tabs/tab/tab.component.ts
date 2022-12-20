import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() selected:boolean = false;
  @Input() title !: string;
  @Input() template !:TemplateRef<any>;
  @Input() context !:any;
  @Input() isClosable:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
