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
            "title": "Csere fenőkőhöz",
            "description": "Kedvező csere élezőkövekhez a Sekélyesnél! 3 naponta ismétlődik",
            "requirements": [
                {
                    "item": {
                        "id": 1000,
                        "name": "Cső",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/91/LeadPipe.png",
                        "wikiUrl": ""
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1001,
                        "name": "Kőkés",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/9c/ImprovisedKnife.png",
                        "wikiUrl": ""
                    },
                    "count": 1
                }           
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1002,
                        "name": "Fenőkő",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/9f/Whetstone.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Sharpening_Stone"
                    },
                    "count": 2
                }
            ],
            "isRepeatable": true,
            "location": {
                "name": "Otmel",
                "locationUrl": "https://dayz.ginfo.gg/#c=-72;83;5"
            },
            "cooldown": {
                "quantity": 3,
                "unit": "Day"
            },
            "expiration": {
                "quantity": 0,
                "unit": "Never"
            }
        }
    ]`;
}