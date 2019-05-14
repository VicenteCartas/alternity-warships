import { EngineComponent } from "../baseComponents/engineComponent";
import { Technology } from "../baseComponents/shipComponent";

export class EngineFactory {
    public static getDefault(): EngineComponent[] {
        const engines: EngineComponent[] = [];

        // PL 6 Engines
        engines.push(new EngineComponent(
            "Planetary thruster",
            6,
            [],
            1.0,
            1,
            200000,
            50000,
            0.1,
            0.25,
            0.5,
            1,
            undefined,
            undefined,
            undefined,
            10000,
            10,
        ));

        engines.push(new EngineComponent(
            "Photon sail",
            6,
            [],
            0,
            5,
            500000,
            50000,
            undefined,
            0.02,
            0.05,
            0.1,
            0.15,
            0.2,
            0.25,
        ));

        engines.push(new EngineComponent(
            "Fusion torch",
            6,
            [],
            0.33,
            3,
            500000,
            100000,
            0.5,
            1,
            1.5,
            2,
            3,
            4,
            5,
            1000,
            200,
        ));

        engines.push(new EngineComponent(
            "Ion engine",
            6,
            [Technology.SuperMaterials],
            0.5,
            2,
            800000,
            200000,
            undefined,
            0.5,
            1,
            1.5,
            2,
            3,
            4,
            5000,
            400,
        ));

        return engines;
    }
}