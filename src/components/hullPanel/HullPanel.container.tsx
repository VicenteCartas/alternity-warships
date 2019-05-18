import React from "react";
import { HullPanel } from "./HullPanel";
import { IColumn, IGroup, ColumnActionsMode, buildColumns } from "office-ui-fabric-react/lib/DetailsList";
import { HullPart, Toughness } from "../../model/parts/HullPart";
import { HullPartFactory } from "../../model/factories/HullPartFactory";
import { IDropdownOption } from "office-ui-fabric-react";

interface IHullPanelContainerProps {

}

interface IHullPanelContainerState {
    hullCategoriesOptions: IDropdownOption[];
    hullCategoriesDefaultValue: string;
    columns: IColumn[];
    groups: IGroup[];
    hulls: HullPart[];
}

export class HullPanelContainer extends React.Component<IHullPanelContainerProps, IHullPanelContainerState> {
    private static hullTypesOptions: IDropdownOption[];
    private static columns: IColumn[];
    private static groups: IGroup[];
    private static hulls: HullPart[];

    constructor(props: Readonly<IHullPanelContainerProps>) {
        super(props);

        HullPanelContainer.hullTypesOptions = HullPanelContainer.buildHullTypesOptions(); 
        HullPanelContainer.columns = HullPanelColumnsRenderer.buildColumns();
        [HullPanelContainer.groups, HullPanelContainer.hulls] = HullPanelContainer.buildGroups();

        this.state = {
            hullCategoriesOptions: HullPanelContainer.hullTypesOptions,
            hullCategoriesDefaultValue: "military",
            columns: HullPanelContainer.columns,
            groups: HullPanelContainer.groups,
            hulls: HullPanelContainer.hulls
        }
    }

    render() {
        return (
            <HullPanel 
                hullCategoriesOptions={this.state.hullCategoriesOptions}
                hullCategoriesDefaultValue={this.state.hullCategoriesDefaultValue}
                columns={this.state.columns}
                groups={this.state.groups}
                hulls={this.state.hulls} />
        )
    }

    private static buildHullTypesOptions() {
        const hullTypesOptions: IDropdownOption[] = [];

        hullTypesOptions.push({ key: "military", text:"Military" });
        hullTypesOptions.push({ key: "civilian", text:"Civilian" });

        return hullTypesOptions;
    }

    private static buildGroups(): [IGroup[], HullPart[]] {
        let groups: IGroup[] = [];
        let hulls: HullPart[] = [];
        let start = 0;

        hulls = [...hulls, ...HullPartFactory.smallCraftMilitary()];
        groups.push({ key: "smallCraft", name:"Small craft", startIndex: start, count: hulls.length });

        start += groups[0].count;
        hulls = [...hulls, ...HullPartFactory.lightMilitary()];
        groups.push({ key: "lightShips", name:"Light ships", startIndex: start, count: hulls.length - start });

        start += groups[1].count;
        hulls = [...hulls, ...HullPartFactory.mediumMilitary()];
        groups.push({ key: "mediumShips", name:"Medium ships", startIndex: start, count: hulls.length - start });

        start += groups[2].count;
        hulls = [...hulls, ...HullPartFactory.heavyMilitary()];
        groups.push({ key: "heavyShips", name:"Heavy ships", startIndex: start, count: hulls.length - start });

        start += groups[3].count;
        hulls = [...hulls, ...HullPartFactory.superHeavyMilitary()];
        groups.push({ key: "superHeavyShips", name:"Super-heavy ships", startIndex: start, count: hulls.length - start });

        return [groups, hulls];
    }
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
