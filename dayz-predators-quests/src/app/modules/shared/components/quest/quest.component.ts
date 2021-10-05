import { Component, Input, OnInit } from '@angular/core';
import { Quest } from 'app/modules/shared/models/quest';

@Component({
  selector: 'quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit {
  @Input() quest: Quest;
  questThumbnail: string;

  ngOnInit(): void {
    this.questThumbnail = this.quest.rewards[0].item.thumbnail;
  }
}
