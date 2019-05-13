import { ShipComponent, Technology } from "./shipComponent";

export class FtlDriveComponent extends ShipComponent {
    public get powerRequired(): number {
        return this._powerRequired;
    }

    public get minimumSize(): number {
        return this._minimumSize;
    }

    public get costPerHullPoint(): number {
        return this._costPerHullPoint;
    }

    public get acceleration5(): string | null {
        if (this._acceleration5) {
            return this._acceleration5;
        }

        return null;
    }

    public get acceleration10(): string | null {
        if (this._acceleration10) {
            return this._acceleration10;
        }

        return null;
    }

    public get acceleration15(): string | null {
        if (this._acceleration15) {
            return this._acceleration15;
        }

        return null;
    }

    public get acceleration20(): string | null {
        if (this._acceleration20) {
            return this._acceleration20;
        }

        return null;
    }

    public get acceleration30(): string | null {
        if (this._acceleration30) {
            return this._acceleration30;
        }

        return null;
    }

    public get acceleration40(): string | null {
        if (this._acceleration40) {
            return this._acceleration40;
        }

        return null;
    }

    public get acceleration50(): string | null {
        if (this._acceleration50) {
            return this._acceleration50;
        }

        return null;
    }

    public get fuelCost(): number {
        if (this._fuelCost) {
            return this._fuelCost;
        }

        return 0;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: number,
        technologies: Technology[],
        private readonly _powerRequired: number,
        private readonly _minimumSize: number,
        baseCost: number,
        private readonly _costPerHullPoint: number,
        private readonly _acceleration5?: string,
        private readonly _acceleration10?: string,
        private readonly _acceleration15?: string,
        private readonly _acceleration20?: string,
        private readonly _acceleration30?: string,
        private readonly _acceleration40?: string,
        private readonly _acceleration50?: string,
        private readonly _fuelCost?: number) {
    // tslint:enable: variable-name
        super(name, pl, technologies, baseCost);
    }
}
