import { DetailsList, DetailsListLayoutMode, IColumn, ISelection, TextField } from "office-ui-fabric-react";
import React from "react";
import { HullPart } from "../../model/parts/HullPart";

interface IHullPanelProps {
// tslint:disable-next-line: max-line-length
    items: HullPart[];
    columns: IColumn[];
    selection?: ISelection;
    onFilter: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => void;
    onItemInvoked: (item?: any, index?: number | undefined, ev?: Event | undefined) => void;
}

export function HullPanel(props: IHullPanelProps) {
    return (
        <div>
            <TextField
                label="Filter by name:"
                onChange={props.onFilter}
                styles={{ root: { maxWidth: "300px" } }}
            />
            <DetailsList
                items={props.items}
                columns={props.columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selection={props.selection}
                selectionPreservedOnEmptyClick={true}
                onItemInvoked={props.onItemInvoked}
          />
        </div>
    );
}
