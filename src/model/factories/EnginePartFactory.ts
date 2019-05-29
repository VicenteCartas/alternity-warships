import { EnginePart } from "../parts/EnginePart";
import { ProgressLevel, Technology } from "../parts/ShipPart";

export class EnginePartFactory {
    public static getDefault(): EnginePart[] {
        const engines: EnginePart[] = [];

        // PL 6 Engines
        engines.push(new EnginePart(
            "Planetary thruster",
            ProgressLevel.PL6,
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

        engines.push(new EnginePart(
            "Photon sail",
            ProgressLevel.PL6,
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

        engines.push(new EnginePart(
            "Fusion torch",
            ProgressLevel.PL6,
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

        engines.push(new EnginePart(
            "Ion engine",
            ProgressLevel.PL6,
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
