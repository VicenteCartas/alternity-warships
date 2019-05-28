// tslint:disable: max-line-length
import { HullCategory, HullPart, HullSize, Toughness } from "../parts/HullPart";

export function smallCraftMilitary(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Fighter", HullCategory.Military, HullSize.SmallCraft, 10, Toughness.Small, 3, 4, 5, 5, 3, 2, 1, 350000));
    hulls.push(new HullPart("Strike fighter", HullCategory.Military, HullSize.SmallCraft, 15, Toughness.Small, 3, 4, 8, 8, 4, 2, 2, 500000));
    hulls.push(new HullPart("Cutter", HullCategory.Military, HullSize.SmallCraft, 20, Toughness.Small, 2, 4, 10, 10, 5, 3, 4, 600000));
    hulls.push(new HullPart("Scout", HullCategory.Military, HullSize.SmallCraft, 30, Toughness.Small, 2, 4, 15, 15, 8, 4, 6, 800000));
    hulls.push(new HullPart("Escort", HullCategory.Military, HullSize.SmallCraft, 40, Toughness.Small, 2, 4, 20, 20, 10, 5, 10, 1000000));

    return hulls;
}

export function lightMilitary(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Corvette", HullCategory.Military, HullSize.LightShip, 80, Toughness.Light, 1, 3, 20, 20, 10, 5, 20, 5000000));
    hulls.push(new HullPart("Frigate", HullCategory.Military, HullSize.LightShip, 120, Toughness.Light, 1, 3, 30, 30, 15, 8, 60, 15000000));
    hulls.push(new HullPart("Destroyer", HullCategory.Military, HullSize.LightShip, 160, Toughness.Light, 1, 3, 40, 40, 20, 10, 80, 30000000));

    return hulls;
}

export function mediumMilitary(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Light cruiser", HullCategory.Military, HullSize.MediumShip, 320, Toughness.Medium, 0, 2, 40, 40, 20, 10, 240, 50000000));
    hulls.push(new HullPart("Heavy cruiser", HullCategory.Military, HullSize.MediumShip, 400, Toughness.Medium, 0, 2, 45, 45, 23, 12, 300, 100000000));
    hulls.push(new HullPart("Armored Cruiser", HullCategory.Military, HullSize.MediumShip, 480, Toughness.Medium, -1, 2, 60, 60, 30, 15, 360, 200000000));

    return hulls;
}

export function heavyMilitary(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Battlecruiser", HullCategory.Military, HullSize.HeavyShip, 960, Toughness.Heavy, -2, 1, 60, 60, 30, 15, 960, 500000000));
    hulls.push(new HullPart("Battleship", HullCategory.Military, HullSize.HeavyShip, 1200, Toughness.Heavy, -2, 1, 75, 75, 38, 19, 1200, 1000000000));
    hulls.push(new HullPart("Fleet carrier", HullCategory.Military, HullSize.HeavyShip, 1600, Toughness.Heavy, -3, 1, 100, 100, 50, 25, 1600, 1500000000));

    return hulls;
}

export function superHeavyMilitary(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Dreadnought", HullCategory.Military, HullSize.SuperHeavyShip, 3200, Toughness.SuperHeavy, -3, 1, 100, 100, 50, 25, 3200, 2000000000));
    hulls.push(new HullPart("Super-carrier", HullCategory.Military, HullSize.SuperHeavyShip, 4000, Toughness.SuperHeavy, -4, 1, 125, 125, 63, 32, 4000, 4000000000));
    hulls.push(new HullPart("Super-dreadnought", HullCategory.Military, HullSize.SuperHeavyShip, 6400, Toughness.SuperHeavy, -5, 1, 200, 200, 100, 50, 6400, 10000000000));
    hulls.push(new HullPart("Fortress ship", HullCategory.Military, HullSize.SuperHeavyShip, 12000, Toughness.SuperHeavy, -5, 1, 375, 375, 188, 94, 12000, 50000000000));

    return hulls;
}

export function smallCraftCivilian(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Launch", HullCategory.Civilian, HullSize.SmallCraft, 8, Toughness.Good, 3, 4, 4, 4, 2, 1, 2, 300000));
    hulls.push(new HullPart("Courier", HullCategory.Civilian, HullSize.SmallCraft, 16, Toughness.Good, 2, 4, 8, 8, 4, 2, 4, 400000));
    hulls.push(new HullPart("Trader", HullCategory.Civilian, HullSize.SmallCraft, 24, Toughness.Good, 2, 4, 12, 12, 6, 3, 6, 500000));
    hulls.push(new HullPart("Fast freighter", HullCategory.Civilian, HullSize.SmallCraft, 32, Toughness.Small, 2, 4, 16, 16, 8, 4, 8, 600000));
    hulls.push(new HullPart("Fast transport", HullCategory.Civilian, HullSize.SmallCraft, 40, Toughness.Small, 2, 4, 20, 20, 10, 5, 10, 800000));

    return hulls;
}

export function lightCivilian(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Hauler", HullCategory.Civilian, HullSize.LightShip, 72, Toughness.Small, 1, 3, 18, 18, 9, 5, 18, 1000000));
    hulls.push(new HullPart("Industrial", HullCategory.Civilian, HullSize.LightShip, 96, Toughness.Small, 1, 3, 24, 24, 12, 6, 24, 2000000));

    return hulls;
}

export function mediumCivilian(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Medium freighter", HullCategory.Civilian, HullSize.MediumShip, 240, Toughness.Light, 0, 2, 30, 30, 15, 8, 30, 20000000));
    hulls.push(new HullPart("Clipper", HullCategory.Civilian, HullSize.MediumShip, 360, Toughness.Light, 0, 2, 45, 45, 23, 12, 360, 40000000));
    hulls.push(new HullPart("Medium transport", HullCategory.Civilian, HullSize.MediumShip, 480, Toughness.Light, -1, 2, 60, 60, 30, 15, 60, 60000000));

    return hulls;
}

export function heavyCivilian(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Tanker", HullCategory.Civilian, HullSize.HeavyShip, 720, Toughness.Medium, -1, 1, 45, 45, 23, 12, 90, 100000000));
    hulls.push(new HullPart("Liner", HullCategory.Civilian, HullSize.HeavyShip, 840, Toughness.Medium, -1, 1, 53, 53, 27, 14, 840, 150000000));
    hulls.push(new HullPart("Heavy transport", HullCategory.Civilian, HullSize.HeavyShip, 1280, Toughness.Medium, -2, 1, 80, 80, 40, 20, 160, 200000000));

    return hulls;
}

export function superHeavyCivilian(): HullPart[] {
    const hulls: HullPart[] = [];

    hulls.push(new HullPart("Super-freighter", HullCategory.Civilian, HullSize.SuperHeavyShip, 2400, Toughness.Heavy, -3, 0, 75, 75, 37, 19, 300, 400000000));
    hulls.push(new HullPart("Colony transport", HullCategory.Civilian, HullSize.SuperHeavyShip, 3600, Toughness.Heavy, -4, 0, 113, 113, 57, 29, 3600, 1000000000));

    return hulls;
}
// tslint:enable: max-line-length
