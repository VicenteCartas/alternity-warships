import { Hull, HullSize, HullType, Toughness } from "../baseComponents/hull";

export class HullFactory {
    public static getDefault(): Hull[] {
        const hulls: Hull[] = [];

        hulls.push(new Hull(
            "Fighter",
            HullType.Military,
            HullSize.SmallCraft,
            10,
            Toughness.Small,
            3,
            4,
            5,
            5,
            3,
            2,
            1,
            350000,
        ));

        hulls.push(new Hull(
            "Strike fighter",
            HullType.Military,
            HullSize.SmallCraft,
            15,
            Toughness.Small,
            3,
            4,
            8,
            8,
            4,
            2,
            2,
            500000,
        ));

        hulls.push(new Hull(
            "Cutter",
            HullType.Military,
            HullSize.SmallCraft,
            20,
            Toughness.Small,
            2,
            4,
            10,
            10,
            5,
            3,
            4,
            600000,
        ));

        return hulls;
    }
}
