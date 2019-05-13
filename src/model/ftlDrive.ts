import { FtlDriveComponent } from "./baseComponents/ftlDriveComponent";
import { Hull } from "./baseComponents/hull";

export class FtlDrive {
    private readonly accelerations: Array<string | null> = [];

    public get size(): number {
        return this._size;
    }

    public set size(newSize: number) {
        if (newSize < this._component.minimumSize) {
            this._size = this._component.minimumSize;
        } else {
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
            return this.findAcceleration(0);
        }

        if (ratio >= 0.1 && ratio < 0.15) {
            return this.findAcceleration(1);
        }

        if (ratio >= 0.15 && ratio < 0.2) {
            return this.findAcceleration(2);
        }

        if (ratio >= 0.2 && ratio < 0.3) {
            return this.findAcceleration(3);
        }

        if (ratio >= 0.3 && ratio < 0.4) {
            return this.findAcceleration(4);
        }

        if (ratio >= 0.4 && ratio < 0.5) {
            return this.findAcceleration(5);
        }

        return this.findAcceleration(6);
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

        this.accelerations.push(this._component.acceleration5);
        this.accelerations.push(this._component.acceleration10);
        this.accelerations.push(this._component.acceleration15);
        this.accelerations.push(this._component.acceleration20);
        this.accelerations.push(this._component.acceleration30);
        this.accelerations.push(this._component.acceleration40);
        this.accelerations.push(this._component.acceleration50);
    }

    private findAcceleration(maxAccelerationBracket: number): string {
        let maxAcceleration = "";

        for (let i = 0; i <= maxAccelerationBracket; i--) {
            if (this.accelerations[i] !== null) {
                maxAcceleration = this.accelerations[i]!;
            }
        }

        return maxAcceleration;
    }
}
