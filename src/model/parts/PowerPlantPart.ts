import { ProgressLevel, ShipPart, Technology } from "./ShipPart";

export class PowerPlantPart extends ShipPart {
    public get powerProduced(): number {
        return this._powerProduced;
    }

    public get costPerHullPoint(): number {
        return this._costPerHullPoint;
    }

    public get minimumSize(): number {
        return this._minimumSize;
    }

    public get fuelCost(): number | undefined {
        if (this._fuelCost) {
            return this._fuelCost;
        }

        return undefined;
    }

    public get fuelEfficiency(): number | undefined {
        if (this._fuelEfficiency) {
            return this._fuelEfficiency;
        }

        return undefined;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: ProgressLevel,
        technologies: Technology[],
        private readonly _powerProduced: number,
        baseCost: number,
        private readonly _costPerHullPoint: number,
        private readonly _minimumSize: number,
        private readonly _fuelCost?: number,
        private readonly _fuelEfficiency?: number) {
    // tslint:enable: variable-name
        super(name, pl, technologies, baseCost);

        if (this.powerProduced < 0) {
            throw new Error("Power produced must be 0 or greater");
        }

        if (this.costPerHullPoint <= 0) {
            throw new Error("Cost per hull point must be a positive number");
        }

        if (this.minimumSize < 0) {
            throw new Error("Minimum size must be 0 or greater");
        }

        if (this.fuelCost && this.fuelCost <= 0) {
            throw new Error("Fuel cost must be a positive number");
        }

        if (this.fuelEfficiency && this.fuelEfficiency! <= 0) {
            throw new Error("Fuel efficiency must be a positive number");
        }

        if ((this.fuelEfficiency && !this.fuelCost ) ||
            (!this.fuelEfficiency && this.fuelCost)) {
            throw new Error("If a power plant uses fuel, it needs to define a cost and a efficiency");
        }
    }
}
