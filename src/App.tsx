import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, Pivot, PivotItem, Stack } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { Component } from "react";
import { HullPart } from "./model/parts/HullPart";
import { HullPanelContainer } from "./components/hullPanel/HullPanel.container";

initializeIcons();

interface IAppState {
  selectedHull?: HullPart
}

class App extends Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selectedHull: undefined
    } 
  }

  public render() {
    return (
      <div>
        <Customizer {...FluentCustomizations}>
          <Pivot>
            <PivotItem headerText = "Hulls">
              <HullPanelContainer selectedHull={this.state.selectedHull} />
            </PivotItem>
            <PivotItem headerText="Armor">
            </PivotItem>
          </Pivot>
        </Customizer>
      </div>
    );
  }
}

export default App;
