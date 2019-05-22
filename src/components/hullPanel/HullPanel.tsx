import { DetailsList, DetailsListLayoutMode, IColumn, IGroup, ISelection, TextField, Dropdown, IDropdownOption, Stack, ColumnActionsMode } from "office-ui-fabric-react";
import React from "react";
import { HullPart, Toughness } from "../../model/parts/HullPart";

interface IHullPanelProps {
// tslint:disable-next-line: max-line-length
    hullCategoriesOptions: IDropdownOption[]
    hullCategoriesSelectedValue: string,
    groups: IGroup[];
    hulls: HullPart[];
    selectedHull?: HullPart,
    onHullCategoryChanged: (option?: IDropdownOption) => void
    // selection?: ISelection;
    // onListFiltered: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => void;
    // onItemSelected: (item?: any, index?: number | undefined, ev?: Event | undefined) => void;
    // onColumnHeaderClicked: (event?: React.MouseEvent<HTMLElement>, column?: IColumn) => void;
}

export function HullPanel(props: IHullPanelProps) {
    return (
        <div>
            <Stack horizontal gap={20} >
                <TextField
                    label="Filter by name:"
                    //onChange={props.onListFiltered}
                    styles={{ root: { maxWidth: "300px" } }} />
                <Dropdown
                    label="Hull category"
                    options={props.hullCategoriesOptions}
                    defaultSelectedKey={props.hullCategoriesSelectedValue}
                    onChange={(event, option, index) => props.onHullCategoryChanged(option)} />
            </Stack>
            <DetailsList
                columns={HullPanelColumnsRenderer.buildColumns()}
                groups={props.groups}
                items={props.hulls}
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                // selection={props.selection}
                // onItemInvoked={props.onItemSelected}
                // onColumnHeaderClick={props.onColumnHeaderClicked} 
                />
        </div>
    );
}

class HullPanelColumnsRenderer {
    public static buildColumns(): IColumn[] {
        const columns: IColumn[] = []

        columns.push({ key: 'type', name: 'Hull Type', fieldName: 'name', minWidth: 75, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'hullPoints', name: 'Hull Pts.', fieldName: 'hullPoints', minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: HullPanelColumnsRenderer.renderHullPoints });
        columns.push({ key: 'toughness', name: 'Tough', fieldName: 'toughness', minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: HullPanelColumnsRenderer.renderToughness });
        columns.push({ key: 'targetModifier', name: 'Target', fieldName: 'targetModifier', minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: HullPanelColumnsRenderer.renderTargetModifier });
        columns.push({ key: 'maneuverability', name: 'Mvr', fieldName: 'maneuverability', minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'stun', name: 's', fieldName: 'stun', minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'wound', name: 'w', fieldName: 'wound', minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'mortal', name: 'm', fieldName: 'mortal', minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'critical', name: 'c', fieldName: 'critical', minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'crew', name: 'Crew', fieldName: 'crew', minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
        columns.push({ key: 'cost', name: 'Cost', fieldName: 'cost', minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: HullPanelColumnsRenderer.renderCost });

        return columns;
    }

    private static renderHullPoints(item?: any, index?: number, column?: IColumn): any {
        if (item instanceof HullPart) {
            if (item.bonusHullPoints === 0) {
                return `${item.hullPoints}`;
            } else {
                return `${item.hullPoints} (+${item.bonusHullPoints})`;
            }
        }
    }

    private static renderToughness(item?: any, index?: number, column?: IColumn): any {
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

    private static renderTargetModifier(item?: any, index?: number, column?: IColumn): any {
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

    private static renderCost(item?: any, index?: number, column?: IColumn): any {
        if (item instanceof HullPart) {
            if (item.cost >= 0 && item.cost < 1000000) {
                return `${item.cost / 1000} K`;
            } else {
                return `${item.cost / 1000000} M`;
            }
        }
    }
}
