import { PowerPlantPart } from "../parts/PowerPlantPart";
import { Technology } from "../parts/ShipPart";

export class PowerPlantPartFactory {
    public static getDefault(): PowerPlantPart[] {
        const powerPlants: PowerPlantPart[] = [];

        // PL 6 Power Plants
        powerPlants.push(new PowerPlantPart(
            "Solar Cell",
            6,
            [Technology.SuperMaterials],
            1.5,
            500000,
            200000,
            4,
        ));

        powerPlants.push(new PowerPlantPart(
            "Fission Generator",
            6,
            [],
            1.5,
            1000000,
            100000,
            4,
        ));

        powerPlants.push(new PowerPlantPart(
            "Fusion Generator",
            6,
            [Technology.FusionTech],
            2,
            1000000,
            200000,
            2,
            1000,
            200,
        ));

        powerPlants.push(new PowerPlantPart(
            "Grav-fusion Cell",
            6,
            [Technology.GravityManipulation],
            2.5,
            2000000,
            200000,
            4,
            1000,
            300,
        ));

        powerPlants.push(new PowerPlantPart(
            "Fuel Tank",
            6,
            [],
            0,
            50000,
            10000,
            0,
        ));

        return powerPlants;
    }
}
