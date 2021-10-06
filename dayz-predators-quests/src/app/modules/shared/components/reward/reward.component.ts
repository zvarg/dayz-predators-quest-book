import { Component, Input } from '@angular/core';
import { Reward } from 'app/modules/shared/models/reward';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent {
  @Input() requirement: Reward;
}