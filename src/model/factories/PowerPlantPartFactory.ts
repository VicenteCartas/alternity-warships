// tslint:disable: max-line-length

import { PowerPlantPart } from "../parts/PowerPlantPart";
import { ProgressLevel, Technology } from "../parts/ShipPart";

export function pl6(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    // PL 6 Power Plants
    powerPlants.push(new PowerPlantPart("Solar cell", ProgressLevel.PL6, [Technology.SuperMaterials], 1.5, 500000, 200000, 4));
    powerPlants.push(new PowerPlantPart("Fission generator", ProgressLevel.PL6, [], 1.5, 1000000, 100000, 4));
    powerPlants.push(new PowerPlantPart("Fusion generator", ProgressLevel.PL6, [Technology.FusionTech], 2, 1000000, 200000, 2, 1000, 200));
    powerPlants.push(new PowerPlantPart("Grav-fusion cell", ProgressLevel.PL6, [Technology.GravityManipulation], 2.5, 2000000, 200000, 4, 1000, 300));
    powerPlants.push(new PowerPlantPart("Fuel tank", ProgressLevel.PL6, [], 0, 50000, 10000, 0));

    return powerPlants;
}

export function pl7(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    powerPlants.push(new PowerPlantPart("Tachyonic collider", ProgressLevel.PL7, [Technology.QuantumManipulation], 2.5, 1000000, 100000, 2));
    powerPlants.push(new PowerPlantPart("Antimatter reactor", ProgressLevel.PL7, [Technology.AntimatterTech], 3, 4000000, 400000, 3));
    powerPlants.push(new PowerPlantPart("Mass collider", ProgressLevel.PL7, [Technology.MatterCodding], 3.5, 2000000, 250000, 2));

    return powerPlants;
}

export function pl8(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    powerPlants.push(new PowerPlantPart("Dynamic mass reactor", ProgressLevel.PL8, [Technology.DarkMatterTech], 4, 3000000, 200000, 1));
    powerPlants.push(new PowerPlantPart("Matter converter", ProgressLevel.PL8, [Technology.MatterCodding, Technology.EnergyTransformation], 4.5, 4000000, 200000, 2));
    powerPlants.push(new PowerPlantPart("Quantum cell", ProgressLevel.PL8, [Technology.QuantumManipulation], 5, 5000000, 400000, 3));

    return powerPlants;
}

export function pl9(): PowerPlantPart[] {
    const powerPlants: PowerPlantPart[] = [];

    powerPlants.push(new PowerPlantPart("Singularity generator", ProgressLevel.PL9, [Technology.GravityManipulation], 6, 10000000, 500000, 20));

    return powerPlants;
}

// tslint:enable: max-line-length
