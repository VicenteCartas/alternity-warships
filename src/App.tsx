import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import React, { Component } from "react";
import { ShipDebug } from "./components/shipDebug";
import { ShipPanel } from "./components/shipPanel";
import { Ship } from "./model/ship";

initializeIcons();

class App extends Component {
  private readonly ship: Ship = new Ship();

  public render() {
    return (
      <div>
        <ShipPanel ship={this.ship} />
        <ShipDebug ship={this.ship} />
      </div>
    );
  }
}

export default App;
