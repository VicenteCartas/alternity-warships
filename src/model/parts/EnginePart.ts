import { ProgressLevel, ShipPart, Technology } from "./ShipPart";

export class EnginePart extends ShipPart {
    public get powerRequired(): number {
        return this._powerRequired;
    }

    public get minimumSize(): number {
        return this._minimumSize;
    }

    public get costPerHullPoint(): number {
        return this._costPerHullPoint;
    }

    public get acceleration5(): number {
        if (this._acceleration5) {
            return this._acceleration5;
        }

        return 0;
    }

    public get acceleration10(): number {
        if (this._acceleration10) {
            return this._acceleration10;
        }

        return 0;
    }

    public get acceleration15(): number {
        if (this._acceleration15) {
            return this._acceleration15;
        }

        return 0;
    }

    public get acceleration20(): number {
        if (this._acceleration20) {
            return this._acceleration20;
        }

        return 0;
    }

    public get acceleration30(): number {
        if (this._acceleration30) {
            return this._acceleration30;
        }

        return 0;
    }

    public get acceleration40(): number {
        if (this._acceleration40) {
            return this._acceleration40;
        }

        return 0;
    }

    public get acceleration50(): number {
        if (this._acceleration50) {
            return this._acceleration50;
        }

        return 0;
    }

    public get fuelEfficiency(): number | null {
        if (this._fuelEfficiency) {
            return this._fuelEfficiency;
        }

        return null;
    }

    public get fuelCost(): number | null {
        if (this._fuelCost) {
            return this._fuelCost;
        }

        return null;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: ProgressLevel,
        technologies: Technology[],
        private readonly _powerRequired: number,
        private readonly _minimumSize: number,
        baseCost: number,
        private readonly _costPerHullPoint: number,
        private readonly _acceleration5?: number,
        private readonly _acceleration10?: number,
        private readonly _acceleration15?: number,
        private readonly _acceleration20?: number,
        private readonly _acceleration30?: number,
        private readonly _acceleration40?: number,
        private readonly _acceleration50?: number,
        private readonly _fuelCost?: number,
        private readonly _fuelEfficiency?: number) {
    // tslint:enable: variable-name
        super(name, pl, technologies, baseCost);

        if (this.powerRequired < 0) {
            throw new Error("Power required must be 0 or greater");
        }

        if (this.minimumSize <= 0) {
            throw new Error("Minimum size must be a positive number");
        }

        if (this.costPerHullPoint <= 0) {
            throw new Error("Cost per hull point must be a positive number");
        }

        if (this.acceleration5 < 0) {
            throw new Error("Acceleration at 5% must be 0 or greater");
        }

        if (this.acceleration10 < 0) {
            throw new Error("Acceleration at 10% must be 0 or greater");
        }

        if (this.acceleration15 < 0) {
            throw new Error("Acceleration at 15% must be 0 or greater");
        }

        if (this.acceleration20 < 0) {
            throw new Error("Acceleration at 20% must be 0 or greater");
        }

        if (this.acceleration30 < 0) {
            throw new Error("Acceleration at 30% must be 0 or greater");
        }

        if (this.acceleration40 < 0) {
            throw new Error("Acceleration at 40% must be 0 or greater");
        }

        if (this.acceleration50 < 0) {
            throw new Error("Acceleration at 50% must be 0 or greater");
        }

        if (this.fuelCost !== null && this.fuelCost <= 0) {
            throw new Error("Fuel cost must be a positive number");
        }

        if (this.fuelEfficiency !== null && this.fuelEfficiency! <= 0) {
            throw new Error("Fuel efficiency must be a positive number");
        }

        if ((this.fuelEfficiency !== null && this.fuelCost === null) ||
            (this.fuelEfficiency === null && this.fuelCost !== null)) {
            throw new Error("If an engine uses fuel, it needs to define a cost and a efficiency");
        }
    }
}
