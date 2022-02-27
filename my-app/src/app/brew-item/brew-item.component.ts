import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brew-item',
  templateUrl: './brew-item.component.html',
  styleUrls: ['./brew-item.component.css'],
})
export class BrewItemComponent implements OnInit {
  @Input() name!: string;
  @Input() country!: string;
  @Input() website!: string;
  constructor() {}

  ngOnInit(): void {}
}
