// tslint:disable:max-line-length
import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, IColumn, IGroup, Selection, SelectionMode } from "office-ui-fabric-react";
import React from "react";
import * as factory from "../../model/factories/PowerPlantPartFactory";
import { PowerPlantPart } from "../../model/parts/PowerPlantPart";
import { ProgressLevel } from "../../model/parts/ShipPart";

interface IPowerPlantPanelProps {
    onPowerPlantAdded: (powerPlant: PowerPlantPart) => void;
}

export const PowerPlantPanel: React.FC<IPowerPlantPanelProps> = (props: IPowerPlantPanelProps) => {
    const [groups, powerPlants] = buildGroups();
    const selection: Selection = new Selection();
    selection.setItems(powerPlants, true);

    return (
        <DetailsList
            layoutMode={DetailsListLayoutMode.justified}
            compact={true}
            columns={buildColumns()}
            groups={groups}
            items={powerPlants}
            setKey="selectionKey"
            selectionMode={SelectionMode.single}
            selectionPreservedOnEmptyClick={true}
            selection={selection} />
    );
};

// Data
function buildGroups(): [IGroup[], PowerPlantPart[]] {
    const groups: IGroup[] = [];
    let powerPlants: PowerPlantPart[] = [];
    let start = 0;

    powerPlants = [...powerPlants, ...factory.pl6()];
    groups.push({ key: "pl6", name: `${ProgressLevel.PL6.toString()}`, startIndex: start, count: powerPlants.length });

    start += groups[0].count;
    powerPlants = [...powerPlants, ...factory.pl7()];
    groups.push({ key: "pl7", name: `${ProgressLevel.PL7.toString()}`, startIndex: start, count: powerPlants.length - start });

    start += groups[1].count;
    powerPlants = [...powerPlants, ...factory.pl8()];
    groups.push({ key: "pl8", name: `${ProgressLevel.PL8.toString()}`, startIndex: start, count: powerPlants.length - start });

    start += groups[2].count;
    powerPlants = [...powerPlants, ...factory.pl9()];
    groups.push({ key: "pl9", name: `${ProgressLevel.PL9.toString()}`, startIndex: start, count: powerPlants.length - start });

    return [groups, powerPlants];
}

// Columns rendering
function buildColumns(): IColumn[] {
    const columns: IColumn[] = [];

    columns.push({ key: "type", name: "Power plant", fieldName: "name", minWidth: 125, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "tech", name: "Tech", fieldName: "technologies", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderTechnologies });
    columns.push({ key: "power", name: "Pow", fieldName: "powerProduced", minWidth: 40, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "baseCost", name: "Base cost", fieldName: "cost", minWidth: 70, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderCost });
    columns.push({ key: "baseCostPerHullPoint", name: "Cost/Hull pt.", fieldName: "costPerHullPoint", minWidth: 90, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderCostPerHullPoint });
    columns.push({ key: "minimumSize", name: "Min size", fieldName: "minimumSize", minWidth: 60, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "usesFuel", name: "Fuel?", fieldName: "none", minWidth: 40, maxWidth: 40, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderUsesFuel });
    columns.push({ key: "fuelCost", name: "Fuel cost", fieldName: "fuelCost", minWidth: 65, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderFuelCost });
    columns.push({ key: "fuelEfficiency", name: "Fuel efficiency", fieldName: "fuelEfficiency", minWidth: 100, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderFuelEfficiency });

    return columns;
}

function renderTechnologies(item?: any): any {
    if (item instanceof PowerPlantPart) {
        if (item.technologies.length === 0 ) {
            return "-";
        } else {
            return `${item.technologies.map((t) => t.toString()).join(",")}`;
        }
    }
}

function renderCost(item?: any): any {
    if (item instanceof PowerPlantPart) {
        return renderMoney(item.cost);
    }
}

function renderCostPerHullPoint(item?: any): any {
    if (item instanceof PowerPlantPart) {
        return renderMoney(item.costPerHullPoint);
    }
}

function renderUsesFuel(item?: any): any {
    if (item instanceof PowerPlantPart) {
        if (item.fuelCost) {
            return "Yes";
        } else {
            return "No";
        }
    }
}

function renderFuelCost(item?: any): any {
    if (item instanceof PowerPlantPart) {
        return renderMoney(item.fuelCost);
    }
}

function renderFuelEfficiency(item?: any): any {
    if (item instanceof PowerPlantPart) {
        if (item.fuelEfficiency) {
            return item.fuelEfficiency;
        } else {
            return "-";
        }
    }
}

function renderMoney(cost?: number): string {
    if (!cost) {
        return "-";
    } else if (cost >= 0 && cost < 1000000) {
        return `${cost / 1000} K`;
    } else {
        return `${cost / 1000000} M`;
    }
}

// tslint:enable:max-line-length
