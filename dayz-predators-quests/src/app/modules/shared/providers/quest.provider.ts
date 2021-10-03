import { Quest } from "app/modules/shared/models/quest";
import { of, Observable } from "rxjs";

export class QuestProvider {

    all(): Observable<Quest[]> {
        const quests = JSON.parse(this.questsJsons);

        return of(quests);
    }

    private questsJsons = `[
        {
            "id": 0,
            "title": "Élezőkés"
        },
        {
            "id": 1,
            "title": "Valami"
        }
    ]`;
}