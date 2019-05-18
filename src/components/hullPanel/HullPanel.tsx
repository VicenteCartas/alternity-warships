import { DetailsList, DetailsListLayoutMode, IColumn, IGroup, ISelection, TextField, Dropdown, IDropdownOption, Stack } from "office-ui-fabric-react";
import React from "react";
import { HullPart } from "../../model/parts/HullPart";

interface IHullPanelProps {
// tslint:disable-next-line: max-line-length
    hullCategoriesOptions: IDropdownOption[]
    hullCategoriesDefaultValue: string,
    columns: IColumn[];
    groups: IGroup[];
    hulls: HullPart[];
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
                    defaultSelectedKey={props.hullCategoriesDefaultValue}
                    //onChange={props.onCategoryChanged} 
                    />
            </Stack>
            <DetailsList
                columns={props.columns}
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
