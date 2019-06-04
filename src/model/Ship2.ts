import { Armor } from "./Armor2";
import { ArmorPart } from "./parts/ArmorPart";
import { HullPart } from "./parts/HullPart";
import { PowerPlant } from "./PowerPlant";

export class Ship {
    // tslint:disable: variable-name
    private _name: string | null = null;
    private _hull: HullPart | undefined = undefined;
    private _armorPart: ArmorPart | undefined = undefined;
    private _armor: Armor | undefined = undefined;
    private _powerPlants: PowerPlant[] = [];
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

    public get armor(): Armor | undefined {
        return this._armor;
    }

    public get powerPlants(): PowerPlant[] {
        return this._powerPlants;
    }

    public set powerPlants(powerPlants: PowerPlant[]) {
        this._powerPlants = powerPlants;
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

        this.powerPlants.forEach((powerPlant) => {
            usedHull += powerPlant.size;
        });

        return usedHull;
    }

    public get powerProduced(): number {
        let totalPower: number = 0;

        this.powerPlants.forEach((powerPlant) => {
            totalPower += powerPlant.powerProduced;
        });

        return totalPower;
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

        this.powerPlants.forEach((powerPlant) => {
            cost += powerPlant.cost;
        });

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
