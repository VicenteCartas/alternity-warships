import React from "react";
import { HullPanel } from "./HullPanel";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";

interface IHullPanelContainerProps {

}

interface IHullPanelContainerState {
    columns: IColumn[];

}

export class HullPanelContainer extends React.Component<IHullPanelContainerProps, IHullPanelContainerState> {
    private static columns: IColumn[];

    constructor(props: Readonly<IHullPanelContainerProps>) {
        super(props);

        HullPanelContainer.columns = [
            { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
            { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true }
          ];
      

        this.state = {
            columns: HullPanelContainer.columns
        }
    }

    render() {
        return (
            <HullPanel 
                columns={this.state.columns}
                />
        )
    }
}
