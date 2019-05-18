export enum HullType {
    Military,
    Civilian,
}

export enum HullSize {
    SmallCraft = "Small Craft",
    LightShip = "Light Ship",
    MediumShip = "Medium Ship",
    HeavyShip = "Heavy Ship",
    SuperHeavyShip = "Super-heavy Ship",
}

export enum Toughness {
    Good = "(Good)",
    Small = "Small",
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    SuperHeavy = "Super Heavy",
}

export class HullPart {
    public get name(): string {
        return this._name;
    }

    public get hullType(): HullType {
        return this._hullType;
    }

    public get hullSize(): HullSize {
        return this._hullSize;
    }

    public get hullPoints(): number {
        return this._hullPoints;
    }

    public get bonusHullPoints(): number {
        let multiplier: number;
        switch (this._hullSize) {
            case HullSize.SmallCraft: {
                multiplier = 0;
                break;
            }
            case HullSize.LightShip: {
                multiplier = 0.1;
                break;
            }
            case HullSize.MediumShip: {
                multiplier = 0.2;
                break;
            }
            case HullSize.HeavyShip: {
                multiplier = 0.3;
                break;
            }
            case HullSize.SuperHeavyShip: {
                multiplier = 0.5;
                break;
            }
            default: {
                multiplier = 0;
            }
        }

        return this.hullPoints * multiplier;
    }

    public get toughness(): Toughness {
        return this._toughness;
    }

    public get targetModifier(): number {
        return this._targetModifier;
    }

    public get maneuverability(): number {
        return this._maneuverability;
    }

    public get stun(): number {
        return this._stun;
    }

    public get wound(): number {
        return this._wound;
    }

    public get mortal(): number {
        return this._mortal;
    }

    public get critical(): number {
        return this._critical;
    }

    public get crew(): number {
        return this._crew;
    }

    public get cost(): number {
        return this._cost;
    }

    constructor(
    // tslint:disable: variable-name
        private readonly _name: string,
        private readonly _hullType: HullType,
        private readonly _hullSize: HullSize,
        private readonly _hullPoints: number,
        private readonly _toughness: Toughness,
        private readonly _targetModifier: number,
        private readonly _maneuverability: number,
        private readonly _stun: number,
        private readonly _wound: number,
        private readonly _mortal: number,
        private readonly _critical: number,
        private readonly _crew: number,
        private readonly _cost: number) {
    // tslint:enable: variable-name

        if (this.hullPoints <= 0) {
            throw new Error("Hull points must be positive");
        }

        if (this.maneuverability < 0) {
            throw new Error("Maneuverability must be 0 or greater");
        }

        if (this.stun <= 0) {
            throw new Error("Stun must be positive");
        }

        if (this.wound <= 0) {
            throw new Error("Wound must be positive");
        }

        if (this.stun <= 0) {
            throw new Error("Mortal must be positive");
        }

        if (this.stun <= 0) {
            throw new Error("Critical must be positive");
        }

        if (this.crew <= 0) {
            throw new Error("Crew must be positive");
        }
    }
}
