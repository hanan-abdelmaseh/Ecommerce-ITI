import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
 @Input() Title:string = '';
  @Input() dataList:any[] = [];
  @Output() selectedData= new  EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  getData(event:any){
this.selectedData.emit(event);
  }

}
