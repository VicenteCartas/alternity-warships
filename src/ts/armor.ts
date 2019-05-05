import { ShipComponent, Technology } from './shipComponent';

export enum ArmorType {
    Light,
    Medium,
    Heavy,
    SuperHeavy = "Super-heavy"
}

export class Armor extends ShipComponent {
    public get armorType(): ArmorType {
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
        name: string, 
        pl: number,
        private readonly _armorType: ArmorType,
        technologies: Technology[],
        private readonly _li: string,
        private readonly _hi: string,
        private readonly _en: string,
        private readonly _hullPercentage: number,
        cost: number) {
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

export class ArmorFactory {
    static getDefault(): Armor[] {
        let armors: Armor[] = [];

        // PL 6 Armors
        armors.push(new Armor(
            "Polymeric",
            6,
            ArmorType.Light,
            [],
            "d4-1",
            "d4-1",
            "d4-2",
            2.5,
            50000
        ));
        
        armors.push(new Armor(
            "Reflective",
            6,
            ArmorType.Light,
            [],
            "d4-3",
            "d4-2",
            "d6-1",
            2.5,
            50000
        ));
        
        armors.push(new Armor(
            "Alloy",
            6,
            ArmorType.Medium,
            [],
            "d4+1",
            "d4+1",
            "d4",
            5,
            150000
        ));
        
        armors.push(new Armor(
            "Polymeric",
            6,
            ArmorType.Medium,
            [],
            "d4",
            "d4",
            "d4-1",
            5,
            100000
        ));
        
        armors.push(new Armor(
            "Reflective",
            6,
            ArmorType.Medium,
            [],
            "d4-2",
            "d4-1",
            "d6",
            5,
            100000));
        
        armors.push(new Armor(
            "Alloy",
            6,
            ArmorType.Heavy,
            [],
            "d6+1",
            "d6+1",
            "d6",
            10,
            300000
        ));

        armors.push(new Armor(
            "Reflective",
            6,
            ArmorType.Heavy,
            [],
            "d4",
            "d4",
            "d8",
            10,
            200000
        ));

        armors.push(new Armor(
            "Alloy",
            6,
            ArmorType.SuperHeavy,
            [],
            "d6+3",
            "d6+3",
            "d6+2",
            20,
            600000
        ));
        
        // PL 7 Armors
        
        return armors;
    }
}