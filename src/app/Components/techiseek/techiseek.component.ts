import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-techiseek',
  templateUrl: './techiseek.component.html',
  styleUrls: ['./techiseek.component.scss']
})
export class TechiseekComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;

  constructor() { }

  ngOnInit() {
  }
  changeNavState() {
    this.sidenav.changeTheState();
  }

}
