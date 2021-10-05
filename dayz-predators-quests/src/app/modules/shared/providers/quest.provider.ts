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
            "description": "Kedvező csere élezőkövekhez a Sekélyesnél. 3 naponta ismétlődik",
            "requirements": [
                {
                    "value": {
                        "id": 1000,
                        "name": "Cső",
                        "avatarUrl": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                },
                {
                    "value": {
                        "id": 1001,
                        "name": "Kőkés",
                        "avatarUrl": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                }           
            ],
            "rewards": [
                {
                    "value": {
                        "id": 1002,
                        "name": "Fenőkő",
                        "avatarUrl": "",
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