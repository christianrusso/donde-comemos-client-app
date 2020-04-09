import { DetailsPage } from './../../pages/details/details';
import { Component, Input } from '@angular/core';
import { App } from 'ionic-angular';
import { QualificationsProvider } from '../../providers/qualifications/qualifications';
import { TagMacroProvider } from '../../providers/tag-macro/tag-macro';
@Component({
  selector: 'restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantComponent {

  @Input("restaurant") restaurant;

  icons: Array<any>;
  promedioC: any;
  tagsMacro: any;

  constructor(private app: App,
    public qualificationsProvider: QualificationsProvider,
    public tagMacroProvider: TagMacroProvider) {


  }

  ngOnInit() {
    this.qualificationsProvider.get(this.restaurant.id).then((qualification: any) => {
      let promedio = qualification.reduce((previous, current) =>
        previous += parseFloat(current.average), 0)
      this.promedioC = promedio / (qualification.length)
    })

    this.tagMacroProvider.get(this.restaurant.id).then((highTag: any) => {
      this.tagsMacro = highTag.slice(0, 4);

    })
  }

  goToDetails() {
    this.app.getActiveNav().push(DetailsPage, { restaurant: this.restaurant })
  }

  likePost(item, $event) {
    item.likeImg = !item.likeImg;
    $event.stopPropagation();
  }

}
