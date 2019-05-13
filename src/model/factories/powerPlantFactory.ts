import { PowerPlantComponent } from "../baseComponents/powerPlantComponent";
import { Technology } from "../baseComponents/shipComponent";

export class PowerPlantFactory {
    public static getDefault(): PowerPlantComponent[] {
        const powerPlants: PowerPlantComponent[] = [];

        // PL 6 Power Plants
        powerPlants.push(new PowerPlantComponent(
            "Solar Cell",
            6,
            [Technology.SuperMaterials],
            1.5,
            500000,
            200000,
            4,
        ));

        powerPlants.push(new PowerPlantComponent(
            "Fission Generator",
            6,
            [],
            1.5,
            1000000,
            100000,
            4,
        ));

        powerPlants.push(new PowerPlantComponent(
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

        powerPlants.push(new PowerPlantComponent(
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

        powerPlants.push(new PowerPlantComponent(
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
