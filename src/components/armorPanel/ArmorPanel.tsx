// tslint:disable: max-line-length

import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, IColumn, IGroup, Selection, SelectionMode } from "office-ui-fabric-react";
import React from "react";
import * as factory from "../../model/factories/ArmorPartFactory";
import { ArmorPart } from "../../model/parts/ArmorPart";
import { HullPart } from "../../model/parts/HullPart";
import { ProgressLevel } from "../../model/parts/ShipPart";

interface IArmorPanelProps {
    selectedHull?: HullPart;
    selectedArmor?: ArmorPart;
    onArmorSelected: (armor?: ArmorPart) => void;
}

export const ArmorPanel: React.FC<IArmorPanelProps> = (props) => {
    const [groups, armors] = buildGroups();
    const selection: Selection = new Selection({onSelectionChanged: () => handleSelection()});
    selection.setItems(armors, true);

    const handleSelection: () => void = () => {
        const selectedArmors = selection.getSelection();

        if (selectedArmors.length > 0) {
            const selectedArmor = selectedArmors[0] as ArmorPart;

            if (!props.selectedArmor ||
                (selectedArmor.key.localeCompare(props.selectedArmor.key) !== 0)) {
                props.onArmorSelected(selectedArmor);
            }
        } else {
            props.onArmorSelected(undefined);
        }
    };

    if (props.selectedArmor) {
        selection.setKeySelected(props.selectedArmor.key, true, false);
    }

    return (
            <DetailsList
                layoutMode={DetailsListLayoutMode.justified}
                compact={true}
                columns={buildColumns(props.selectedHull)}
                groups={groups}
                items={armors}
                setKey="selectionKey"
                selectionMode={SelectionMode.single}
                selectionPreservedOnEmptyClick={true}
                selection={selection} />
    );
};

// Data
function buildGroups(): [IGroup[], ArmorPart[]] {
    const groups: IGroup[] = [];
    let armors: ArmorPart[] = [];
    let start = 0;

    armors = [...armors, ...factory.pl6()];
    groups.push({ key: "pl6", name: `${ProgressLevel.PL6.toString()}`, startIndex: start, count: armors.length });

    start += groups[0].count;
    armors = [...armors, ...factory.pl7()];
    groups.push({ key: "pl7", name: `${ProgressLevel.PL7.toString()}`, startIndex: start, count: armors.length - start });

    start += groups[1].count;
    armors = [...armors, ...factory.pl8()];
    groups.push({ key: "pl8", name: `${ProgressLevel.PL8.toString()}`, startIndex: start, count: armors.length - start });

    return [groups, armors];
}

// Columns rendering
function buildColumns(hull?: HullPart): IColumn[] {
    const columns: IColumn[] = [];

    columns.push({ key: "type", name: "Armor Type", fieldName: "name", minWidth: 75, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderType });
    columns.push({ key: "tech", name: "Tech", fieldName: "technologies", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderTechnologies });
    columns.push({ key: "li", name: "LI", fieldName: "li", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "hi", name: "HI", fieldName: "hi", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "en", name: "En", fieldName: "en", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "hull", name: "Hull", fieldName: "hullPercentage", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: (item?: any) => renderHullPoints(item, hull) });
    columns.push({ key: "cost", name: "Cost", fieldName: "cost", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: (item?: any) => renderCost(item, hull) });

    return columns;
}

function renderType(item?: any): any {
    if (item instanceof ArmorPart) {
        return `${item.name}, ${item.ArmorCategory.toString().toLowerCase()}`;
    }
}

function renderTechnologies(item?: any): any {
    if (item instanceof ArmorPart) {
        if (item.technologies.length === 0 ) {
            return "-";
        } else {
            return `${item.technologies.map((t) => t.toString()).join(",")}`;
        }
    }
}

function renderHullPoints(item?: any, hull?: HullPart): any {
    if (item instanceof ArmorPart) {
        if (hull) {
            return `${item.hullPercentage * hull.hullPoints / 100}`;
        } else {
            return `${item.hullPercentage}%`;
        }
    }
}

function renderCost(item?: any, hull?: HullPart): any {
    if (item instanceof ArmorPart) {
        if (hull) {
            return renderMoney(item.hullPercentage * hull.hullPoints / 100 * item.cost);
        } else {
            return renderMoney(item.cost);
        }
    }
}

function renderMoney(cost: number): string {
    if (cost >= 0 && cost < 1000000) {
        return `${cost / 1000} K`;
    } else {
        return `${cost / 1000000} M`;
    }
}
