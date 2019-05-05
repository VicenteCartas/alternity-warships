import { ShipComponent, Technology } from './shipComponent';

class PowerPlant extends ShipComponent {
    public get power(): number {
        return this._power;
    }

    public get baseCost(): number {
        return this._baseCost;
    }

    public get minimumSize(): number {
        return this._minimumSize;
    }

    public get usesFuel(): boolean {
        if (this._usesFuel) {
            return this._usesFuel;
        }

        return false;
    }

    public get fuelCost(): number | string {
        if (this._fuelCost) {
            return this._fuelCost;
        }

        return "-";
    }

    public get fuelEfficiency(): number | string {
        if (this._fuelEfficiency) {
            return this._fuelEfficiency;
        }

        return "-";
    }

    constructor(
        name: string,
        pl: number,
        technologies: Technology[],
        private readonly _power: number,
        private readonly _baseCost: number,
        cost: number,
        private readonly _minimumSize: number,
        private readonly _usesFuel?: boolean,
        private readonly _fuelCost?: number,
        private readonly _fuelEfficiency?: number) {
        super(name, pl, technologies, cost);

        if (this.power < 0) {
            throw new Error("Power must be 0 or greater");
        }

        if (this.baseCost <= 0) {
            throw new Error("Base cost must be a positive number");
        }

        if (this.minimumSize < 0) {
            throw new Error("Minimum size must be 0 or greater");
        }

        if (this.usesFuel && this.fuelCost <= 0) {
            throw new Error("Fuel cost must be a positive number");
        }

        if (this.usesFuel && this.fuelEfficiency <= 0) {
            throw new Error("Fuel efficiency must be a positive number");
        }
    }
}

export class PowerPlantFactory {
    static getDefault(): PowerPlant[] {
        let powerPlants: PowerPlant[] = [];

        // PL 6 Power Plants
        powerPlants.push(new PowerPlant(
            "Solar Cell",
            6,
            [Technology.SuperMaterials],
            1.5,
            500000,
            200000,
            4
        ));

        powerPlants.push(new PowerPlant(
            "Fission Generator",
            6,
            [],
            1.5,
            1000000,
            100000,
            4
        ));

        powerPlants.push(new PowerPlant(
            "Fusion Generator",
            6,
            [Technology.FusionTech],
            2,
            1000000,
            200000,
            2,
            true,
            1000,
            200
        ));

        powerPlants.push(new PowerPlant(
            "Grav-fusion Cell",
            6,
            [Technology.GravityManipulation],
            2.5,
            2000000,
            200000,
            4,
            true,
            1000,
            300
        ));

        powerPlants.push(new PowerPlant(
            "Fuel Tank",
            6,
            [],
            0,
            50000,
            10000,
            0
        ));

        return powerPlants;
    }
}