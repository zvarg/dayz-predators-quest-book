import { Component, Input } from '@angular/core';
import { Cooldown } from 'app/modules/shared/models/cooldown';

@Component({
  selector: 'cooldown',
  templateUrl: './cooldown.component.html',
  styleUrls: ['./cooldown.component.scss', '../../styles/shared-style.scss']
})
export class CooldownComponent {
  @Input() cooldown: Cooldown;
  @Input() maticon: string = 'info';
  @Input() tooltip: string = '';  
}