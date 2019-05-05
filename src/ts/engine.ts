import { ShipComponent, Technology } from './shipComponent';

export class Engine extends ShipComponent {
    constructor(
        name: string,
        pl: number,
        technologies: Technology[],
        private readonly _powerConsumed: number,
        private readonly _minimumSize: number,
        private readonly _baseCost: number,
        cost: number,
        private readonly _acceleration5?: number,
        private readonly _acceleration10?: number,
        private readonly _acceleration15?: number,
        private readonly _acceleration20?: number,
        private readonly _acceleration30?: number,
        private readonly _acceleration40?: number,
        private readonly _acceleration50?: number,
        private readonly _fuelEfficiency?: number,
        private readonly _fuelCost?: number) {
        super(name, pl, technologies, cost);
    }
}

export class EngineFactory {
    static getDefault(): Engine[] {
        let engines: Engine[] = [];
        
        return engines;
    }
}