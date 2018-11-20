import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'custom-modal',
  template: `
    <div class="modal in" *ngIf="show ==true">
      <div class="modal-header">
        <h1 class="modal-title">{{title}}</h1>
      </div>
      <div class="modal-content">{{content}}</div>    
      <div class="modal-footer" *ngIf="footer">
        <button class="success" >ok</button>
        <button class="close" (click)="toggle()">close</button>
      </div>      
    </div>
    <div *ngIf="show  ==true" class="in modal-overlay" ></div>
  `,
  styles: [
    `
    body {
      margin: 0;
  }
  
  .modal-overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.7;
      left: 0;
      top: 0;
      z-index: 1;
      display: none;
  }
  
  .modal {
      background: white;
      position: relative;
      width: 60%;
      /*  height: 50px; */
      border-radius: 3px;
      width: 50%;
      left: 25%;
      padding: 10px;
      z-index: 2;
      display: none;
  }
  
  .in {
      display: block;
  }
  
  .modal.mini {
      left: 35%;
      width: 30%;
  }
  
  .modal.maxi {
      left: 10%;
      width: 80%;
  }
  
  button {
      padding: 5px 10px;
      min-width: 100px;
      display: inline-block;
      margin: auto;
  }
    `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ModalComponent implements OnInit {

  @Input() title = 'title';
  @Input() content = 'content';
  @Input() show = false;
  @Input() footer = false;
  @Output() action = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    console.log(this.show);
    this.show=!this.show;
    this.action.emit(this.show);
  }

}
