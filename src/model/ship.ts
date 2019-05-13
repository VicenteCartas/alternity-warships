import { Armor } from "./armor";
import { ArmorComponent } from "./baseComponents/armorComponent";
import { Hull } from "./baseComponents/hull";
import { PowerPlantComponent } from "./baseComponents/powerPlantComponent";
import { PowerPlant } from "./powerPlant";

export class Ship {
    // tslint:disable: variable-name
    private _name: string | null = null;
    private _hull: Hull | null = null;
    private _armorComponent: ArmorComponent | null = null;
    private _armor: Armor | null = null;
    private _powerPlant: PowerPlant | null = null;
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

    public set hull(newHull: Hull | null) {
        if (newHull !== this.hull) {
            this._hull = newHull;
            this.hullChanged();
        }
    }

    public set armorComponent(component: ArmorComponent) {
        if (this.hull === null) {
            return;
        }

        this._armorComponent = component;
        this._armor = new Armor(component, this.hull!);
    }

    public set powerPlantComponent(component: PowerPlantComponent) {
        if (this.powerPlant === null) {
            this._powerPlant = new PowerPlant(component, 0);
        } else {
            this._powerPlant = new PowerPlant(component, this.powerPlant.size);
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
        if (this._armorComponent !== null) {
            this.armorComponent = this._armorComponent;
        }
    }
}
