import { Item } from "app/modules/shared/models/item";

export class Reward {

    /**
     * The required `Item`
     */
     item: Item;

    /**
     * The number of required `Item` to complete the `Requirement`
     */
    count: number;

    /**
     * Additional information about the `Reward`
     */
    note: string;
}