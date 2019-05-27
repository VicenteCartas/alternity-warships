// tslint:disable: max-line-length

import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, Dropdown, IColumn, IDropdownOption, IGroup, ISelection, Stack, TextField } from "office-ui-fabric-react";
import React, { useMemo } from "react";
import { HullPartFactory } from "../../model/factories/HullPartFactory";
import { HullPart, Toughness } from "../../model/parts/HullPart";

interface IHullPanelProps {
    selectedHullCategory: string;
    selectedHull?: HullPart;
    onHullCategorySelected: (category: string) => void;
    onHullSelected: (hull: HullPart) => void;
    // selection?: ISelection;
    // onListFiltered: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => void;
    // onItemSelected: (item?: any, index?: number | undefined, ev?: Event | undefined) => void;
    // onColumnHeaderClicked: (event?: React.MouseEvent<HTMLElement>, column?: IColumn) => void;
}

export const HullPanel: React.FC<IHullPanelProps> = (props) => {
    const [groups, hulls] = buildGroups(props.selectedHullCategory);

    return (
        <div>
            <Stack horizontal gap={20} >
                <TextField
                    label="Filter by name:"
                    // onChange={props.onListFiltered}
                    styles={{ root: { maxWidth: "300px" } }} />
                <Dropdown
                    label="Hull category"
                    options={buildHullTypesOptions()}
                    defaultSelectedKey={props.selectedHullCategory}
                    onChange={(event, option, index) => props.onHullCategorySelected((option) ? option.key.toString() : "military")} />
            </Stack>
            <DetailsList
                columns={buildColumns()}
                groups={groups}
                items={hulls}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                // selection={props.selection}
                // onItemInvoked={props.onItemSelected}
                // onColumnHeaderClick={props.onColumnHeaderClicked}
                />
        </div>
    );
};

// Initial data
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

    if (category === "military") {
        hulls = [...hulls, ...HullPartFactory.smallCraftMilitary()];
        groups.push({ key: "smallCraft", name: "Small craft", startIndex: start, count: hulls.length });

        start += groups[0].count;
        hulls = [...hulls, ...HullPartFactory.lightMilitary()];
        groups.push({ key: "lightShips", name: "Light ships", startIndex: start, count: hulls.length - start });

        start += groups[1].count;
        hulls = [...hulls, ...HullPartFactory.mediumMilitary()];
        groups.push({ key: "mediumShips", name: "Medium ships", startIndex: start, count: hulls.length - start });

        start += groups[2].count;
        hulls = [...hulls, ...HullPartFactory.heavyMilitary()];
        groups.push({ key: "heavyShips", name: "Heavy ships", startIndex: start, count: hulls.length - start });

        start += groups[3].count;
        hulls = [...hulls, ...HullPartFactory.superHeavyMilitary()];
        groups.push({ key: "superHeavyShips", name: "Super-heavy ships", startIndex: start, count: hulls.length - start });
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
