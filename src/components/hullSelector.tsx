import { Dropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react/lib/index";
import React from "react";
import { Hull } from "../model/baseComponents/hull";
import { HullFactory } from "../model/factories/hullFactory";
// tslint:disable: max-line-length

interface IHullUpdater {
    onHullChanged: (newHull: Hull) => void;
}

export function HullSelector(props: IHullUpdater) {
    const initialOptions: IDropdownOption[] = [
        { key: "militarySmallCraft", text: "Military, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.smallCraftMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryLight", text: "Military, light", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.lightMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryMedium", text: "Military, medium", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.mediumMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryHeavy", text: "Military, heavy", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.heavyMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militarySuperHeavy", text: "Military, super-heavy", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.superHeavyMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "civilianSmallCraft", text: "Civilian, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullFactory.smallCraftCivilian().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
    ];

    const handleHullChanged = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined): void => {
        if (option !== undefined) {
            props.onHullChanged(option.data as Hull);
        }
    };

    return (
        <Dropdown
            required
            label="Hull type"
            options={initialOptions}
            onChange={handleHullChanged}
            />
    );
}
// tslint:enable: max-line-length
