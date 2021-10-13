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
            "title": "A túlélés alapjai 1",
            "description": "Csak hozd el nekem ezeket a tárgyakat és kapsz egy szép jutalmat.",
            "requirements": [
                {
                    "item": {
                        "id": 1000,
                        "name": "Körte",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/b/b0/Pear.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Pear"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1001,
                        "name": "Rongy",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/c/c4/Rags.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Rags"
                    },
                    "count": 6
                },
                {
                    "item": {
                        "id": 1002,
                        "name": "Kő",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/d/d4/Stone.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Stone"
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1003,
                        "name": "Sült babkonzerv",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1004,
                        "name": "Konzervnyitó",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/4/49/Item_Can_-_opener.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Can_Opener"
                    },
                    "count": 1
                }
            ],
            "isRepeatable": true,
            "location": {
                "name": "Otmel",
                "locationUrl": "https://dayz.ginfo.gg/#c=-72;83;5"
            },
            "cooldown": {
                "quantity": 1,
                "unit": "Day"
            },
            "expiration": {
                "quantity": 0,
                "unit": "Never"
            }
        },
        {
            "id": 1,
            "title": "Csere fenőkőhöz",
            "description": "Kedvező csere fenőkövekhez a Sekélyesnél!",
            "requirements": [
                {
                    "item": {
                        "id": 1005,
                        "name": "Cső",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/91/LeadPipe.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Pipe"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1006,
                        "name": "Kőkés",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/9c/ImprovisedKnife.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Stone_Knife",
                        "madeBySelf": true
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1007,
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
        },
        {
            "id": 2,
            "title": "Csirkék vihara",
            "description": "Baseball ütővel öld meg a csirkéket és szerezd meg a számszeríj alsó részét.",
            "requirements": [
                {
                    "item": {
                        "id": 1008,
                        "name": "Barna csirke",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/a/a3/Chicken.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Hen"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1009,
                        "name": "Fehér csirke",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/a/a3/Chicken.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Hen"
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1010,
                        "name": "Számszeríj törzse",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                }
            ],
            "isRepeatable": true,
            "location": {
                "name": "Otmel",
                "locationUrl": "https://dayz.ginfo.gg/#c=-72;83;5"
            },
            "cooldown": {
                "quantity": 7,
                "unit": "Day"
            },
            "expiration": {
                "quantity": 0,
                "unit": "Never"
            }
        },
        {
            "id": 3,
            "title": "Vitaminok gyűjteménye",
            "description": "2 tabletta antibiotikum gyümölcsökhöz és bogyókhoz",
            "requirements": [
                {
                    "item": {
                        "id": 1000,
                        "name": "Körte",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/b/b0/Pear.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Pear"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1011,
                        "name": "Alma",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/7/7d/Apple.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Apple"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1012,
                        "name": "Szilva",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/e/e6/Plum.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Plum"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1013,
                        "name": "Bodzabogyó",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/1/1e/Samcubus.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Elderberries"
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1011,
                        "name": "Tetracycline",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/2/26/Tetracycline_Antibiotics.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Tetracycline_Pills"
                    },
                    "count": 1
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
        },
        {
            "id": 4,
            "title": "Gyógyszerek cseréje",
            "description": "Kihagyhatatlan ajánlat a kísérleti vírusellenes oltásért. ",
            "requirements": [
                {
                    "item": {
                        "id": 1015,
                        "name": "Vérteszt",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1016,
                        "name": "Bandázs",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/91/Bandage_new.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Bandage"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1017,
                        "name": "Kodein tabletta (fájdalomcsillapító)",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/4/45/Painkillers.png",
                        "wikiUrl": "hhttps://static.wikia.nocookie.net/dayz_gamepedia/images/4/45/Painkillers.png"
                    },
                    "count": 3
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1018,
                        "name": "Kísérleti gyógyszer a vírus ellen (piros)",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                }
            ],
            "isRepeatable": true,
            "location": {
                "name": "Otmel",
                "locationUrl": "https://dayz.ginfo.gg/#c=-72;83;5"
            },
            "cooldown": {
                "quantity": 7,
                "unit": "Day"
            },
            "expiration": {
                "quantity": 0,
                "unit": "Never"
            }
        },
        {
            "id": 5,
            "title": "Kesztyű kötelekért",
            "description": "Talán kesztyűre van szükséged? De cserébe kötelek kellenek. Ha viszont nincs maszkod, akkor ne gyere, tudod koronavírus van...",
            "requirements": [
                {
                    "item": {
                        "id": 1018,
                        "name": "Kötél",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/b/b4/Rope.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Rope"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1019,
                        "name": "Orvosi maszk",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/b/bb/SurgicalMask.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Surgical_Mask",
                        "madeBySelf": true
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1020,
                        "name": "Taktikai kesztyű",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/4/4a/Tacticalglovesbeige.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Tactical_Gloves"
                    },
                    "count": 1
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
        },
        {
            "id": 6,
            "title": "Kiváló víztartalom",
            "description": "Látod mi a neve ennek a gyönyörű serpenyőnek? AroroB ee",
            "requirements": [
                {
                    "item": {
                        "id": 1021,
                        "name": "Műanyag palack",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/d/dc/Waterbottle_New.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Plastic_Bottle"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "id": 1022,
                        "name": "Vodka",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1023,
                        "name": "Nagy fazék (Predator)",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 1
                }
            ],
            "isRepeatable": false,
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
        },
        {
            "id": 7,
            "title": "Horgászat alapok 1",
            "description": "A horgászathoz horgászbotra lesz szükséged. Készítsd el magad egy hosszú botból és kötélből, valamint horogból. A horog csontokból készíthető",
            "requirements": [
                {
                    "item": {
                        "id": 1024,
                        "name": "Egyszerű horgászbot",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/d/dc/Waterbottle_New.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Simple_Fishing_Rod",					
                        "madeBySelf": true
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1025,
                        "name": "Csont horog",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/97/BoneFishingHook.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Bone_Fishing_Hook",			
                        "madeBySelf": true
                    },
                    "count": 3
                },
                {
                    "item": {
                        "id": 1026,
                        "name": "Ponty",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/6/6b/Carp4.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Carp"
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1027,
                        "name": "Horgászbot",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/2/2f/FishingRod.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Fishing_Rod"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1028,
                        "name": "Giliszta",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/f/f5/Earthworm.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Earthworm"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "id": 1037,
                        "name": "Horog",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/9/94/Fishinghook.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Fishing_Hook"
                    },
                    "count": 1
                }
            ],
            "isRepeatable": false,
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
        },
        {
            "id": 8,
            "title": "Bőr javítókészlet",
            "description": "Hozz varrókészletet és botokat",
            "requirements": [
                {
                    "item": {
                        "id": 1029,
                        "name": "Varrókészlet",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/1/18/Sewing-kit.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Sewing_Kit"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1030,
                        "name": "Bot",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/d/dd/Wooden_Stick.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Short_Stick"
                    },
                    "count": 2
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1031,
                        "name": "Bőr varrókészlet",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/2/2f/FishingRod.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Fishing_Rod"
                    },
                    "count": 1
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
        },
        {
            "id": 9,
            "title": "Apró dolgok",
            "description": "Kevés dolog egy doboz konzervért cserébe.",
            "requirements": [
                {
                    "item": {
                        "id": 1032,
                        "name": "Csirke filé",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/3/3d/RawChickenBreast.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Chicken_Steak"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1033,
                        "name": "Zseblámpa",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/4/4d/Flashlight.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Flashlight"
                    },
                    "count": 1
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1034,
                        "name": "Tonhalkonzerv",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/8/85/Canned_Tuna.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Canned_Tuna"
                    },
                    "count": 1
                }
            ],
            "isRepeatable": true,
            "location": {
                "name": "Otmel",
                "locationUrl": "https://dayz.ginfo.gg/#c=-72;83;5"
            },
            "cooldown": {
                "quantity": 1,
                "unit": "Day"
            },
            "expiration": {
                "quantity": 0,
                "unit": "Never"
            }
        },
        {
            "id": 10,
            "title": "Csere sóoldat csomagra",
            "description": "Kevés dolog egy csomagért cserébe!",
            "requirements": [
                {
                    "item": {
                        "id": 1035,
                        "name": "Hőmérő",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/0/07/Items_Medical_Thermometer.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Medical_Thermometer"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1013,
                        "name": "Bodzabogyó",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/1/1e/Samcubus.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Elderberries"
                    },
                    "count": 3
                },
                {
                    "item": {
                        "id": 1015,
                        "name": "Vérteszt",
                        "thumbnail": "",
                        "wikiUrl": ""
                    },
                    "count": 2
                }
            ],
            "rewards": [
                {
                    "item": {
                        "id": 1036,
                        "name": "IV Start Kit",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/c/ca/IVStartkit.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/IV_Start_Kit"
                    },
                    "count": 1
                },
                {
                    "item": {
                        "id": 1036,
                        "name": "Sóoldat tasak",
                        "thumbnail": "https://static.wikia.nocookie.net/dayz_gamepedia/images/2/22/Salinebag1.png",
                        "wikiUrl": "https://dayz.fandom.com/wiki/Saline_Bag"
                    },
                    "count": 1
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