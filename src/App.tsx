import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, Pivot, PivotItem, Stack } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { Component } from "react";
import { ShipDebug } from "./components/ShipDebug";
import { ShipPanel } from "./components/ShipPanel";
import { HullPart } from "./model/parts/HullPart";
import { PowerPlantPart } from "./model/parts/PowerPlantPart";
import { Ship } from "./model/Ship";

initializeIcons();

class App extends Component {
  public state = {
    ship: new Ship(),
  };

  public render() {
    const powerPlantSize: number = (this.state.ship.powerPlant !== null)
        ? this.state.ship.powerPlant.size
        : 0;

    return (
      <div>
        <Customizer {...FluentCustomizations}>
          <Pivot>
            <PivotItem headerText = "Hulls">

            </PivotItem>
            <PivotItem headerText="Old">
              <Stack tokens={{ childrenGap: 50}} styles={{ root: { width: 700 } }}>
                <ShipPanel
                  currentPowerPlantSize={powerPlantSize}
                  onNameChanged={this.updateShipName}
                  onHullChanged={this.updateShipHull}
                  onPowerPlantChanged={this.updateShipPowerPlant}
                  onPowerPlantSizeChanged={this.updateShipPowerPlantSize} />
                <ShipDebug ship={this.state.ship} />
              </Stack>
            </PivotItem>
          </Pivot>
        </Customizer>
      </div>
    );
  }

  // Based on: https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react#51136076
  private updateShipName: (x: string) => void = (x) => {
    this.state.ship.name = x;
    this.forceUpdate();
  }

  private updateShipHull: (x: HullPart) => void = (x) => {
    this.state.ship.hull = x;
    this.forceUpdate();
  }

  private updateShipPowerPlant: (x: PowerPlantPart) => void = (x) => {
    this.state.ship.powerPlantPart = x;
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
