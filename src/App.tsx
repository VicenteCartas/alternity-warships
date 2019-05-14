import { Stack } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { Component } from "react";
import { ShipDebug } from "./components/ShipDebug";
import { ShipPanel } from "./components/ShipPanel";
import { Hull } from "./model/baseComponents/hull";
import { PowerPlantComponent } from "./model/baseComponents/powerPlantComponent";
import { Ship } from "./model/ship";

initializeIcons();

class App extends Component {
  public state = {
    ship: new Ship(),
  };

  public render() {
    return (
      <div>
        <Stack tokens={{ childrenGap: 50}} styles={{ root: { width: 700 } }}>
          <ShipPanel
            ship={this.state.ship}
            onNameChanged={this.updateShipName}
            onHullChanged={this.updateShipHull}
            onPowerPlantChanged={this.updateShipPowerPlant}
            onPowerPlantSizeChanged={this.updateShipPowerPlantSize} />
          <ShipDebug ship={this.state.ship} />
        </Stack>
      </div>
    );
  }

  // Based on: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react#51136076
  private updateShipName: (x: string) => void = (x) => {
    this.state.ship.name = x;
    this.forceUpdate();
  }

  private updateShipHull: (x: Hull) => void = (x) => {
    this.state.ship.hull = x;
    this.forceUpdate();
  }

  private updateShipPowerPlant: (x: PowerPlantComponent) => void = (x) => {
    this.state.ship.powerPlantComponent = x;
    this.forceUpdate();
  }

  private updateShipPowerPlantSize: (x: number) => void = (x) => {
    if (this.state.ship.powerPlant !== null) {
      this.state.ship.powerPlant.size = x;
      this.forceUpdate();
    }
  }
}

export default App;
