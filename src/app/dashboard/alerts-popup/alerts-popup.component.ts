import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared'

@Component({
  selector: 'alerts-popup',
  templateUrl: './alerts-popup.component.html',
  styleUrls: ['./alerts-popup.component.css']
})
export class AlertsPopupComponent implements OnInit {

  @Input() showPopup = false;
  @Input() defaultLeaseCount: number = 0;
  @Input() equipmentLeaseCount: number = 0;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  closeButtonClicked() {
    this.showPopup = false;
    // this.router.navigate(['/dashboard/home']);
  }
  changeRoute(url) {
    // this.router.navigateByUrl('/dashboard/epp', { skipLocationChange: true });
    // setTimeout(() => this.router.navigate(url));
    this.sharedService.DefaultClick.next(true);
  }
}
