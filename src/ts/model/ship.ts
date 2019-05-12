import { ArmorComponent, ArmorType } from "./baseComponents/armorComponent";
import { Hull, HullSize } from "./baseComponents/hull";

export class Ship {
    // tslint:disable: variable-name
    private _name: string | null = null;
    private _hull: Hull | null = null;
    private _armor: ArmorComponent | null = null;
    // tslint:enable: variable-name

    public get name(): string | null {
        return this._name;
    }

    public set name(name: string | null) {
        this._name = name;
    }

    public get hull(): Hull | null {
        return this._hull;
    }

    public set hull(hull: Hull | null) {
        this._hull = hull;
    }

    public get armor(): ArmorComponent | null {
        return this._armor;
    }

    public set armor(armor: ArmorComponent | null) {
        if (this.hull === null) {
            return;
        }

        this._armor = armor;
    }

    public get armorHullPoints(): number {
        if (this.hull === null || this.armor === null) {
            return 0;
        }

        return this.hull.hullPoints *  this.armor.hullPercentage / 100.0;
    }

    public get totalHull(): number {
        if (this.hull === null) {
            return 0;
        }

        return this.hull.hullPoints + this.hull.bonusHullPoints;
    }

    public get usedHull(): number {
        let usedHull = 0;

        usedHull += this.armorHullPoints;

        return usedHull;
    }

    public get emptyHull(): number {
        return this.totalHull - this.usedHull;
    }

    public hasValidationErrors(): Error[] {
        const errors = new Array<Error | null>();

        return (errors.filter((e) => e !== null) as Error[]);
    }
}
