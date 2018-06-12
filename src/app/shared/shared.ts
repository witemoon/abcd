import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
    public braedValue = new BehaviorSubject<any>(null);
    public loaderStatus = false;
}