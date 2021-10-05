import { Cooldown } from "app/modules/shared/models/cooldown";
import { Requirement } from "app/modules/shared/models/requirement";
import { Reward } from "app/modules/shared/models/reward";

export class Quest {
    
    /**
     * Unique identifier of the quest.
     */
    id: number;
    
    /**
     * Title or short description of the quest.
     */
    title: string;

    /**
     * Long story about the lore.
     */
    description: string;

    /**
     * List of required `Item`s to complete this quest after all `prerequisite` quests are completed.
     */
    requirements: Requirement[];

    /**
     * Predefined `Quest` requirement of the actual quest. These quests need to be completed before start this one.
     */
    prerequisite: Quest[];

    /**
     * `Reward`s what the player get after completeing the quest.
     */
    rewards: Reward[];

    /**
     * Is the quest can be completed multiple time?
     */
    isRepeatable: boolean;

    /**
     * The location where the quest can be completed.
     */
    location: Location;

    /**
     * Cooldown of the quest after completed.
     */
    cooldown: Cooldown;

    /**
     * Expiration after the quest accepted.
     */
    expiration: Cooldown;
}