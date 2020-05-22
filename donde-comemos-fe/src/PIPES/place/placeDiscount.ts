import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'place',
})
export class PlacePipe implements PipeTransform {
  transform(value: string) {
    switch(value){
        case "DEL":{
            return "Delivery";
        }
        case "LOC": {
            return "Take-away";
        }
        default: {
            return "Restaurant";
        }
    }
  }
}