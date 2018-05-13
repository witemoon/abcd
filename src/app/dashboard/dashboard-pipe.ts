
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'add_comma_pipe'})
export class AddCommaPipe implements PipeTransform {
  transform(nStr) {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
}

@Pipe({name: 'is_Greater_Than_Current_Date'})
export class Is_Greater_Than_Current_Date implements PipeTransform {
  transform(date) {
    var incomming_date = new Date(date);
    var today = new Date();
    console.log('----------incomming date',incomming_date,'-------------today',today,'---------',incomming_date.getTime() > today.getTime())
    return incomming_date.getTime() > today.getTime()
  }
}
