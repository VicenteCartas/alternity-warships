import { ProgressLevel, ShipPart, Technology } from "./ShipPart";

export enum ArmorCategory {
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    SuperHeavy = "Super-heavy",
}

export class ArmorPart extends ShipPart {
    public get ArmorCategory(): ArmorCategory {
        return this._armorCategory;
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
        switch (this.ArmorCategory) {
            case ArmorCategory.Light:
                return 2.5;
            case ArmorCategory.Medium:
                return 5;
            case ArmorCategory.Heavy:
                return 10;
            case ArmorCategory.SuperHeavy:
                return 20;
            default:
                throw new Error(`Unknown armor category: ${this.ArmorCategory}`);
        }
    }

    public get key(): string {
        return `${this.name}-${this.ArmorCategory}`;
    }

    constructor(
    // tslint:disable: variable-name
        name: string,
        pl: ProgressLevel,
        private readonly _armorCategory: ArmorCategory,
        technologies: Technology[],
        private readonly _li: string,
        private readonly _hi: string,
        private readonly _en: string,
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
    }
}
