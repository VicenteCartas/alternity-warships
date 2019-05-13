import { Dropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react/lib/index";
import React from "react";
import { HullFactory } from "../model/factories/hullFactory";

// tslint:disable: max-line-length

export function HullSelector() {
    const initialOptions: IDropdownOption[] = [
        { key: "militarySmallCraft", text: "Military, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.smallCraftMilitary().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryLight", text: "Military, light", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.lightMilitary().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryMedium", text: "Military, medium", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.mediumMilitary().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryHeavy", text: "Military, heavy", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.heavyMilitary().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militarySuperHeavy", text: "Military, super-heavy", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.superHeavyMilitary().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "civilianSmallCraft", text: "Civilian, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.smallCraftCivilian().map((e) => ({ key: e.name, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
    ];

    return (
        <Dropdown
            label="Hull type"
            options={initialOptions}
            />
    );
}
// tslint:enable: max-line-length
