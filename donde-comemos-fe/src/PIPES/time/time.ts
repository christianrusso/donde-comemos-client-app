import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: string) {
    return `${value.split(':')[0]}:${value.split(':')[1]}`
  }
}
