import { Component, Input } from '@angular/core';
import { Item } from 'app/modules/shared/models/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss', '../../styles/shared-style.scss']
})
export class ItemComponent {
  @Input() item: Item;
}