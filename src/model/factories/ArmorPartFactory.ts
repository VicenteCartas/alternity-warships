// tslint:disable: max-line-length
import { ArmorCategory, ArmorPart } from "../parts/ArmorPart";
import { ProgressLevel, Technology } from "../parts/ShipPart";

export function pl6(): ArmorPart[] {
    const armors: ArmorPart[] = [];

    armors.push(new ArmorPart("Polymeric", ProgressLevel.PL6, ArmorCategory.Light, [], "d4-1", "d4-1", "d4-2", 50000));
    armors.push(new ArmorPart("Reflective", ProgressLevel.PL6, ArmorCategory.Light, [], "d4-3", "d4-2", "d6-1", 50000));
    armors.push(new ArmorPart("Alloy", ProgressLevel.PL6, ArmorCategory.Medium, [], "d4+1", "d4+1", "d4", 150000));
    armors.push(new ArmorPart("Polymeric", ProgressLevel.PL6, ArmorCategory.Medium, [], "d4", "d4", "d4-1", 100000));
    armors.push(new ArmorPart("Reflective", ProgressLevel.PL6, ArmorCategory.Medium, [], "d4-2", "d4-1", "d6", 100000));
    armors.push(new ArmorPart("Alloy", ProgressLevel.PL6, ArmorCategory.Heavy, [], "d6+1", "d6+1", "d6", 300000));
    armors.push(new ArmorPart("Reflective", ProgressLevel.PL6, ArmorCategory.Heavy, [], "d4", "d4", "d8", 200000));
    armors.push(new ArmorPart("Alloy", ProgressLevel.PL6, ArmorCategory.SuperHeavy, [], "d6+3", "d6+3", "d6+2", 600000));

    return armors;
}

export function pl7(): ArmorPart[] {
    const armors: ArmorPart[] = [];

    armors.push(new ArmorPart("Cerametal", ProgressLevel.PL7, ArmorCategory.Light, [], "d6-1", "d6-1", "d6-1", 100000));
    armors.push(new ArmorPart("Cerametal", ProgressLevel.PL7, ArmorCategory.Medium, [], "d4+1", "d4+1", "d4+1", 200000));
    armors.push(new ArmorPart("Neutronite", ProgressLevel.PL7, ArmorCategory.Medium, [Technology.SuperMaterials], "d6+1", "d6+1", "d6+1", 500000));
    armors.push(new ArmorPart("Reactive", ProgressLevel.PL7, ArmorCategory.Medium, [], "d4+2", "d6", "d4", 150000));
    armors.push(new ArmorPart("Cerametal", ProgressLevel.PL7, ArmorCategory.Heavy, [], "d8", "d8", "d8", 400000));
    armors.push(new ArmorPart("Neutronite", ProgressLevel.PL7, ArmorCategory.Heavy, [Technology.SuperMaterials], "d8+1", "d8+1", "d8+1", 1000000));
    armors.push(new ArmorPart("Reactive", ProgressLevel.PL7, ArmorCategory.Heavy, [], "2d4+1", "d8", "d4+1", 300000));
    armors.push(new ArmorPart("Neutronite", ProgressLevel.PL7, ArmorCategory.SuperHeavy, [Technology.SuperMaterials], "d8+3", "d8+3", "d8+3", 2000000));
    armors.push(new ArmorPart("Reactive", ProgressLevel.PL7, ArmorCategory.SuperHeavy, [], "2d4+3", "d8+2", "d4+3", 600000));

    return armors;
}

export function pl8(): ArmorPart[] {
    const armors: ArmorPart[] = [];

    armors.push(new ArmorPart("Crystallis", ProgressLevel.PL8, ArmorCategory.Light, [Technology.PsiTech, Technology.EnergyTransformation], "d6-1", "d6", "d6+2", 250000));
    armors.push(new ArmorPart("Nanofluidic", ProgressLevel.PL8, ArmorCategory.Light, [Technology.SuperMaterials, Technology.ComputerTech], "d8-1", "d8-1", "d8", 500000));
    armors.push(new ArmorPart("Crystallis", ProgressLevel.PL8, ArmorCategory.Medium, [Technology.PsiTech, Technology.EnergyTransformation], "d6", "d6+1", "2d4+1", 500000));
    armors.push(new ArmorPart("Nanofluidic", ProgressLevel.PL8, ArmorCategory.Medium, [Technology.SuperMaterials, Technology.ComputerTech], "2d4", "2d4", "2d4", 1000000));
    armors.push(new ArmorPart("Nanofluidic", ProgressLevel.PL8, ArmorCategory.Heavy, [Technology.SuperMaterials, Technology.ComputerTech], "2d4+1", "2d4+2", "2d4+1", 2000000));
    armors.push(new ArmorPart("Nanofluidic", ProgressLevel.PL8, ArmorCategory.SuperHeavy, [Technology.SuperMaterials, Technology.ComputerTech], "2d4+3", "2d4+4", "2d4+3", 4000000));

    return armors;
}

// tslint:enable: max-line-length
