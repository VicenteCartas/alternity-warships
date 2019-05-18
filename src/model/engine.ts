import { EnginePart } from "./parts/EnginePart";
import { HullPart } from "./parts/HullPart";

export class Engine {
    private readonly accelerations: number[] = [];

    public get size(): number {
        return this._size;
    }

    public set size(newSize: number) {
        if (newSize < this._part.minimumSize) {
            this._size = this._part.minimumSize;
        } else {
            this._size = newSize;
        }
    }

    public get cost(): number {
        return this._part.cost + this.size * this._part.costPerHullPoint;
    }

    public get powerConsumed(): number {
        return this.size * this._part.powerRequired;
    }

    public get acceleration(): number {
        const ratio = this.size / this._hull.hullPoints;

        if (ratio < 0.05) {
            return 0;
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

    constructor(
        // tslint:disable: variable-name
            private readonly _part: EnginePart,
            private readonly _hull: HullPart,
            private _size: number) {
        // tslint:enable: variable-name
        if (this.size < this._part.minimumSize) {
            this.size = this._part.minimumSize;
        }

        this.accelerations.push(this._part.acceleration5);
        this.accelerations.push(this._part.acceleration10);
        this.accelerations.push(this._part.acceleration15);
        this.accelerations.push(this._part.acceleration20);
        this.accelerations.push(this._part.acceleration30);
        this.accelerations.push(this._part.acceleration40);
        this.accelerations.push(this._part.acceleration50);
    }

    private findAcceleration(maxAccelerationBracket: number): number {
        let maxAcceleration = 0;

        for (let i = 0; i <= maxAccelerationBracket; i--) {
            if (this.accelerations[i] > maxAcceleration) {
                maxAcceleration = this.accelerations[i];
            }
        }

        return maxAcceleration;
    }
}
