import { ArmorPart, ArmorType } from "../parts/ArmorPart";

export class ArmorPartFactory {
    public static getDefault(): ArmorPart[] {
        const armors: ArmorPart[] = [];

        // PL 6 Armors
        armors.push(new ArmorPart("Polymeric", 6, ArmorType.Light, [], "d4-1", "d4-1", "d4-2", 2.5, 50000));
        armors.push(new ArmorPart("Reflective", 6, ArmorType.Light, [], "d4-3", "d4-2", "d6-1", 2.5, 50000));
        armors.push(new ArmorPart("Alloy", 6, ArmorType.Medium, [], "d4+1", "d4+1", "d4", 5, 150000));
        armors.push(new ArmorPart("Polymeric", 6, ArmorType.Medium, [], "d4", "d4", "d4-1", 5, 100000));
        armors.push(new ArmorPart("Reflective", 6, ArmorType.Medium, [], "d4-2", "d4-1", "d6", 5, 100000));
        armors.push(new ArmorPart("Alloy", 6, ArmorType.Heavy, [], "d6+1", "d6+1", "d6", 10, 300000));
        armors.push(new ArmorPart("Reflective", 6, ArmorType.Heavy, [], "d4", "d4", "d8", 10, 200000));
        armors.push(new ArmorPart("Alloy", 6, ArmorType.SuperHeavy, [], "d6+3", "d6+3", "d6+2", 20, 600000));

        // PL 7 Armors

        return armors;
    }
}
