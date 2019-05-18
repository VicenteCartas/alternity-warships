import { Armor } from "./Armor";
import { ArmorPart } from "./Parts/ArmorPart";
import { HullPart } from "./Parts/HullPart";
import { PowerPlantPart } from "./Parts/PowerPlantPart";
import { PowerPlant } from "./PowerPlant";

export class Ship {
    // tslint:disable: variable-name
    private _name: string | null = null;
    private _hull: HullPart | null = null;
    private _armorPart: ArmorPart | null = null;
    private _armor: Armor | null = null;
    private _powerPlant: PowerPlant | null = null;
    // tslint:enable: variable-name

    public get name(): string | null {
        return this._name;
    }

    public set name(name: string | null) {
        this._name = name;
    }

    public get hull(): HullPart | null {
        return this._hull;
    }

    public set hull(newHull: HullPart | null) {
        if (newHull !== this.hull) {
            this._hull = newHull;
            this.hullChanged();
        }
    }

    public set armorPart(part: ArmorPart) {
        if (this.hull === null) {
            return;
        }

        this._armorPart = part;
        this._armor = new Armor(part, this.hull!);
    }

    public set powerPlantPart(part: PowerPlantPart) {
        if (this.powerPlant === null) {
            this._powerPlant = new PowerPlant(part, 0);
        } else {
            this._powerPlant = new PowerPlant(part, this.powerPlant.size);
        }
    }

    public get armor(): Armor | null {
        return this._armor;
    }

    public get powerPlant(): PowerPlant | null {
        return this._powerPlant;
    }

    public get totalHull(): number {
        if (this.hull === null) {
            return 0;
        }

        return this.hull.hullPoints + this.hull.bonusHullPoints;
    }

    public get usedHull(): number {
        let usedHull = 0;

        if (this.armor !== null) {
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

        if (this.hull !== null) {
            cost += this.hull.cost;
        }

        if (this.armor !== null) {
            cost += this.armor.cost;
        }

        if (this.powerPlant !== null) {
            cost += this.powerPlant.cost;
        }

        return cost;
    }

    public hasValidationErrors(): Error[] {
        const errors = new Array<Error | null>();

        if (this._armor !== null) {
            errors.push(this._armor.validate());
        }

        return (errors.filter((e) => e !== null) as Error[]);
    }

    // Regenerate components that depend on the selected hull
    private hullChanged() {
        if (this._armorPart !== null) {
            this.armorPart = this._armorPart;
        }
    }
}
