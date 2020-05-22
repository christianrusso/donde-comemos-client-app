import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'discountFormat',
  })
  export class DiscountFormatPipe implements PipeTransform {
    transform(value: number) {
      if (value){
        return `( -${value}% )`;
      } else {
        return "";
      }
    }
  }