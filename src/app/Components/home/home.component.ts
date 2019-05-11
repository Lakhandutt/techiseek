import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../Services/home.service';
import { phone } from '../../Modals/phone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData:phone[];

  constructor(private homeService:HomeService ) { }
  
  ngOnInit() {
    this.homeService.getHomeData().subscribe(
      response=>{
        console.log(response);

        this.homeData=response;
      }
    )
  }

}
