import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-periode-form',
  templateUrl: './periode-form.component.html',
  styleUrls: ['./periode-form.component.scss']
})
export class PeriodeFormComponent implements OnInit {
  @Input()
  periode:any;
  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();
  form : FormGroup<{position:FormControl,name:FormControl,weight:FormControl,symbol:FormControl}>
  constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
      name:'',
      position:'',
      symbol:'',
      weight:''
  })
  }

  ngOnInit(): void {
    this.form.setValue({
      name:this.periode?.name ||"",
      position:this.periode?.position || -1,
      symbol:this.periode?.symbol ||"",
      weight:this.periode?.weight || 0
  })
  }

}
