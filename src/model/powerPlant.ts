import { Guid } from "guid-typescript";
import { IObjectWithKey } from "office-ui-fabric-react";
import { PowerPlantPart } from "./parts/PowerPlantPart";

export class PowerPlant implements IObjectWithKey {
    // tslint:disable-next-line:variable-name
    private _key: string;

    public get name(): string {
        return this._powerPlantPart.name;
    }

    public get minimumSize(): number {
        return this._powerPlantPart.minimumSize;
    }

    public get size(): number {
        return this._size;
    }

    public set size(value: number) {
        if (value < this._powerPlantPart.minimumSize) {
            this._size = this._powerPlantPart.minimumSize;
        } else {
            this._size = value;
        }
    }

    public get cost(): number {
        return this._powerPlantPart.cost + this.size * this._powerPlantPart.costPerHullPoint;
    }

    public get powerProduced(): number {
        return this.size * this._powerPlantPart.powerProduced;
    }

    public get key(): string {
        return this._key;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _powerPlantPart: PowerPlantPart,
        private _size: number) {
    // tslint:enable: variable-name
        if (this.size < this._powerPlantPart.minimumSize) {
            this.size = this._powerPlantPart.minimumSize;
        }

        this._key = Guid.raw();
    }
}
