import { ArmorCategory, ArmorPart } from "./parts/ArmorPart";
import { HullPart, HullSize } from "./parts/HullPart";

export class Armor {
    public get size(): number {
        return Math.ceil(this._hull.hullPoints * this._part.hullPercentage / 100.0);
    }

    public get cost(): number {
        return this.size * this._part.cost;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _hull: HullPart,
        private readonly _part: ArmorPart) { }
    // tslint:enable: variable-name

    public validate(): Error | null {
        if (this._hull.hullSize === HullSize.SmallCraft &&
            (this._part.ArmorCategory === ArmorCategory.Heavy ||
             this._part.ArmorCategory === ArmorCategory.SuperHeavy)) {
            return new Error(`Small craft can't use ${this._part.ArmorCategory.toString().toLowerCase()} armor`);
        }

        if (this._hull.hullSize === HullSize.LightShip &&
            this._part.ArmorCategory === ArmorCategory.SuperHeavy) {
                return new Error(`Light ship can't use super-heavy armor`);
        }

        return null;
    }
}
