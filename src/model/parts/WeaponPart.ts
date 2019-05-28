import { ProgressLevel, ShipPart, Technology } from "./ShipPart";

export enum DamageType {
    LowImpact = "LI",
    HighImpact = "HI",
    Energy = "En",
}

export enum Firepower {
    Small = "Small",
    Light = "Good",
    Medium = "Medium",
    Heavy = "Heavy",
    SuperHeavy = "Super-heavy",
}

export enum FireMode {
    SingleShot = "F",
    Group = "G",
    Burst = "B",
    Autofire = "A",
}

export enum WeaponMount {
    StandardMount = "Standard",
    FixedMount = "Fixed",
    Turrent = "Turret",
    Sponson = "Sponson",
    Bank = "Bank",
}

export enum MountSize {
    SingleMount = "Single",
    DoubleMount = "Double",
    TripeMount = "Triple",
    QuadMount = "Quad",
}

export class WeaponPart extends ShipPart {
    public get hull(): number {
        return this._hull;
    }

    public get power(): number {
        return this._power;
    }

    public get accuracy(): number {
        return this._accuracy;
    }

    public get shortRange(): number {
        return this._shortRange;
    }

    public get mediumRange(): number {
        return this._mediumRange;
    }

    public get longRange(): number {
        return this._longRange;
    }

    public get damageType(): DamageType {
        return this._damageType;
    }

    public get firepower(): Firepower {
        return this._firepower;
    }

    public get ordinaryDamage(): string {
        return this._ordinaryDamage;
    }

    public get goodDamage(): string {
        return this._goodDamage;
    }

    public get amazingDamage(): string {
        return this._amazingDamage;
    }

    public get fireModes(): FireMode[] {
        return this._fireModes;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: ProgressLevel,
        technologies: Technology[],
        private readonly _hull: number,
        private readonly _power: number,
        cost: number,
        private readonly _accuracy: number,
        private readonly _shortRange: number,
        private readonly _mediumRange: number,
        private readonly _longRange: number,
        private readonly _damageType: DamageType,
        private readonly _firepower: Firepower,
        private readonly _ordinaryDamage: string,
        private readonly _goodDamage: string,
        private readonly _amazingDamage: string,
        private readonly _fireModes: FireMode[]) {
    // tslint:enable: variable-name
        super(name, pl, technologies, cost);
    }
}
