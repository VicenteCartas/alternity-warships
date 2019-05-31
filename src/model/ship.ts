import { Armor } from "./Armor";
import { ArmorPart } from "./parts/ArmorPart";
import { HullPart } from "./parts/HullPart";
import { PowerPlantPart } from "./parts/PowerPlantPart";
import { PowerPlant } from "./PowerPlant";

export class Ship {
    // tslint:disable: variable-name
    private _name: string | null = null;
    private _hull: HullPart | undefined = undefined;
    private _armorPart: ArmorPart | undefined = undefined;
    private _armor: Armor | undefined = undefined;
    private _powerPlant: PowerPlant | null = null;
    // tslint:enable: variable-name

    public get name(): string | null {
        return this._name;
    }

    public set name(name: string | null) {
        this._name = name;
    }

    public get hull(): HullPart | undefined {
        return this._hull;
    }

    public set hull(newHull: HullPart | undefined) {
        if (newHull !== this.hull) {
            this._hull = newHull;
            this.hullChanged();
        }
    }

    public set armorPart(part: ArmorPart | undefined) {
        this._armorPart = part;

        if (this.hull && this._armorPart) {
            this._armor = new Armor(this.hull, this._armorPart);
        }
    }

    public set powerPlantPart(part: PowerPlantPart) {
        if (this.powerPlant === null) {
            this._powerPlant = new PowerPlant(part, 0);
        } else {
            this._powerPlant = new PowerPlant(part, this.powerPlant.size);
        }
    }

    public get armor(): Armor | undefined {
        return this._armor;
    }

    public get powerPlant(): PowerPlant | null {
        return this._powerPlant;
    }

    public get totalHull(): number {
        if (!this.hull) {
            return 0;
        }

        return this.hull.hullPoints + this.hull.bonusHullPoints;
    }

    public get usedHull(): number {
        let usedHull = 0;

        if (this.armor) {
            usedHull += this.armor.size;
        }

        if (this.powerPlant !== null) {
            usedHull += this.powerPlant.size;
        }

        return usedHull;
    }

    public get powerProduced(): number {
        if (this.powerPlant === null) {
            return 0;
        }

        return this.powerPlant.powerProduced;
    }

    public get powerConsumed(): number {
        return 0;
    }

    public get cost(): number {
        let cost: number = 0;

        if (this.hull) {
            cost += this.hull.cost;
        }

        if (this.armor) {
            cost += this.armor.cost;
        }

        if (this.powerPlant !== null) {
            cost += this.powerPlant.cost;
        }

        return cost;
    }

    public hasValidationErrors(): Error[] {
        const errors = new Array<Error | null>();

        if (this._armor) {
            errors.push(this._armor.validate());
        }

        return (errors.filter((e) => e !== null) as Error[]);
    }

    // Regenerate components that depend on the selected hull
    private hullChanged() {
        if (this.hull && this._armorPart) {
            this._armor = new Armor(this.hull, this._armorPart);
        }
    }
}
