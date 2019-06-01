// tslint:disable: max-line-length

import { PowerPlantPart } from "../parts/PowerPlantPart";
import { ProgressLevel, Technology } from "../parts/ShipPart";

export function pl6(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    // PL 6 Power Plants
    powerPlants.push(new PowerPlantPart("Solar Cell", ProgressLevel.PL6, [Technology.SuperMaterials], 1.5, 500000, 200000, 4));
    powerPlants.push(new PowerPlantPart("Fission Generator", ProgressLevel.PL6, [], 1.5, 1000000, 100000, 4));
    powerPlants.push(new PowerPlantPart("Fusion Generator", ProgressLevel.PL6, [Technology.FusionTech], 2, 1000000, 200000, 2, 1000, 200));
    powerPlants.push(new PowerPlantPart("Grav-fusion Cell", ProgressLevel.PL6, [Technology.GravityManipulation], 2.5, 2000000, 200000, 4, 1000, 300));
    powerPlants.push(new PowerPlantPart("Fuel Tank", ProgressLevel.PL6, [], 0, 50000, 10000, 0));

    return powerPlants;
}

export function pl7(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    return powerPlants;
}

export function pl8(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    return powerPlants;
}

// tslint:enable: max-line-length
