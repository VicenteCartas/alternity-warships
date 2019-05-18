import { Dropdown, DropdownMenuItemType, IDropdownOption } from "office-ui-fabric-react/lib/index";
import React from "react";
import { HullPartFactory } from "../model/factories/HullPartFactory";
import { HullPart } from "../model/parts/HullPart";
// tslint:disable: max-line-length

interface IHullUpdater {
    onHullChanged: (newHull: HullPart) => void;
}

export function HullSelector(props: IHullUpdater) {
    const initialOptions: IDropdownOption[] = [
        { key: "militarySmallCraft", text: "Military, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.smallCraftMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryLight", text: "Military, light", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.lightMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryMedium", text: "Military, medium", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.mediumMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militaryHeavy", text: "Military, heavy", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.heavyMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "militarySuperHeavy", text: "Military, super-heavy", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.superHeavyMilitary().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
        { key: "civilianSmallCraft", text: "Civilian, small-craft", itemType: DropdownMenuItemType.Header },
        ...(HullPartFactory.smallCraftCivilian().map((e) => ({ key: e.name, data: e, text: `${e.name} (${e.hullPoints}+${e.bonusHullPoints})` } as IDropdownOption))),
    ];

    const handleHullChanged = (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined): void => {
        if (option !== undefined) {
            props.onHullChanged(option.data as HullPart);
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
