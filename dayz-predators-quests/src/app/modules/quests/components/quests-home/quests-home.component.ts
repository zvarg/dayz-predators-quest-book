import { Component, OnInit } from '@angular/core';
import { Quest } from 'app/modules/shared/models/quest';
import { QuestProvider } from 'app/modules/shared/providers/quest.provider';

@Component({
  selector: 'app-quests-home',
  templateUrl: './quests-home.component.html',
  styleUrls: ['./quests-home.component.scss']
})
export class QuestsHomeComponent implements OnInit {

  constructor(readonly questsProvider: QuestProvider) { }

  quests: Quest[];

  ngOnInit(): void {
    this.questsProvider.all().subscribe(
      response => { this.quests = response }
    );
  }
}