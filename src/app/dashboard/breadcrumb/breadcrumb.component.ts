import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadCrumb: any;
  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.braedValue.asObservable().subscribe(
      (data:any) => {
        console.log(data);
        this.breadCrumb = data;
      }
    );
  }

}
