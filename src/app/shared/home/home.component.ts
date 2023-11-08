import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
    {
      id:1,
      name: "Mehsul1",
      details: "Cox Yaxsi Mehsuldu Meslehet gorulur",
      price: 5,
      imgurl: "../../assets/img/1.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
