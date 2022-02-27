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
  onDisplay(str: string, item: any): boolean {
    str = str.toLowerCase();
    let name: string;
    let country: string;
    let flag: boolean = false;

    name = item.name.toLowerCase();
    country = item.country.toLowerCase();

    flag = name.includes(str) || country.includes(str);

    console.log(str);
    console.log(name);
    console.log(country);
    console.log(flag);

    return flag;
  }

  // old function
  // onDisplay(str: string, item: string): boolean {
  //   str = str.toLowerCase();
  //   item = item.toLowerCase();
  //   let flag: boolean;

  //   console.log(str);
  //   console.log(item);
  //   flag = item.includes(str);
  //   console.log(flag);

  //   return flag;
  // }
}
