import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  msg(): string {
    return 'k ok ok';
  }
}
