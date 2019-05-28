export enum Technology {
    GravityManipulation = "G",
    DarkMatterTech = "D",
    AntimatterTech = "A",
    MatterCodding = "M",
    FusionTech = "F",
    QuantumManipulation = "Q",
    MatterTransmission = "T",
    SuperMaterials = "S",
    PsiTech = "P",
    EnergyTransformation = "X",
    ComputerTech = "C",
}

export enum ProgressLevel {
    PL6 = "Progress Level 6: Fusion Age",
    PL7 = "Progress Level 7: Gravity Age",
    PL8 = "Progress Level 8: Energy Age",
    PL9 = "Progress Level 9: Matter Age",
}

export abstract class ShipPart {
    public get name(): string {
        return this._name;
    }

    public get pl(): ProgressLevel {
        return this._pl;
    }

    public get technologies(): Technology[] {
        return this._technologies;
    }

    public get cost(): number {
        return this._cost;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _name: string,
        private readonly _pl: ProgressLevel,
        private readonly _technologies: Technology[],
        private readonly _cost: number) {
    // tslint:enable: variable-name

        if (this.name.length < 1) {
            throw new Error("Name of the component can't be empty");
        }

        if (this.cost < 0) {
            throw new Error("Cost of the compoentn can't be negative.");
        }
    }
}
