import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private hs: HttpService) {}
  msg: string = '';
  ngOnInit(): void {
    this.msg = this.hs.msg();
  }
}
