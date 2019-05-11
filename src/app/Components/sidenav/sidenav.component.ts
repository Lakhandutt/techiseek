import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer') drawer:any;

  constructor() { }

  ngOnInit() {
  }

  changeTheState(){
    this.drawer.toggle();
  }
}
