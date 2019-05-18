// tslint:disable: max-line-length
import { HullPart, HullSize, HullType, Toughness } from "../parts/HullPart";

export class HullPartFactory {
    public static smallCraftMilitary(): HullPart[] {
        const hulls: HullPart[] = [];

        hulls.push(new HullPart("Fighter", HullType.Military, HullSize.SmallCraft, 10, Toughness.Small, 3, 4, 5, 5, 3, 2, 1, 350000));
        hulls.push(new HullPart("Strike fighter", HullType.Military, HullSize.SmallCraft, 15, Toughness.Small, 3, 4, 8, 8, 4, 2, 2, 500000));
        hulls.push(new HullPart("Cutter", HullType.Military, HullSize.SmallCraft, 20, Toughness.Small, 2, 4, 10, 10, 5, 3, 4, 600000));
        hulls.push(new HullPart("Scout", HullType.Military, HullSize.SmallCraft, 30, Toughness.Small, 2, 4, 15, 15, 8, 4, 6, 800000));
        hulls.push(new HullPart("Escort", HullType.Military, HullSize.SmallCraft, 40, Toughness.Small, 2, 4, 20, 20, 10, 5, 10, 1000000));

        return hulls;
    }

    public static lightMilitary(): HullPart[] {
        const hulls: HullPart[] = [];

        hulls.push(new HullPart("Corvette", HullType.Military, HullSize.LightShip, 80, Toughness.Light, 1, 3, 20, 20, 10, 5, 20, 5000000));
        hulls.push(new HullPart("Frigate", HullType.Military, HullSize.LightShip, 120, Toughness.Light, 1, 3, 30, 30, 15, 8, 60, 15000000));
        hulls.push(new HullPart("Destroyer", HullType.Military, HullSize.LightShip, 160, Toughness.Light, 1, 3, 40, 40, 20, 10, 80, 30000000));

        return hulls;
    }

    public static mediumMilitary(): HullPart[] {
        const hulls: HullPart[] = [];

        hulls.push(new HullPart("Light cruiser", HullType.Military, HullSize.MediumShip, 320, Toughness.Medium, 0, 2, 40, 40, 20, 10, 240, 50000000));
        hulls.push(new HullPart("Heavy cruiser", HullType.Military, HullSize.MediumShip, 400, Toughness.Medium, 0, 2, 45, 45, 23, 12, 300, 100000000));
        hulls.push(new HullPart("Armored Cruiser", HullType.Military, HullSize.MediumShip, 480, Toughness.Medium, -1, 2, 60, 60, 30, 15, 360, 200000000));

        return hulls;
    }

    public static heavyMilitary(): HullPart[] {
        const hulls: HullPart[] = [];

        hulls.push(new HullPart("Battlecruiser", HullType.Military, HullSize.HeavyShip, 960, Toughness.Heavy, -2, 1, 60, 60, 30, 15, 960, 500000000));
        hulls.push(new HullPart("Battleship", HullType.Military, HullSize.HeavyShip, 1200, Toughness.Heavy, -2, 1, 75, 75, 38, 19, 1200, 1000000000));
        hulls.push(new HullPart("Fleet carrier", HullType.Military, HullSize.HeavyShip, 1600, Toughness.Heavy, -3, 1, 100, 100, 50, 25, 1600, 1500000000));

        return hulls;
    }

    public static superHeavyMilitary(): HullPart[] {
        const hulls: HullPart[] = [];

        hulls.push(new HullPart("Dreadnought", HullType.Military, HullSize.SuperHeavyShip, 3200, Toughness.SuperHeavy, -3, 1, 100, 100, 50, 25, 3200, 2000000000));
        hulls.push(new HullPart("Super-carrier", HullType.Military, HullSize.SuperHeavyShip, 4000, Toughness.SuperHeavy, -4, 1, 125, 125, 63, 32, 4000, 4000000000));
        hulls.push(new HullPart("Super-dreadnought", HullType.Military, HullSize.SuperHeavyShip, 6400, Toughness.SuperHeavy, -5, 1, 200, 200, 100, 50, 6400, 10000000000));
        hulls.push(new HullPart("Fortress ship", HullType.Military, HullSize.SuperHeavyShip, 12000, Toughness.SuperHeavy, -5, 1, 375, 375, 188, 94, 12000, 50000000000));

        return hulls;
    }

    public static smallCraftCivilian(): HullPart[] {
        const hulls: HullPart[] = []

        hulls.push(new HullPart("Launch", HullType.Civilian, HullSize.SmallCraft, 8, Toughness.Good, 3, 4, 4, 4, 2, 1, 2, 300000));
        hulls.push(new HullPart("Courier", HullType.Civilian, HullSize.SmallCraft, 16, Toughness.Good, 2, 4, 8, 8, 4, 2, 4, 400000));
        hulls.push(new HullPart("Trader", HullType.Civilian, HullSize.SmallCraft, 24, Toughness.Good, 2, 4, 12, 12, 6, 3, 6, 500000));
        hulls.push(new HullPart("Fast freighter", HullType.Civilian, HullSize.SmallCraft, 32, Toughness.Small, 2, 4, 16, 16, 8, 4, 8, 600000));
        hulls.push(new HullPart("Fast transport", HullType.Civilian, HullSize.SmallCraft, 40, Toughness.Small, 2, 4, 20, 20, 10, 5, 10, 800000));

        return hulls;
    }
}
// tslint:enable: max-line-length
