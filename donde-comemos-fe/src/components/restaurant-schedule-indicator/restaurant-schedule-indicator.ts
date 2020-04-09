import { Component, Input } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'restaurant-schedule-indicator',
  templateUrl: 'restaurant-schedule-indicator.html'
})

export class RestaurantScheduleIndicatorComponent {

  status: string
  openCloseMessage: string

  @Input("hours") set hours (schedule){
    if (schedule.length == 0) {
      this.openCloseMessage = "HOY CERRADO"
      this.status = "closedToday"
    } else {
      let openHours = schedule.filter(hours => {
        let now = moment()
        let opensAt = moment(hours.opening_hour, 'HH:mm:ss')
        let closesAt = moment(hours.closing_hour, 'HH:mm:ss')
 
        return now.isBetween(opensAt, closesAt)
      })

      let isOpenNow = openHours.length > 0
      if (isOpenNow) {
        let closesAt = openHours[0].closing_hour
        this.openCloseMessage = `ABIERTO - CIERRA A LAS ${this.formatHour(closesAt)}`
        this.status = "openedToday"
      } else {
        let willOpen = schedule.filter(hours => {
          let now = moment()
          let opensAt = moment(hours.opening_hour, 'HH:mm:ss')
   
          return now.isBefore(opensAt)
        })
        if (willOpen.length > 0) {
          let opensAt = willOpen[0].opening_hour
          this.openCloseMessage = `ABRE HOY A LAS ${this.formatHour(opensAt)}`
          this.status = "willOpenToday"
        } else {
          this.openCloseMessage = `HOY CERRADO`
          this.status = "closedToday"
        }
      }
    }
  }

  formatHour(hour) {
    let hours = hour.split(':')[0]
    let minutes = hour.split(':')[1]
    return minutes != '00' ? `${hours}:${minutes}` : hours
  }

  constructor() {
    this.status = ""
    this.openCloseMessage = ""
  }
}