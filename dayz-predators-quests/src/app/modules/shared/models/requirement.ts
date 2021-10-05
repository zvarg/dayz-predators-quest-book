import { Item } from "app/modules/shared/models/item";

export class Requirement {

    /**
     * The required `Item`
     */
    item: Item;

    /**
     * The number of required `Item` to complete the `Requirement`
     */
    count: number;
}