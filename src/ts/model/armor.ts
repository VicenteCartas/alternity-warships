import { ArmorComponent, ArmorType } from "./baseComponents/armorComponent"
import { Hull, HullSize } from "./baseComponents/hull"

export class Armor {
    public get size(): number {
        return this._hull.hullPoints * this._component.hullPercentage / 100.0;
    }

    public get cost(): number {
        return this.size * this._component.cost;
    }
    
    public static create(armorComponent: ArmorComponent, hull: Hull): Armor | Error {
        const validation: Error | null = Armor.isArmorValid(armorComponent, hull);

        if (validation instanceof Error) {
            return validation;
        }

        return new Armor(armorComponent, hull);
    }

    private constructor(
    //tslint:disable: variable-name
        private readonly _component: ArmorComponent,
        private readonly _hull: Hull)
    //tslint:enable: variable-name
    { }

    private static isArmorValid(armorComponent: ArmorComponent, hull: Hull): Error | null {
        if (hull.hullSize === HullSize.SmallCraft &&
            (armorComponent.ArmorType === ArmorType.Heavy || armorComponent.ArmorType === ArmorType.SuperHeavy)) {
            return new Error(`Small craft can't use ${armorComponent.ArmorType.toString().toLowerCase()} armor`);
        }

        if (hull.hullSize === HullSize.LightShip &&
            armorComponent.ArmorType === ArmorType.SuperHeavy) {
                return new Error(`Light ship can't use Super-heavy armor`);
        }

        return null;
    }
}
