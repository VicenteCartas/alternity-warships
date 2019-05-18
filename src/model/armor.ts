import { ArmorPart, ArmorType } from "./Parts/ArmorPart";
import { HullPart, HullSize } from "./Parts/HullPart";

export class Armor {
    public get size(): number {
        return this._hull.hullPoints * this._part.hullPercentage / 100.0;
    }

    public get cost(): number {
        return this.size * this._part.cost;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _part: ArmorPart,
        private readonly _hull: HullPart) { }
    // tslint:enable: variable-name

    public validate(): Error | null {
        if (this._hull.hullSize === HullSize.SmallCraft &&
            (this._part.ArmorType === ArmorType.Heavy || this._part.ArmorType === ArmorType.SuperHeavy)) {
            return new Error(`Small craft can't use ${this._part.ArmorType.toString().toLowerCase()} armor`);
        }

        if (this._hull.hullSize === HullSize.LightShip &&
            this._part.ArmorType === ArmorType.SuperHeavy) {
                return new Error(`Light ship can't use super-heavy armor`);
        }

        return null;
    }
}
