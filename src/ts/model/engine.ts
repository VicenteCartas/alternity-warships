import { EngineComponent } from "./baseComponents/engineComponent";
import { Hull } from "./baseComponents/hull";

export class engine {
    public get size(): number {
        return this._size;
    }

    public set size(newSize: number) {
        if (newSize < this._component.minimumSize) {
            this._size = this._component.minimumSize;
        }
        else {
            this._size = newSize;
        }
    }

    public get cost(): number {
        return this._component.cost + this.size * this._component.costPerHullPoint;
    }

    public get powerConsumed(): number {
        return this._component.powerRequired * this.size;
    }

    public get acceleration(): number {
        const ratio = this.size / this._hull.hullPoints;

        if (ratio < 0.05) {
            return 0;
        }

        if (ratio >= 0.05 && ratio < 0.1) {
            return this._component.acceleration5;
        }

        if (ratio >= 0.1 && ratio < 0.15) {
            return this._component.acceleration10;
        }

        if (ratio >= 0.15 && ratio < 0.2) {
            return this._component.acceleration15;
        }

        if (ratio >= 0.2 && ratio < 0.3) {
            return this._component.acceleration20;
        }

        if (ratio >= 0.3 && ratio < 0.4) {
            return this._component.acceleration30;
        }

        if (ratio >= 0.4 && ratio < 0.5) {
            return this._component.acceleration40;
        }

        return this._component.acceleration50;
    }

    constructor(
        // tslint:disable: variable-name
            private readonly _component: EngineComponent,
            private readonly _hull: Hull,
            private _size: number) {
        // tslint:enable: variable-name
        if (this.size < this._component.minimumSize) {
            this.size = this._component.minimumSize;
        }
    }
}
