import { Unit } from "app/modules/shared/models/unit";

export class Cooldown {

    /**
     * Quantity of the measuring `Unit`
     */
    quantity: number;

    /**
     * Measuring unit of the `Cooldown`
     */
    unit: Unit;
}