import { PowerPlantComponent } from "./baseComponents/powerPlantComponent";

export class PowerPlant {
    public get size(): number {
        return this._size;
    }

    public set size(value: number) {
        if (value < this._powerPlantComponent.minimumSize) {
            this._size = this._powerPlantComponent.minimumSize;
        } else {
            this._size = value;
        }
    }

    public get cost(): number {
        return this._powerPlantComponent.cost + this.size * this._powerPlantComponent.costPerHullPoint;
    }

    public get powerProduced(): number {
        return this.size * this._powerPlantComponent.powerProduced;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _powerPlantComponent: PowerPlantComponent,
        private _size: number) {
    // tslint:enable: variable-name
        if (this.size < this._powerPlantComponent.minimumSize) {
            this.size = this._powerPlantComponent.minimumSize;
        }
    }
}
