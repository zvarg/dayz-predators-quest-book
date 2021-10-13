export class Item {

    /**
     * Unique Id of the item
     */
    id: number;

    /**
     * Name of the item
     */
    name: string;

    /**
     * Thumbnail url
     */
    thumbnail: string;

    /**
     * Wiki url
     */
    wikiUrl: string;

    /**
     * Item should be made by player
     */
    madeBySelf: boolean = false;
}