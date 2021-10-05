import { Component, Input } from '@angular/core';
import { Location } from 'app/modules/shared/models/location';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss', '../../styles/shared-style.scss']
})
export class LocationComponent {
  @Input() location: Location;
}