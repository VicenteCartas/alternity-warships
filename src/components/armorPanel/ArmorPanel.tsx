// tslint:disable: max-line-length

import { ColumnActionsMode, DetailsList, DetailsListLayoutMode, Dropdown, IColumn, IDropdownOption, IGroup, Selection, SelectionMode, Stack } from "office-ui-fabric-react";
import React, { useMemo } from "react";
import * as factory from "../../model/factories/ArmorPartFactory";
import { ArmorPart } from "../../model/parts/ArmorPart";
import { HullPart } from "../../model/parts/HullPart";

interface IArmorPanelProps {
    selectedHull?: HullPart;
    selectedArmor?: ArmorPart;
    onArmorSelected: (armor: ArmorPart) => void;
}

export const ArmorPanel: React.FC<IArmorPanelProps> = (props) => {
    return (
        <>
        </>
    );
};

// Columns rendering
function buildColumns(hull?: HullPart): IColumn[] {
    const columns: IColumn[] = [];

    columns.push({ key: "type", name: "Armor Type", fieldName: "name", minWidth: 75, maxWidth: 200, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "tech", name: "Tech", fieldName: "technologies", minWidth: 50, maxWidth: 100, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: renderTechnologies });
    columns.push({ key: "li", name: "LI", fieldName: "li", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "hi", name: "HI", fieldName: "hi", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "en", name: "En", fieldName: "en", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true });
    columns.push({ key: "hull", name: "Hull", fieldName: "hullPercentage", minWidth: 50, maxWidth: 75, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: (item?: any) => renderHullPoints(item, hull) });
    columns.push({ key: "cost", name: "Cost", fieldName: "cost", minWidth: 25, maxWidth: 50, columnActionsMode: ColumnActionsMode.clickable, isResizable: true, onRender: (item?: any) => renderCost(item, hull) });

    return columns;
}

function renderTechnologies(item?: any): any {
    if (item instanceof ArmorPart) {
        if (item.bonusHullPoints === 0) {
            return `${item.hullPoints}`;
        } else {
            return `${item.hullPoints} (+${item.bonusHullPoints})`;
        }
    }
}

function renderHullPoints(item?: any, hull?: HullPart): any {
    if (item instanceof ArmorPart) {
        if (item.bonusHullPoints === 0) {
            return `${item.hullPoints}`;
        } else {
            return `${item.hullPoints} (+${item.bonusHullPoints})`;
        }
    }
}

function renderCost(item?: any, hull?: HullPart): any {
    if (item instanceof ArmorPart) {
        if (item.bonusHullPoints === 0) {
            return `${item.hullPoints}`;
        } else {
            return `${item.hullPoints} (+${item.bonusHullPoints})`;
        }
    }
}
