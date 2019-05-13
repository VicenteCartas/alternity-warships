import { ArmorComponent, ArmorType } from "./baseComponents/armorComponent";
import { Hull, HullSize } from "./baseComponents/hull";

export class Armor {
    public get size(): number {
        return this._hull.hullPoints * this._component.hullPercentage / 100.0;
    }

    public get cost(): number {
        return this.size * this._component.cost;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _component: ArmorComponent,
        private readonly _hull: Hull) { }
    // tslint:enable: variable-name

    public validate(): Error | null {
        if (this._hull.hullSize === HullSize.SmallCraft &&
            (this._component.ArmorType === ArmorType.Heavy || this._component.ArmorType === ArmorType.SuperHeavy)) {
            return new Error(`Small craft can't use ${this._component.ArmorType.toString().toLowerCase()} armor`);
        }

        if (this._hull.hullSize === HullSize.LightShip &&
            this._component.ArmorType === ArmorType.SuperHeavy) {
                return new Error(`Light ship can't use super-heavy armor`);
        }

        return null;
    }
}
