import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() statechange=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  changeNavState(){
    this.statechange.emit(null);
  }
}
