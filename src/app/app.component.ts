import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loader: boolean;
  constructor(public sharedLoader: SharedService) {

  }

  ngOnInit() {
    this.sharedLoader.loaderStatus.asObservable().subscribe(
      res => {
        this.loader = res;
      }
    )
  }
}
