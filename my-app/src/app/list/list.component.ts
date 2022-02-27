import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  brews: any;
  search: string = '';
  constructor(private hs: HttpService) {}

  ngOnInit(): void {
    this.brews = this.hs.getBeer().subscribe((data: Object) => {
      this.brews = data;
      console.log(this.brews);
    });
  }
}
