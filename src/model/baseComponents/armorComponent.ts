import { ShipComponent, Technology } from "./shipComponent";

export enum ArmorType {
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    SuperHeavy = "Super-heavy",
}

export class ArmorComponent extends ShipComponent {
    public get ArmorType(): ArmorType {
        return this._armorType;
    }

    public get li(): string {
        return this._li;
    }

    public get hi(): string {
        return this._hi;
    }

    public get en(): string {
        return this._en;
    }

    public get hullPercentage(): number {
        return this._hullPercentage;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: number,
        private readonly _armorType: ArmorType,
        technologies: Technology[],
        private readonly _li: string,
        private readonly _hi: string,
        private readonly _en: string,
        private readonly _hullPercentage: number,
        cost: number) {
    // tslint:enable: variable-name
        super(name, pl, technologies, cost);

        if (this.li.length < 1) {
            throw new Error("LI value of the armor can't be empty");
        }

        if (this.hi.length < 1) {
            throw new Error("HI value of the armor can't be empty");
        }

        if (this.en.length < 1) {
            throw new Error("EN value of the armor can't be empty");
        }

        if (this.hullPercentage <= 0) {
            throw new Error("Hull Percentage must be a positive number");
        }
    }
}
