import { FtlDriveComponent } from "./baseComponents/ftlDriveComponent";
import { Hull } from "./baseComponents/hull";

export class FtlDrive {
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
        return this.size * this._component.powerRequired;
    }

    public get acceleration(): string {
        const ratio = this.size / this._hull.hullPoints;

        if (ratio < 0.05) {
            return "";
        }

        if (ratio >= 0.05 && ratio < 0.1) {
            if (this._component.acceleration5 === null) {
                return "";
            }

            return this._component.acceleration5;
        }

        if (ratio >= 0.1 && ratio < 0.15) {
            if (this._component.acceleration10 === null) {
                return "";
            }

            return this._component.acceleration10;
        }

        if (ratio >= 0.15 && ratio < 0.2) {
            if (this._component.acceleration15 === null) {
                return "";
            }

            return this._component.acceleration15;
        }

        if (ratio >= 0.2 && ratio < 0.3) {
            if (this._component.acceleration20 === null) {
                return "";
            }

            return this._component.acceleration20;
        }

        if (ratio >= 0.3 && ratio < 0.4) {
            if (this._component.acceleration30 === null) {
                return "";
            }

            return this._component.acceleration30;
        }

        if (ratio >= 0.4 && ratio < 0.5) {
            if (this._component.acceleration40 === null) {
                return "";
            }

            return this._component.acceleration40;
        }

        if (this._component.acceleration50 === null) {
            return "";
        }

        return this._component.acceleration50;
    }

    constructor (
    // tslint:disable: variable-name
        private readonly _component: FtlDriveComponent,
        private readonly _hull: Hull,
        private _size: number)
    // tslint:enable: variable-name
    {
        if (this.size < this._component.minimumSize) {
            this.size = this._component.minimumSize;
        }
    }

    private static findAcceleration(index: string): string {
        const accelerations: string[];

        return accelerations[0]
    }
}
