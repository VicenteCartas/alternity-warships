// tslint:disable: max-line-length

import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, Dropdown, IColumn, IDropdownOption, IGroup, Label, Selection, SelectionMode, Stack } from "office-ui-fabric-react";
import React, { useMemo } from "react";
import * as factory from "../../model/factories/HullPartFactory";
import { HullPart, Toughness } from "../../model/parts/HullPart";

interface IHullPanelProps {
    selectedHullCategory: string;
    selectedHull?: HullPart;
    onHullCategorySelected: (category: string) => void;
    onHullSelected: (hull: HullPart) => void;
}

export const HullPanel: React.FC<IHullPanelProps> = (props) => {
    const [groups, hulls] = useMemo(() => buildGroups(props.selectedHullCategory), [props.selectedHullCategory]);
    const selection: Selection = new Selection({onSelectionChanged: () => handleSelection()});
    selection.setItems(hulls, true);

    const handleSelection: () => void = () => {
        const selectedItems = selection.getSelection();
        if (selectedItems.length > 0) {
            const selectedItem: HullPart = selectedItems[0] as HullPart;

            if (props.selectedHull &&
                (selectedItem.key !== props.selectedHull!.key)) {
                props.onHullSelected(selectedItems[0] as HullPart);
            }
        }
    };

    if (props.selectedHull) {
        selection.setKeySelected(props.selectedHull.key, true, false);
    }

    return (
        <Stack gap={5}>
            <Stack horizontal gap={10}>
                <Label>Hull category</Label>
                <Dropdown
                    options={buildHullTypesOptions()}
                    defaultSelectedKey={props.selectedHullCategory}
                    onChange={(event, option, index) => props.onHullCategorySelected((option) ? option.key.toString() : "military")}
                    styles={{dropdown: {width: 125}}} />
            </Stack>
            <DetailsList
                layoutMode={DetailsListLayoutMode.justified}
                compact={true}
                columns={buildColumns()}
                groups={groups}
                items={hulls}
                setKey="selectionKey"
                selectionMode={SelectionMode.single}
                selectionPreservedOnEmptyClick={true}
                selection={selection} />
        </Stack>
    );
};

// Data
function buildHullTypesOptions() {
    const hullTypesOptions: IDropdownOption[] = [];

    hullTypesOptions.push({ key: "military", text: "Military" });
    hullTypesOptions.push({ key: "civilian", text: "Civilian" });

    return hullTypesOptions;
}

function buildGroups(category: string): [IGroup[], HullPart[]] {
    const groups: IGroup[] = [];
    let hulls: HullPart[] = [];
    let start = 0;

    switch (category) {
        case "civilian": {
            hulls = [...hulls, ...factory.smallCraftCivilian()];
            groups.push({ key: "smallCraft", name: "Small craft", startIndex: start, count: hulls.length });

            start += groups[0].count;
            hulls = [...hulls, ...factory.lightCivilian()];
            groups.push({ key: "lightShips", name: "Light ships", startIndex: start, count: hulls.length - start });

            start += groups[1].count;
            hulls = [...hulls, ...factory.mediumCivilian()];
            groups.push({ key: "mediumShips", name: "Medium ships", startIndex: start, count: hulls.length - start });

            start += groups[2].count;
            hulls = [...hulls, ...factory.heavyCivilian()];
            groups.push({ key: "heavyShips", name: "Heavy ships", startIndex: start, count: hulls.length - start });

            start += groups[3].count;
            hulls = [...hulls, ...factory.superHeavyCivilian()];
            groups.push({ key: "superHeavyShips", name: "Super-heavy ships", startIndex: start, count: hulls.length - start });
            break;
        }

        default: {
            hulls = [...hulls, ...factory.smallCraftMilitary()];
            groups.push({ key: "smallCraft", name: "Small craft", startIndex: start, count: hulls.length });

            start += groups[0].count;
            hulls = [...hulls, ...factory.lightMilitary()];
            groups.push({ key: "lightShips", name: "Light ships", startIndex: start, count: hulls.length - start });

            start += groups[1].count;
            hulls = [...hulls, ...factory.mediumMilitary()];
            groups.push({ key: "mediumShips", name: "Medium ships", startIndex: start, count: hulls.length - start });

            start += groups[2].count;
            hulls = [...hulls, ...factory.heavyMilitary()];
            groups.push({ key: "heavyShips", name: "Heavy ships", startIndex: start, count: hulls.length - start });

            start += groups[3].count;
            hulls = [...hulls, ...factory.superHeavyMilitary()];
            groups.push({ key: "superHeavyShips", name: "Super-heavy ships", startIndex: start, count: hulls.length - start });
        }
    }

    return [groups, hulls];
}

// Columns rendering
function buildColumns(): IColumn[] {
    const columns: IColumn[] = [];

    columns.push({ key: "type", name: "Hull Type", fieldName: "name", minWidth: 75, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "hullPoints", name: "Hull Pts.", fieldName: "hullPoints", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderHullPoints });
    columns.push({ key: "toughness", name: "Tough", fieldName: "toughness", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderToughness });
    columns.push({ key: "targetModifier", name: "Target", fieldName: "targetModifier", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderTargetModifier });
    columns.push({ key: "maneuverability", name: "Mvr", fieldName: "maneuverability", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "stun", name: "s", fieldName: "stun", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "wound", name: "w", fieldName: "wound", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "mortal", name: "m", fieldName: "mortal", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "critical", name: "c", fieldName: "critical", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "crew", name: "Crew", fieldName: "crew", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "cost", name: "Cost", fieldName: "cost", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderCost });

    return columns;
}

function renderHullPoints(item?: any): any {
    if (item instanceof HullPart) {
        if (item.bonusHullPoints === 0) {
            return `${item.hullPoints}`;
        } else {
            return `${item.hullPoints} (+${item.bonusHullPoints})`;
        }
    }
}

function renderToughness(item?: any): any {
    if (item instanceof HullPart) {
        switch (item.toughness) {
            case Toughness.Good:
                return "(Gd)";
            case Toughness.Small:
                return "Sm";
            case Toughness.Light:
                return "Lt";
            case Toughness.Medium:
                return "Md";
            case Toughness.Heavy:
                return "Hv";
            case Toughness.SuperHeavy:
                return "SHv";
            default:
                return "-";
        }
    }
}

function renderTargetModifier(item?: any): any {
    if (item instanceof HullPart) {
        if (item.targetModifier === 0) {
            return "0";
        } else if (item.targetModifier === 1 || item.targetModifier === -1) {
            return `${item.targetModifier} step`;
        } else {
            return `${item.targetModifier} steps`;
        }
    }
}

function renderCost(item?: any): any {
    if (item instanceof HullPart) {
        if (item.cost >= 0 && item.cost < 1000000) {
            return `${item.cost / 1000} K`;
        } else {
            return `${item.cost / 1000000} M`;
        }
    }
}
