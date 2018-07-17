import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
    public braedValue = new BehaviorSubject<any>(null);
    public loaderStatus = new BehaviorSubject<boolean>(false);
    public DefaultClick = new BehaviorSubject<boolean>(false);
}