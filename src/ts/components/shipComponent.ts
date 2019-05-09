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

export abstract class ShipComponent {
    public get name(): string {
        return this._name;
    }

    public get pl(): number {
        return this._pl;
    }

    public get technologies(): Technology[] {
        return this._technologies;
    }

    public get cost(): number {
        return this._cost;
    }

    constructor(
        private readonly _name: string,
        private readonly _pl: number,
        private readonly _technologies: Technology[],
        private readonly _cost: number) {

        if (this.name.length < 1) {
            throw new Error("Name of the component can't be empty");
        }

        if (this.pl < 5 || this.pl > 9) {
            throw new Error("Progress Level (PL) of the component must be between 5 and 9");
        }

        if (this.cost < 0) {
            throw new Error("Cost of the compoentn can't be negative.")
        }
    }
}
