import { Component, Input, OnInit } from '@angular/core';
import { Quest } from 'app/modules/shared/models/quest';

@Component({
  selector: 'quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent {
  @Input() quest: Quest;
}
